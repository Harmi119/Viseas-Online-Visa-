const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Serve uploaded images publicly
app.use("/uploads", express.static(path.join(__dirname, "public")));

// ✅ MySQL Connection (using database "user1")
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user1" // use the correct DB as per your phpMyAdmin
});

con.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Error:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

// ✅ Multer Storage Config
const storage = multer.diskStorage({
  destination: path.join(__dirname, './public/'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });


// ===================== ✉️ AUTH APIs ======================

// 👤 Register
app.post("/api/register", (req, res) => {
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !mobile || !password) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  const checkEmail = "SELECT * FROM user WHERE email = ?";
  con.query(checkEmail, [email], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Server error" });

    if (result.length > 0) {
      return res.status(200).json({ success: false, message: "Email already registered" });
    }

    const insertUser = "INSERT INTO user (name, email, mobile, password) VALUES (?, ?, ?, ?)";
    con.query(insertUser, [name, email, mobile, password], (err) => {
      if (err) return res.status(500).json({ success: false, message: "Insert failed" });
      return res.status(200).json({ success: true, message: "User registered successfully" });
    });
  });
});

// 🔐 Login
app.post("/api/verify", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password required" });
  }

  const query = "SELECT * FROM user WHERE email = ? AND password = ?";
  con.query(query, [email, password], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Server error" });

    if (result.length > 0) {
      res.status(200).json({ success: true, user: result[0] });
    } else {
      res.status(200).json({ success: false, message: "Invalid email or password" });
    }
  });
});

// 🔑 Forgot Password
app.post("/api/forgot-password", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  const checkEmailQuery = "SELECT * FROM user WHERE email = ?";
  con.query(checkEmailQuery, [email], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    if (result.length === 0) {
      return res.status(404).json({ success: false, message: "Email not registered" });
    }

    const user = result[0];

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mycity01012024@gmail.com",
        pass: "sywnhxhhcezzlmvj",
      },
    });

    const mailOptions = {
      from: "ITM SLS",
      to: user.email,
      subject: "Your Password - Viseas App",
      html: `<h3>Hello ${user.name},</h3><p>Your login password is: <strong>${user.password}</strong></p><p>Please keep it safe.</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) return res.status(500).json({ success: false, message: "Failed to send email" });

      res.status(200).json({ success: true, message: "Password sent to your email" });
    });
  });
});


// ===================== 🌐 SERVICES APIs ======================

// 📤 Add New Service with Image
app.post("/api/add-service", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: "No file uploaded" });

  const { name, description, city, price } = req.body;
  const image = req.file.filename;

  const ins = "INSERT INTO services (name, description, city, image, price) VALUES (?, ?, ?, ?, ?)";
  con.query(ins, [name, description, city, image, price], (err) => {
    if (err) return res.status(500).json({ success: false, message: "Insert failed" });
    res.json({ success: true, message: "Service added successfully" });
  });
});

// 📥 Get All Services
app.get("/api/services", (req, res) => {
  const sel = "SELECT * FROM services";
  con.query(sel, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to fetch services" });
    res.json({ success: true, services: result });
  });
});

// 🌍 Get Destinations
app.get("/api/dest_get", (req, res) => {
  const query = "SELECT * FROM destination";
  con.query(query, (err, result) => {
    if (err) return res.status(500).send("Error");
    res.send(result);
  });
});

// 💸 Payment Success
app.post("/api/payment-success", (req, res) => {
  const { payment_id, title, price, user } = req.body;

  const query = "INSERT INTO payments (payment_id, service, amount, user) VALUES (?, ?, ?, ?)";
  con.query(query, [payment_id, title, price, user], (err) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to save payment" });
    res.status(200).json({ success: true, message: "Payment saved successfully" });
  });
});

// 📅 Booking API
app.post("/api/booking_tbl", (req, res) => {
  const { user_id, service_id, amount, payment_status, booking_date } = req.body;

  const query = "INSERT INTO booking_tbl (user_id, service_id, amount, payment_status, booking_date) VALUES (?, ?, ?, ?, ?)";
  con.query(query, [user_id, service_id, amount, payment_status, booking_date], (err) => {
    if (err) return res.status(500).json({ message: "Error inserting booking" });
    res.status(200).json({ message: "Booking successful" });
  });
});


// ===================== 🚀 START SERVER ======================
app.listen(2828, () => {
  console.log("✅ Server running on http://localhost:2828");
});
