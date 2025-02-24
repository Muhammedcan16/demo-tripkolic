import { useState } from 'react';
import TourCard from './TourCard';

const SearchTours = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    themes: '',
    date: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSearch = async () => {
    try {
      // Filtreleri query string'e dönüştürme
      const queryParams = new URLSearchParams({
        location: filters.location || '',
        selectedThemes: filters.themes || '',
        startDate: filters.date || '',
        maxPrice: filters.price || '',
      }).toString();

      const response = await fetch(`/api/tours?${queryParams}`);
      const data = await response.json();

      if (data.tours && data.tours.length > 0) {
        setSearchResults(data.tours);
        setShowNotification(false);
      } else {
        setSearchResults([]);
        setShowNotification(true);
      }
    } catch (error) {
      console.error('Arama hatası:', error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          name="location"
          placeholder="Şehir"
          value={filters.location}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="themes"
          placeholder="Tema"
          value={filters.themes}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Maksimum Fiyat"
          value={filters.price}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
      </div>

      <button 
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Tur Ara
      </button>

      {searchResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {searchResults.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      )}

      {showNotification && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <span className="block sm:inline">Seçilen kriterlere uygun tur bulunamadı.</span>
          <button 
            onClick={() => setShowNotification(false)}
            className="absolute top-0 right-0 px-4 py-3"
          >
            <span className="text-red-500">&times;</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchTours;