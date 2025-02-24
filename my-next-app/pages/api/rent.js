const rentData = [
  // İstanbul
  {
    id: 1,
    name: 'Mercedes C200',
    location: 'Istanbul',
    type: 'Luxury',
    category: 'Car',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    price: 150,
    features: ['GPS', 'Bluetooth', 'Leather Seats', 'Cruise Control'],
    passengers: 5,
    luggage: 3,
    description: 'Luxury sedan perfect for business travel',
    available: true,
    imageUrl: '/vehicles/mercedes-c200.jpg'
  },
  {
    id: 2,
    name: 'Volkswagen Transporter',
    location: 'Istanbul',
    type: 'Van',
    category: 'Van',
    transmission: 'Manual',
    fuelType: 'Diesel',
    price: 200,
    features: ['GPS', 'Air Conditioning', 'Large Cargo Space'],
    passengers: 9,
    luggage: 8,
    description: 'Spacious van for group travel',
    available: true,
    imageUrl: '/vehicles/vw-transporter.jpg'
  },

  // Ankara
  {
    id: 3,
    name: 'Toyota Corolla',
    location: 'Ankara',
    type: 'Economy',
    category: 'Car',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    price: 100,
    features: ['Bluetooth', 'Backup Camera', 'USB Port'],
    passengers: 5,
    luggage: 2,
    description: 'Efficient and comfortable city car',
    available: true,
    imageUrl: '/vehicles/toyota-corolla.jpg'
  },
  {
    id: 4,
    name: 'Ford Transit',
    location: 'Ankara',
    type: 'Van',
    category: 'Van',
    transmission: 'Manual',
    fuelType: 'Diesel',
    price: 180,
    features: ['Air Conditioning', 'Large Cargo Space'],
    passengers: 12,
    luggage: 10,
    description: 'Perfect for large groups',
    available: true,
    imageUrl: '/vehicles/ford-transit.jpg'
  },

  // İzmir
  {
    id: 5,
    name: 'BMW 320i',
    location: 'Izmir',
    type: 'Luxury',
    category: 'Car',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    price: 140,
    features: ['GPS', 'Leather Seats', 'Sunroof', 'Smart Key'],
    passengers: 5,
    luggage: 3,
    description: 'Premium driving experience',
    available: true,
    imageUrl: '/vehicles/bmw-320i.jpg'
  },
  {
    id: 6,
    name: 'Yamaha NMAX',
    location: 'Izmir',
    type: 'Scooter',
    category: 'Bike',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    price: 50,
    features: ['Storage Box', 'USB Charger'],
    passengers: 2,
    luggage: 1,
    description: 'Perfect for city exploration',
    available: true,
    imageUrl: '/vehicles/yamaha-nmax.jpg'
  },

  // Antalya
  {
    id: 7,
    name: 'Fiat 500 Cabrio',
    location: 'Antalya',
    type: 'Economy',
    category: 'Car',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    price: 90,
    features: ['Convertible Roof', 'Bluetooth', 'Air Conditioning'],
    passengers: 4,
    luggage: 1,
    description: 'Fun convertible for coastal drives',
    available: true,
    imageUrl: '/vehicles/fiat-500.jpg'
  },
  {
    id: 8,
    name: 'Sea Ray Sundancer',
    location: 'Antalya',
    type: 'Yacht',
    category: 'Boat',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    price: 1000,
    features: ['Cabin', 'Kitchen', 'Shower', 'Sun Deck'],
    passengers: 8,
    luggage: 4,
    description: 'Luxury yacht for Mediterranean cruising',
    available: true,
    imageUrl: '/vehicles/sea-ray.jpg'
  },

  // Muğla (Bodrum)
  {
    id: 9,
    name: 'Mini Cooper Convertible',
    location: 'Mugla',
    type: 'Economy',
    category: 'Car',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    price: 110,
    features: ['Convertible Roof', 'GPS', 'Bluetooth'],
    passengers: 4,
    luggage: 1,
    description: 'Stylish convertible for coastal roads',
    available: true,
    imageUrl: '/vehicles/mini-cooper.jpg'
  },
  {
    id: 10,
    name: 'Bayliner Element',
    location: 'Mugla',
    type: 'Boat',
    category: 'Boat',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    price: 400,
    features: ['Sun Deck', 'Swimming Platform'],
    passengers: 6,
    luggage: 2,
    description: 'Perfect day boat for bay hopping',
    available: true,
    imageUrl: '/vehicles/bayliner.jpg'
  },

  // Bursa
  {
    id: 11,
    name: 'Jeep Renegade',
    location: 'Bursa',
    type: 'SUV',
    category: 'Car',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    price: 130,
    features: ['4x4', 'GPS', 'Roof Rails'],
    passengers: 5,
    luggage: 4,
    description: 'Perfect for mountain trips',
    available: true,
    imageUrl: '/vehicles/jeep-renegade.jpg'
  },

  // Çanakkale
  {
    id: 12,
    name: 'Renault Clio',
    location: 'Canakkale',
    type: 'Economy',
    category: 'Car',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    price: 80,
    features: ['Air Conditioning', 'Bluetooth'],
    passengers: 5,
    luggage: 2,
    description: 'Efficient city car',
    available: true,
    imageUrl: '/vehicles/renault-clio.jpg'
  },

  // Aydın
  {
    id: 13,
    name: 'Honda PCX',
    location: 'Aydin',
    type: 'Scooter',
    category: 'Bike',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    price: 45,
    features: ['Storage Box', 'USB Charger'],
    passengers: 2,
    luggage: 1,
    description: 'Economic transport for city',
    available: true,
    imageUrl: '/vehicles/honda-pcx.jpg'
  },

  // Trabzon
  {
    id: 14,
    name: 'Dacia Duster',
    location: 'Trabzon',
    type: 'SUV',
    category: 'Car',
    transmission: 'Manual',
    fuelType: 'Diesel',
    price: 120,
    features: ['4x4', 'High Clearance', 'Roof Rails'],
    passengers: 5,
    luggage: 4,
    description: 'Robust SUV for mountain roads',
    available: true,
    imageUrl: '/vehicles/dacia-duster.jpg'
  },

  // Nevşehir (Kapadokya)
  {
    id: 15,
    name: 'Vespa Primavera',
    location: 'Nevsehir',
    type: 'Scooter',
    category: 'Bike',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    price: 55,
    features: ['Storage Box', 'Retro Style'],
    passengers: 2,
    luggage: 1,
    description: 'Stylish way to explore Cappadocia',
    available: true,
    imageUrl: '/vehicles/vespa.jpg'
  }
];

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let filteredVehicles = [...rentData];
  const {
    location,
    type,
    category,
    transmission,
    fuelType,
    maxPrice,
    passengers,
    features
  } = req.query;

  // Location Filter
  if (location) {
    filteredVehicles = filteredVehicles.filter(
      vehicle => vehicle.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  // Type Filter
  if (type) {
    filteredVehicles = filteredVehicles.filter(
      vehicle => vehicle.type === type
    );
  }

  // Category Filter
  if (category) {
    filteredVehicles = filteredVehicles.filter(
      vehicle => vehicle.category === category
    );
  }

  // Transmission Filter
  if (transmission) {
    filteredVehicles = filteredVehicles.filter(
      vehicle => vehicle.transmission === transmission
    );
  }

  // Fuel Type Filter
  if (fuelType) {
    filteredVehicles = filteredVehicles.filter(
      vehicle => vehicle.fuelType === fuelType
    );
  }

  // Price Filter
  if (maxPrice) {
    filteredVehicles = filteredVehicles.filter(
      vehicle => vehicle.price <= parseInt(maxPrice)
    );
  }

  // Passenger Count Filter
  if (passengers) {
    filteredVehicles = filteredVehicles.filter(
      vehicle => vehicle.passengers >= parseInt(passengers)
    );
  }

  // Features Filter
  if (features) {
    const requestedFeatures = features.split(',');
    filteredVehicles = filteredVehicles.filter(vehicle =>
      requestedFeatures.every(feature => vehicle.features.includes(feature))
    );
  }

  res.status(200).json({
    success: true,
    total: filteredVehicles.length,
    vehicles: filteredVehicles
  });
} 