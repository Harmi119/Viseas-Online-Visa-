import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Countries.css';

function Countries() {
  const [countries] = useState([
    {
      id: 1,
      name: "United States",
      flag: "🇺🇸",
      visaTypes: ["Tourist", "Work", "Student", "Business"],
      image: "https://www.nationsencyclopedia.com/photos/united-states-of-america-1087.jpg",
      description: "Explore diverse landscapes, world-class universities, and endless opportunities in the land of the free.",
      processingTime: "15-30 days",
      difficulty: "Medium",
      popular: true,
      continent: "North America"
    },
    {
      id: 2,
      name: "Canada",
      flag: "🇨🇦",
      visaTypes: ["Visitor", "Work", "Study", "Express Entry"],
      image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/27000/27764-Moraine-Lake.jpg",
      description: "A welcoming country with stunning natural beauty, excellent healthcare, and multicultural cities.",
      processingTime: "20-45 days",
      difficulty: "Easy",
      popular: true,
      continent: "North America"
    },
    {
      id: 3,
      name: "United Kingdom",
      flag: "🇬🇧",
      visaTypes: ["Standard Visitor", "Tier 2", "Student", "Skilled Worker"],
      image: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d440f387-a3b4-4c66-b6e7-296fa5563e89-Wat-Buddhapadipa-Wimbeldon.jpg",
      description: "Rich history, prestigious universities, and vibrant cities with excellent career opportunities.",
      processingTime: "10-25 days",
      difficulty: "Medium",
      popular: true,
      continent: "Europe"
    },
    {
      id: 4,
      name: "Australia",
      flag: "🇦🇺",
      visaTypes: ["Visitor", "Skilled Worker", "Student", "Working Holiday"],
      image: "https://www.celebritycruises.com/blog/content/uploads/2020/06/places-to-visit-in-new-zealand-sydney-opera-house-1024x683.jpg",
      description: "Sun-kissed beaches, unique wildlife, and a high quality of life down under.",
      processingTime: "20-35 days",
      difficulty: "Medium",
      popular: true,
      continent: "Oceania"
    },
    {
      id: 5,
      name: "Germany",
      flag: "🇩🇪",
      visaTypes: ["Schengen", "National Visa", "EU Blue Card", "Student"],
      image: "https://foreignpolicy.com/wp-content/uploads/2022/06/Pacific-islands-GettyImages-1193316529.jpg?w=800?quality=80",
      description: "Innovation hub with strong economy, excellent education, and rich cultural heritage.",
      processingTime: "15-30 days",
      difficulty: "Easy",
      popular: false,
      continent: "Europe"
    },
    {
      id: 6,
      name: "New Zealand",
      flag: "🇳🇿",
      visaTypes: ["Visitor", "Work", "Study", "Skilled Migrant"],
      image: "https://www.celebritycruises.com/blog/content/uploads/2020/06/places-to-visit-in-new-zealand-cathedral-cove.jpg",
      description: "Adventure paradise with breathtaking landscapes and friendly locals.",
      processingTime: "25-40 days",
      difficulty: "Medium",
      popular: false,
      continent: "Oceania"
    },
    {
      id: 7,
      name: "France",
      flag: "🇫🇷",
      visaTypes: ["Schengen", "Long-stay", "Student", "Work"],
      image: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
      description: "Art, cuisine, romance, and world-renowned universities in the heart of Europe.",
      processingTime: "15-25 days",
      difficulty: "Easy",
      popular: false,
      continent: "Europe"
    },
    {
      id: 8,
      name: "Japan",
      flag: "🇯🇵",
      visaTypes: ["Temporary Visitor", "Work", "Student", "Skilled Worker"],
      image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&h=250&fit=crop",
      description: "Perfect blend of ancient traditions and cutting-edge technology.",
      processingTime: "10-20 days",
      difficulty: "Medium",
      popular: false,
      continent: "Asia"
    },
    {
      id: 9,
      name: "United Arab Emirates",
      flag: "🇦🇪",
      visaTypes: ["Tourist", "Residence", "Business", "Transit"],
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
      description: "Luxury destination and business hub with tax-free lifestyle in the desert.",
      processingTime: "5-15 days",
      difficulty: "Easy",
      popular: false,
      continent: "Asia"
    },
    {
      id: 10,
      name: "Singapore",
      flag: "🇸🇬",
      visaTypes: ["Tourist", "Work", "Student", "Business"],
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=250&fit=crop",
      description: "Modern city-state with excellent infrastructure and multicultural environment.",
      processingTime: "3-10 days",
      difficulty: "Easy",
      popular: false,
      continent: "Asia"
    },
    {
      id: 11,
      name: "Netherlands",
      flag: "🇳🇱",
      visaTypes: ["Schengen", "Highly Skilled Migrant", "Student"],
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=250&fit=crop",
      description: "Progressive nation with excellent work-life balance and bike-friendly cities.",
      processingTime: "15-30 days",
      difficulty: "Easy",
      popular: false,
      continent: "Europe"
    },
    {
      id: 12,
      name: "Switzerland",
      flag: "🇨🇭",
      visaTypes: ["Schengen", "Work", "Student", "Business"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      description: "Alpine paradise with high living standards and strong economy.",
      processingTime: "20-35 days",
      difficulty: "Hard",
      popular: false,
      continent: "Europe"
    },
    {
      id: 13,
      name: "Spain",
      flag: "🇪🇸",
      visaTypes: ["Schengen", "Golden Visa", "Student"],
      image: "https://www.celebritycruises.com/blog/content/uploads/2021/05/spanish-islands-tenerife-hero.jpg",
      description: "Vibrant culture, delicious cuisine, and beautiful beaches with diverse visa options.",
      processingTime: "10-20 days",
      difficulty: "Medium",
      popular: false,
      continent: "Europe"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  const continents = ['All', 'North America', 'Europe', 'Asia', 'Oceania'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredCountries = useMemo(() => {
    return countries.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.visaTypes.some(type => type.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesContinent = selectedContinent === 'All' || country.continent === selectedContinent;
      const matchesDifficulty = selectedDifficulty === 'All' || country.difficulty === selectedDifficulty;
      const matchesPopular = !showPopularOnly || country.popular;

      return matchesSearch && matchesContinent && matchesDifficulty && matchesPopular;
    });
  }, [countries, searchTerm, selectedContinent, selectedDifficulty, showPopularOnly]);

  const handleCountryClick = useCallback((e, country) => {
    console.log('Selected country card clicked (will navigate via Link):', country.name);
  }, []);

  const clearAllFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedContinent('All');
    setSelectedDifficulty('All');
    setShowPopularOnly(false);
  }, []);

  return (
    <div className="countries-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-heading">Explore Visa Options by Country 🗺</h1>
          <p className="hero-subheading">
            Discover endless possibilities! We provide comprehensive visa services for destinations worldwide,
            tailored to your dreams and aspirations.
          </p>
        </div>
      </section>

      <main className="main-content container">
        <section className="filters-section">
          <div className="filter-group">
            <input
              type="text"
              placeholder="🔍 Search countries or visa types..."
              className="filter-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <select
              className="filter-select"
              value={selectedContinent}
              onChange={(e) => setSelectedContinent(e.target.value)}
            >
              {continents.map(continent => (
                <option key={continent} value={continent}>
                  {continent === 'All' ? '🌍 All Continents' : continent}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <select
              className="filter-select"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'All' ? '📊 All Levels' : difficulty}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <button
              type="button"
              onClick={() => setShowPopularOnly(!showPopularOnly)}
              className={`filter-button ${showPopularOnly ? 'filter-button-active' : ''}`}
            >
              ⭐ Popular Only
            </button>
          </div>
          <div className="filter-results-count">
            Found <span className="results-number">{filteredCountries.length}</span> destinations
          </div>
        </section>

        <section className="country-cards-grid">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <Link
                key={country.id}
                to={`/countries/${country.id}`}
                className="country-card-item"
                aria-label={`Learn more about ${country.name}`}
              >
                <img src={country.image} alt={country.name} className="country-card-image" />
                <div className="country-card-content">
                  <h3 className="country-card-title">{country.name}</h3>
                  <p className="country-card-visa-types">
                    {country.visaTypes.join(', ')} Visa
                  </p>
                  <p className="country-card-description">{country.description}</p>
                  <div className="country-card-info">
                    <span className="country-card-processing-time">
                      Processing Time: <strong>{country.processingTime}</strong>
                    </span>
                    <span className={`country-card-difficulty country-card-difficulty-${country.difficulty.toLowerCase()}`}>
                      Difficulty: <strong>{country.difficulty}</strong>
                    </span>
                  </div>
                </div>
                <div className="country-card-learn-more">
                  <span>
                    Learn More
                    <svg className="learn-more-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-countries-found">
              <div className="no-countries-icon">😔</div>
              <h3 className="no-countries-title">No destinations found</h3>
              <p className="no-countries-message">It looks like no countries match your current search and filters.</p>
              <button
                type="button"
                onClick={clearAllFilters}
                className="clear-filters-button"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </section>

        <section className="cta-section-countries">
          <h2 className="cta-heading-countries">Don't see your desired destination? 🤔</h2>
          <p className="cta-subheading-countries">
            Our network is constantly expanding, and we're always ready to help with special requests.
            Reach out to us for personalized consultation and discover new possibilities.
          </p>
          <Link to="/contact" className="cta-button-countries">
            Request a Consultation 💬
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Countries;
