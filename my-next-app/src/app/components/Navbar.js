'use client';

import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

const staticActivities = ['Hiking', 'Swimming', 'Diving', 'Safari'];
const vehicles = ['Car', 'Bike', 'Boat'];
const features = ['Air Conditioning', 'GPS', 'Bluetooth'];

const ticketTypesList = [
  'Concert',
  'Sports',
  'Theatre',
  'Museum',
  'Theme Park',
  'Exhibition'
];

const ageGroupsList = [
  'Adult (18+)',
  'Youth (12-17)',
  'Child (3-11)',
  'Infant (0-2)'
];

const transferTypes = [
  'Airport to Hotel',
  'Hotel to Airport',
  'Hotel to Hotel',
  'Port to Hotel',
  'Hotel to Port',
  'Custom Transfer'
];

const vehicleTransferTypes = [
  'Standard Sedan',
  'Business Sedan',
  'Luxury Sedan',
  'Minivan',
  'VIP Van',
  'Bus'
];

const transferFeatures = [
  'Meet & Greet',
  'Flight Tracking',
  'Child Seat',
  'Extra Waiting Time',
  'Multiple Stops',
  'VIP Service'
];

const Navbar = ({ setFilteredTours, setFilteredTickets, setSearchPerformed, setIsLoading, setSelectedCategory, setFilteredVehicles, setFilteredTransfers }) => {
  const [localCategory, setLocalCategory] = useState(null);
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [filters, setFilters] = useState([]);
  const [priceRange, setPriceRange] = useState(0);
  const [timeRange, setTimeRange] = useState(0);
  const [groupSize, setGroupSize] = useState(1);
  const [location, setLocation] = useState('');
  const [debouncedLocation, setDebouncedLocation] = useState(location);
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [isLocationValid, setIsLocationValid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ticketDate, setTicketDate] = useState('');
  const [selectedTicketTypes, setSelectedTicketTypes] = useState([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [rentStartDate, setRentStartDate] = useState('');
  const [rentEndDate, setRentEndDate] = useState('');
  const [rentLocation, setRentLocation] = useState('');
  const [selectedRentType, setSelectedRentType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [transferType, setTransferType] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [luggageCount, setLuggageCount] = useState(0);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [transferDate, setTransferDate] = useState('');
  const [tourStartDate, setTourStartDate] = useState('');
  const [tourEndDate, setTourEndDate] = useState('');
  const [debouncedRentLocation, setDebouncedRentLocation] = useState(rentLocation);
  const [isRentLocationValid, setIsRentLocationValid] = useState(false);
  const [activities, setActivities] = useState([]);
  const [vehicleOptions, setVehicleOptions] = useState([]);
  const [localFilteredTours, setLocalFilteredTours] = useState([]);
  const [localSearchPerformed, setLocalSearchPerformed] = useState(false);
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);
  const [features, setFeatures] = useState([]);
  const [localFilteredTransfers, setLocalFilteredTransfers] = useState([]);

  const categories = ['Tours', 'Tickets', 'Rent', 'Transfer'];

  const categoryFilters = {
    Tours: ['Beach', 'Adventure', 'City Tour'],
    Tickets: ['Adult', 'Child', 'Senior'],
    Rent: ['Car', 'Bike', 'Boat'],
    Transfer: ['Airport', 'Hotel', 'Cruise Port'],
  };

  const rentTypes = ['Economy', 'Compact', 'Mid-size', 'SUV', 'Luxury', 'Van'];
  const transmissionTypes = ['Automatic', 'Manual'];
  const fuelTypes = ['Gasoline', 'Diesel', 'Electric', 'Hybrid'];

  const formatTime = (time) => {
    return (time < 10 ? '0' + time : time) + ':00';
  };

  const [ticketTypes] = useState(ticketTypesList);
  const [ageGroups] = useState(ageGroupsList);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedLocation(location);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    if (debouncedLocation && localCategory === 'Tours') {
      Promise.all([
        fetch(`/api/tourThemes?location=${debouncedLocation}`),
        fetch(`/api/tourActivities?location=${debouncedLocation}`),
        fetch(`/api/tourVehicles?location=${debouncedLocation}`),
        fetch(`/api/tourFeatures?location=${debouncedLocation}`)
      ])
        .then(([themesRes, activitiesRes, vehiclesRes, featuresRes]) => 
          Promise.all([
            themesRes.json(), 
            activitiesRes.json(), 
            vehiclesRes.json(),
            featuresRes.json()
          ])
        )
        .then(([themesData, activitiesData, vehiclesData, featuresData]) => {
          if (themesData.length > 0 && activitiesData.length > 0 && 
              vehiclesData.length > 0 && featuresData.length > 0) {
            setEvents(themesData);
            setActivities(activitiesData);
            setVehicleOptions(vehiclesData);
            setFeatures(featuresData);
            setIsLocationValid(true);
          } else {
            setEvents([]);
            setActivities([]);
            setVehicleOptions([]);
            setFeatures([]);
            setIsLocationValid(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching tour data:', error);
          setIsLocationValid(false);
        });
    }
  }, [debouncedLocation, localCategory]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedRentLocation(rentLocation);
    }, 500);
    return () => clearTimeout(timer);
  }, [rentLocation]);

  useEffect(() => {
    if (debouncedRentLocation && localCategory === 'Rent') {
      fetch(`/api/rent?location=${debouncedRentLocation}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.total > 0) {
            setIsRentLocationValid(true);
          } else {
            setIsRentLocationValid(false);
          }
        })
        .catch((error) => {
          console.error('Error validating rent location:', error);
          setIsRentLocationValid(false);
        });
    }
  }, [debouncedRentLocation, localCategory]);

  useEffect(() => {
    if (debouncedLocation && localCategory === 'Tickets') {
      fetch(`/api/tickets?location=${debouncedLocation}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.total > 0) {
            setIsLocationValid(true);
          } else {
            setIsLocationValid(false);
          }
        })
        .catch((error) => {
          console.error('Error validating location:', error);
          setIsLocationValid(false);
        });
    }
  }, [debouncedLocation, localCategory]);

  useEffect(() => {
    if (debouncedLocation && localCategory === 'Transfer') {
      fetch(`/api/cities?location=${encodeURIComponent(debouncedLocation)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success && data.isValid) {
            setIsLocationValid(true);
          } else {
            setIsLocationValid(false);
          }
        })
        .catch((error) => {
          console.error('Error validating location:', error);
          setIsLocationValid(false);
        });
    }
  }, [debouncedLocation, localCategory]);

  const handleCategorySelect = (category) => {
    setLocalCategory(category);
    setSelectedCategory(category);
    setIsCategorySelected(true);
    handleReset();
    
    setFilteredTours([]);
    setFilteredTickets([]);
    setSearchPerformed(false);
  };

  const handlePopupClose = () => {
    setIsCategorySelected(false);
    setFilters([]);
    setLocation('');
    setEvents([]);
    setSelectedEvents([]);
    setSelectedActivities([]);
    setTimeRange(0);
    setGroupSize(1);
    setPriceRange(0);
    setSelectedVehicles([]);
    setSelectedFeatures([]);
    setIsLocationValid(false);
    setTicketDate('');
    setSelectedTicketTypes([]);
    setSelectedAgeGroups([]);
    setTicketQuantity(1);
    setRentStartDate('');
    setRentEndDate('');
    setRentLocation('');
    setSelectedRentType('');
    setTransmission('');
    setFuelType('');
    setTransferType('');
    setPassengerCount(1);
    setLuggageCount(0);
    setPickupLocation('');
    setDropoffLocation('');
    setTransferDate('');
    setTourStartDate('');
    setTourEndDate('');
    setIsRentLocationValid(false);
    setDebouncedRentLocation('');
    setActivities([]);
    setVehicleOptions([]);
    setFeatures([]);
  };

  const handleReset = () => {
    setLocation('');
    setEvents([]);
    setSelectedEvents([]);
    setSelectedActivities([]);
    setTimeRange(0);
    setGroupSize(1);
    setPriceRange(0);
    setSelectedVehicles([]);
    setSelectedFeatures([]);
    setIsLocationValid(false);
    setTicketDate('');
    setSelectedTicketTypes([]);
    setSelectedAgeGroups([]);
    setTicketQuantity(1);
    setRentStartDate('');
    setRentEndDate('');
    setRentLocation('');
    setSelectedRentType('');
    setTransmission('');
    setFuelType('');
    setTransferType('');
    setPassengerCount(1);
    setLuggageCount(0);
    setPickupLocation('');
    setDropoffLocation('');
    setTransferDate('');
    setTourStartDate('');
    setTourEndDate('');
    setIsRentLocationValid(false);
    setDebouncedRentLocation('');
    setActivities([]);
    setVehicleOptions([]);
    setFeatures([]);
  };

  const handleSearch = async () => {
    if (!location && localCategory !== 'Rent') return;
    if (!rentLocation && localCategory === 'Rent') return;

    setIsLoadingLocal(true);
    setIsLoading(true);
    setLocalSearchPerformed(true);
    setSearchPerformed(true);

    try {
      if (localCategory === 'Tours') {
        const params = new URLSearchParams();
        
        params.append('location', location);

        if (selectedEvents.length > 0) {
          params.append('selectedThemes', selectedEvents.join(','));
        }
        
        if (selectedActivities.length > 0) {
          params.append('selectedActivities', selectedActivities.join(','));
        }
        
        if (selectedVehicles.length > 0) {
          params.append('selectedVehicles', selectedVehicles.join(','));
        }
        
        if (selectedFeatures.length > 0) {
          params.append('selectedFeatures', selectedFeatures.join(','));
        }
        
        if (timeRange > 0) {
          params.append('startTime', timeRange.toString());
        }
        
        if (groupSize > 1) {
          params.append('groupSize', groupSize.toString());
        }
        
        if (priceRange > 0 && priceRange < 1000) {
          params.append('maxPrice', priceRange.toString());
          console.log('Price filter added:', priceRange);
        } else {
          console.log('Price filter skipped:', priceRange);
        }
        
        if (tourStartDate) {
          params.append('startDate', tourStartDate);
        }

        console.log('Search params:', Object.fromEntries(params));
        const response = await fetch(`/api/tours?${params}`);
        const data = await response.json();

        if (response.ok) {
          setFilteredTours(data.tours);
          handlePopupClose();
        }
      } 
      else if (localCategory === 'Tickets') {
        const params = new URLSearchParams();
        
        params.append('location', location);

        if (selectedTicketTypes.length > 0) {
          params.append('ticketType', selectedTicketTypes.join(','));
        }
        
        if (ticketDate) {
          params.append('selectedDate', ticketDate);
        }
        
        if (ticketQuantity > 1) {
          params.append('quantity', ticketQuantity.toString());
        }
        
        if (priceRange > 0 && priceRange < 1000) {
          params.append('maxPrice', priceRange.toString());
        }

        const response = await fetch(`/api/tickets?${params}`);
        const data = await response.json();

        if (response.ok && data.success) {
          setFilteredTickets(data.tickets);
          handlePopupClose();
        }
      }
      else if (localCategory === 'Rent') {
        const params = new URLSearchParams();
        
        params.append('location', rentLocation);

        if (selectedRentType) {
          params.append('type', selectedRentType);
        }

        if (transmission) {
          params.append('transmission', transmission);
        }

        if (fuelType) {
          params.append('fuelType', fuelType);
        }

        if (passengerCount > 1) {
          params.append('passengers', passengerCount.toString());
        }

        if (rentStartDate) {
          params.append('startDate', rentStartDate);
        }
        if (rentEndDate) {
          params.append('endDate', rentEndDate);
        }

        if (priceRange > 0 && priceRange < 1000) {
          params.append('maxPrice', priceRange.toString());
          console.log('Price filter added:', priceRange);
        } else {
          console.log('Price filter skipped:', priceRange);
        }

        console.log('Search params:', Object.fromEntries(params));
        const response = await fetch(`/api/rent?${params}`);
        const data = await response.json();

        if (response.ok && data.success) {
          setFilteredVehicles(data.vehicles);
          handlePopupClose();
        }
      }
      else if (localCategory === 'Transfer') {
        const params = new URLSearchParams();
        
        params.append('location', location);

        if (transferType) {
          params.append('transferType', transferType);
        }

        if (selectedVehicles.length > 0) {
          params.append('vehicleType', selectedVehicles[0]);
        }

        if (passengerCount > 1) {
          params.append('passengers', passengerCount.toString());
        }

        if (luggageCount > 0) {
          params.append('luggage', luggageCount.toString());
        }

        if (selectedFeatures.length > 0) {
          params.append('features', selectedFeatures.join(','));
        }

        if (priceRange > 0 && priceRange < 100) {
          params.append('maxPrice', priceRange.toString());
        }

        console.log('Transfer search params:', Object.fromEntries(params));
        const response = await fetch(`/api/transfer?${params}`);
        const data = await response.json();

        if (response.ok && data.success) {
          setFilteredTransfers(data.transfers);
          handlePopupClose();
        }
      }
    } catch (error) {
      console.error('Error in search:', error);
    } finally {
      setIsLoadingLocal(false);
      setIsLoading(false);
    }
  };

  const validateLocation = async () => {
    if (!location) return;

    try {
      // Burada location validasyonu yapılabilir
      setIsLocationValid(true);
    } catch (error) {
      console.error('Error validating location:', error);
      setIsLocationValid(false);
    }
  };

  return (
    <nav className="bg-white text-black p-4 shadow-md relative">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        <div className="hidden md:block flex-grow text-center">
          <ul className="flex justify-center space-x-4">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategorySelect(category)}
                className="cursor-pointer hover:bg-primary-500 p-2 text-sm"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40">
          <ul className="flex flex-col py-2">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => {
                  handleCategorySelect(category);
                  setIsMenuOpen(false);
                }}
                className="cursor-pointer hover:bg-primary-500 p-3 text-sm border-b border-gray-100"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isCategorySelected && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={handlePopupClose}
        >
          <div 
            className="w-full md:w-2/3 bg-white text-black p-3 space-y-2 rounded-lg relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handlePopupClose}
              className="absolute top-2 right-2 cursor-pointer hover:bg-red-300 bg-red-200 p-2 rounded-full transition-colors duration-200 z-50"
              type="button"
              aria-label="Close popup"
            >
              <X size={16} />
            </button>

            <div className="absolute top-1 left-0 w-full flex items-center px-2">
              <div className="flex-1 text-left text-base font-semibold ml-2">
                {localCategory}
              </div>
              <div className="flex-1 text-center text-base font-semibold">
                Filters
              </div>
              <div className="flex-1" />
            </div>

            <div className="pt-8 space-y-2">
              {localCategory === 'Tours' && (
                <>
                <div>
                  <label htmlFor="location" className="block text-xs font-semibold">
                    Enter Location:
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                    className="w-full p-1 border border-gray-300 rounded mt-1 text-xs"
                  />
                </div>

              {isLocationValid && (
                    <>
                      <div>
                        <label htmlFor="tourDate" className="block text-xs font-semibold">
                          Tour Date:
                        </label>
                        <input
                          type="date"
                          id="tourDate"
                          value={tourStartDate}
                          onChange={(e) => setTourStartDate(e.target.value)}
                          className="w-full p-1 border border-gray-300 rounded mt-1 text-xs"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>

                <div>
                  <h3 className="font-semibold text-xs">Theme</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                    {events.map((event) => (
                      <button
                        key={event.id}
                        onClick={() =>
                          setSelectedEvents((prev) =>
                            prev.includes(event.id)
                              ? prev.filter((id) => id !== event.id)
                              : [...prev, event.id]
                          )
                        }
                        className={`w-full p-1 border rounded-md text-xs ${
                          selectedEvents.includes(event.id)
                            ? 'bg-primary-500 text-black'
                            : 'hover:bg-primary-500 hover:text-black'
                        }`}
                      >
                        {event.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-xs">Activities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                    {activities.map((activity) => (
                      <button
                              key={activity.id}
                        onClick={() =>
                          setSelectedActivities((prev) =>
                                  prev.includes(activity.id)
                                    ? prev.filter((id) => id !== activity.id)
                                    : [...prev, activity.id]
                          )
                        }
                        className={`w-full p-1 border rounded-md text-xs ${
                                selectedActivities.includes(activity.id)
                            ? 'bg-primary-500 text-black'
                            : 'hover:bg-primary-500 hover:text-black'
                        }`}
                      >
                              {activity.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-xs">Start Time</h3>
                  <div className="flex items-center space-x-1">
                    <input
                      type="range"
                      min="0"
                      max="24"
                      value={timeRange}
                      onChange={(e) => setTimeRange(parseInt(e.target.value))}
                      className="w-3/4"
                    />
                    <div className="w-12 text-xs text-right">24:00</div>
                    <button className="ml-2 w-16 h-8 flex justify-center items-center bg-white text-black border border-black rounded text-xs">
                      {formatTime(timeRange)}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-xs">Group Size</h3>
                  <div className="flex items-center space-x-1">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={groupSize}
                      onChange={(e) => setGroupSize(parseInt(e.target.value))}
                      className="w-3/4"
                    />
                    <div className="w-12 text-xs text-right">100</div>
                    <button className="ml-2 w-16 h-8 flex justify-center items-center bg-white text-black border border-black rounded text-xs">
                      {groupSize}
                    </button>
                  </div>
                </div>

                      <div>
                        <h3 className="font-semibold text-xs">Vehicles</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                          {vehicleOptions.map((vehicle) => (
                            <button
                              key={vehicle.id}
                              onClick={() =>
                                setSelectedVehicles((prev) =>
                                  prev.includes(vehicle.id)
                                    ? prev.filter((id) => id !== vehicle.id)
                                    : [...prev, vehicle.id]
                                )
                              }
                              className={`w-full p-1 border rounded-md text-xs ${
                                selectedVehicles.includes(vehicle.id)
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {vehicle.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Features</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                          {features.map((feature) => (
                            <button
                              key={feature.id}
                              onClick={() =>
                                setSelectedFeatures((prev) =>
                                  prev.includes(feature.id)
                                    ? prev.filter((id) => id !== feature.id)
                                    : [...prev, feature.id]
                                )
                              }
                              className={`w-full p-1 border rounded-md text-xs ${
                                selectedFeatures.includes(feature.id)
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {feature.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Price Range</h3>
                        <div className="flex items-center space-x-1">
                          <input
                            type="range"
                            min="0"
                            max="1000"
                            value={priceRange}
                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                            className="w-3/4"
                          />
                          <div className="w-12 text-xs text-right">$1000</div>
                          <button className="ml-2 w-16 h-8 flex justify-center items-center bg-white text-black border border-black rounded text-xs">
                            ${priceRange}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              {localCategory === 'Tickets' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-xs">Location</h3>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        setIsLocationValid(false);
                      }}
                      className="w-full p-2 border rounded-md text-sm"
                      placeholder="Enter location..."
                    />
                  </div>

                  {isLocationValid && (
                    <>
                      <div>
                        <h3 className="font-semibold text-xs">Event Type</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                          {ticketTypes.map((type) => (
                            <button
                              key={type}
                              onClick={() =>
                                setSelectedTicketTypes((prev) =>
                                  prev.includes(type)
                                    ? prev.filter((item) => item !== type)
                                    : [...prev, type]
                                )
                              }
                              className={`w-full p-1 border rounded-md text-xs ${
                                selectedTicketTypes.includes(type)
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Date</h3>
                        <input
                          type="date"
                          value={ticketDate}
                          onChange={(e) => setTicketDate(e.target.value)}
                          className="w-full p-2 border rounded-md text-sm"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Age Groups</h3>
                        <div className="grid grid-cols-2 gap-1">
                          {ageGroups.map((group) => (
                            <button
                              key={group}
                              onClick={() =>
                                setSelectedAgeGroups((prev) =>
                                  prev.includes(group)
                                    ? prev.filter((item) => item !== group)
                                    : [...prev, group]
                                )
                              }
                              className={`w-full p-1 border rounded-md text-xs ${
                                selectedAgeGroups.includes(group)
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {group}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Quantity</h3>
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            min="1"
                            value={ticketQuantity}
                            onChange={(e) => setTicketQuantity(parseInt(e.target.value))}
                            className="w-full p-2 border rounded-md text-sm"
                          />
                          <span className="text-xs text-gray-500">tickets</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Price Range</h3>
                        <div className="flex items-center space-x-1">
                          <input
                            type="range"
                            min="0"
                            max="1000"
                            value={priceRange}
                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                            className="w-3/4"
                          />
                          <div className="w-12 text-xs text-right">$1000</div>
                          <button className="ml-2 w-16 h-8 flex justify-center items-center bg-white text-black border border-black rounded text-xs">
                            ${priceRange}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {localCategory === 'Rent' && (
                <>
                  <div>
                    <label htmlFor="rentLocation" className="block text-xs font-semibold">
                      Location:
                    </label>
                    <input
                      type="text"
                      id="rentLocation"
                      value={rentLocation}
                      onChange={(e) => {
                        setRentLocation(e.target.value);
                        setIsRentLocationValid(false);
                      }}
                      className="w-full p-1 border border-gray-300 rounded mt-1 text-xs"
                      placeholder="Enter location"
                    />
                  </div>

                  {isRentLocationValid && (
                    <>
                      <div>
                        <h3 className="font-semibold text-xs">Vehicle Type</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                          {['Car', 'Van', 'SUV', 'Luxury'].map((type) => (
                            <button
                              key={type}
                              onClick={() => setSelectedRentType(selectedRentType === type ? '' : type)}
                              className={`w-full p-1 border rounded-md text-xs ${
                                selectedRentType === type
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Transmission</h3>
                        <div className="grid grid-cols-2 gap-1">
                          {['Automatic', 'Manual'].map((type) => (
                            <button
                              key={type}
                              onClick={() => setTransmission(transmission === type ? '' : type)}
                              className={`w-full p-1 border rounded-md text-xs ${
                                transmission === type
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Fuel Type</h3>
                        <div className="grid grid-cols-2 gap-1">
                          {['Gasoline', 'Diesel', 'Hybrid', 'Electric'].map((type) => (
                            <button
                              key={type}
                              onClick={() => setFuelType(fuelType === type ? '' : type)}
                              className={`w-full p-1 border rounded-md text-xs ${
                                fuelType === type
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <h3 className="font-semibold text-xs">Passengers</h3>
                          <div className="flex items-center space-x-2">
                            <input
                              type="number"
                              min="1"
                              max="9"
                              value={passengerCount}
                              onChange={(e) => setPassengerCount(parseInt(e.target.value))}
                              className="w-full p-1 border rounded-md text-xs"
                            />
                            <span className="text-xs text-gray-500">persons</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-xs">Luggage</h3>
                          <div className="flex items-center space-x-2">
                            <input
                              type="number"
                              min="0"
                              max="6"
                              value={luggageCount}
                              onChange={(e) => setLuggageCount(parseInt(e.target.value))}
                              className="w-full p-1 border rounded-md text-xs"
                            />
                            <span className="text-xs text-gray-500">pieces</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Features</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                          {['GPS', 'Bluetooth', 'Air Conditioning', 'Cruise Control', 'Parking Sensors', 'Backup Camera'].map((feature) => (
                            <button
                              key={feature}
                              onClick={() => setSelectedFeatures(prev => 
                                prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
                              )}
                              className={`w-full p-1 border rounded-md text-xs ${
                                selectedFeatures.includes(feature)
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {feature}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Price Range (per day)</h3>
                        <div className="flex items-center space-x-1">
                          <input
                            type="range"
                            min="0"
                            max="1000"
                            value={priceRange}
                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                            className="w-3/4"
                          />
                          <div className="w-12 text-xs text-right">$1000</div>
                          <button className="ml-2 w-16 h-8 flex justify-center items-center bg-white text-black border border-black rounded text-xs">
                            ${priceRange}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              {localCategory === 'Transfer' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-xs">Location</h3>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        setIsLocationValid(false);
                      }}
                      className="w-full p-2 border rounded-md text-sm"
                      placeholder="Enter location..."
                    />
                    {location && !isLocationValid && (
                      <p className="text-xs text-red-500 mt-1">
                        Please enter a valid location
                      </p>
                    )}
                  </div>

                  {isLocationValid && (
                    <>
                      <div>
                        <h3 className="font-semibold text-xs">Transfer Date</h3>
                        <input
                          type="date"
                          value={transferDate}
                          onChange={(e) => setTransferDate(e.target.value)}
                          className="w-full p-2 border rounded-md text-sm"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Transfer Type</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                          {transferTypes.map((type) => (
                            <button
                              key={type}
                              onClick={() => setTransferType(transferType === type ? '' : type)}
                              className={`w-full p-1 border rounded-md text-xs ${
                                transferType === type
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <h3 className="font-semibold text-xs">Passenger Count</h3>
                          <div className="flex items-center space-x-2">
                            <input
                              type="number"
                              min="1"
                              max="50"
                              value={passengerCount}
                              onChange={(e) => setPassengerCount(parseInt(e.target.value))}
                              className="w-full p-1 border rounded-md text-xs"
                            />
                            <span className="text-xs text-gray-500">persons</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-xs">Luggage Count</h3>
                          <div className="flex items-center space-x-2">
                            <input
                              type="number"
                              min="0"
                              max="10"
                              value={luggageCount}
                              onChange={(e) => setLuggageCount(parseInt(e.target.value))}
                              className="w-full p-1 border rounded-md text-xs"
                            />
                            <span className="text-xs text-gray-500">pieces</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Vehicle Type</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                          {vehicleTransferTypes.map((type) => (
                            <button
                              key={type}
                              onClick={() =>
                                setSelectedVehicles((prev) =>
                                  prev.includes(type)
                                    ? prev.filter((item) => item !== type)
                                    : [...prev, type]
                                )
                              }
                              className={`w-full p-1 border rounded-md text-xs ${
                                selectedVehicles.includes(type)
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Additional Features</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                          {transferFeatures.map((feature) => (
                            <button
                              key={feature}
                              onClick={() =>
                                setSelectedFeatures((prev) =>
                                  prev.includes(feature)
                                    ? prev.filter((item) => item !== feature)
                                    : [...prev, feature]
                                )
                              }
                              className={`w-full p-1 border rounded-md text-xs ${
                                selectedFeatures.includes(feature)
                                  ? 'bg-primary-500 text-black'
                                  : 'hover:bg-primary-500 hover:text-black'
                              }`}
                            >
                              {feature}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs">Price Range (per km)</h3>
                        <div className="flex items-center space-x-1">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={priceRange}
                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                            className="w-3/4"
                          />
                          <div className="w-12 text-xs text-right">$100</div>
                          <button className="ml-2 w-16 h-8 flex justify-center items-center bg-white text-black border border-black rounded text-xs">
                            ${priceRange}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-gray-200 text-black rounded text-xs"
                >
                  Reset
                </button>
                <button
                  onClick={handleSearch}
                  className="px-4 py-2 bg-primary-500 text-black rounded text-xs"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
