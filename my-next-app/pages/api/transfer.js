const transferData = [
  {
    id: 1,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Istanbul Airport',
    dropoffLocation: 'Taksim Square Hotels',
    vehicleType: 'Standard Sedan',
    passengerCapacity: 3,
    luggageCapacity: 3,
    pricePerKm: 15,
    features: ['Meet & Greet', 'Flight Tracking'],
    rating: 4.8,
    totalTrips: 1250,
    imageUrl: '/vehicles/sedan1.jpg',
  },
  {
    id: 2,
    transferType: 'Hotel to Airport',
    pickupLocation: 'Sultanahmet Hotels',
    dropoffLocation: 'Sabiha Gokcen Airport',
    vehicleType: 'Business Sedan',
    passengerCapacity: 3,
    luggageCapacity: 3,
    pricePerKm: 25,
    features: ['Meet & Greet', 'Flight Tracking', 'VIP Service'],
    rating: 4.9,
    totalTrips: 850,
    imageUrl: '/vehicles/business1.jpg',
  },
  {
    id: 3,
    transferType: 'Port to Hotel',
    pickupLocation: 'Antalya Port',
    dropoffLocation: 'Lara Beach Hotels',
    vehicleType: 'Luxury Sedan',
    passengerCapacity: 3,
    luggageCapacity: 4,
    pricePerKm: 35,
    features: ['Meet & Greet', 'VIP Service', 'Extra Waiting Time'],
    rating: 5.0,
    totalTrips: 620,
    imageUrl: '/vehicles/luxury1.jpg',
  },
  {
    id: 4,
    transferType: 'Hotel to Hotel',
    pickupLocation: 'Bodrum Hotels',
    dropoffLocation: 'Marmaris Hotels',
    vehicleType: 'Minivan',
    passengerCapacity: 6,
    luggageCapacity: 6,
    pricePerKm: 30,
    features: ['Child Seat', 'Extra Waiting Time'],
    rating: 4.7,
    totalTrips: 950,
    imageUrl: '/vehicles/minivan1.jpg',
  },
  {
    id: 5,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Izmir Airport',
    dropoffLocation: 'Cesme Hotels',
    vehicleType: 'VIP Van',
    passengerCapacity: 8,
    luggageCapacity: 8,
    pricePerKm: 40,
    features: ['Meet & Greet', 'Flight Tracking', 'VIP Service', 'Multiple Stops'],
    rating: 4.9,
    totalTrips: 480,
    imageUrl: '/vehicles/vipvan1.jpg',
  },
  {
    id: 6,
    transferType: 'Custom Transfer',
    pickupLocation: 'Ankara City Center',
    dropoffLocation: 'Cappadocia Hotels',
    vehicleType: 'Bus',
    passengerCapacity: 16,
    luggageCapacity: 16,
    pricePerKm: 50,
    features: ['Multiple Stops', 'Extra Waiting Time'],
    rating: 4.6,
    totalTrips: 320,
    imageUrl: '/vehicles/bus1.jpg',
  },
  {
    id: 7,
    transferType: 'Hotel to Port',
    pickupLocation: 'Kusadasi Hotels',
    dropoffLocation: 'Kusadasi Port',
    vehicleType: 'Luxury Sedan',
    passengerCapacity: 3,
    luggageCapacity: 4,
    pricePerKm: 35,
    features: ['Meet & Greet', 'VIP Service'],
    rating: 4.8,
    totalTrips: 540,
    imageUrl: '/vehicles/luxury2.jpg',
  },
  {
    id: 8,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Dalaman Airport',
    dropoffLocation: 'Fethiye Hotels',
    vehicleType: 'Business Sedan',
    passengerCapacity: 3,
    luggageCapacity: 3,
    pricePerKm: 25,
    features: ['Meet & Greet', 'Flight Tracking'],
    rating: 4.7,
    totalTrips: 680,
    imageUrl: '/vehicles/business2.jpg',
  },
  {
    id: 9,
    transferType: 'Hotel to Airport',
    pickupLocation: 'Alanya Hotels',
    dropoffLocation: 'Gazipasa Airport',
    vehicleType: 'Standard Sedan',
    passengerCapacity: 3,
    luggageCapacity: 3,
    pricePerKm: 15,
    features: ['Flight Tracking'],
    rating: 4.6,
    totalTrips: 420,
    imageUrl: '/vehicles/sedan2.jpg',
  },
  {
    id: 10,
    transferType: 'Port to Hotel',
    pickupLocation: 'Marmaris Port',
    dropoffLocation: 'Icmeler Hotels',
    vehicleType: 'VIP Van',
    passengerCapacity: 8,
    luggageCapacity: 8,
    pricePerKm: 40,
    features: ['Meet & Greet', 'VIP Service', 'Multiple Stops'],
    rating: 4.8,
    totalTrips: 390,
    imageUrl: '/vehicles/vipvan2.jpg',
  },
  {
    id: 11,
    transferType: 'Custom Transfer',
    pickupLocation: 'Pamukkale',
    dropoffLocation: 'Ephesus',
    vehicleType: 'Minivan',
    passengerCapacity: 6,
    luggageCapacity: 6,
    pricePerKm: 30,
    features: ['Multiple Stops', 'Extra Waiting Time', 'Child Seat'],
    rating: 4.9,
    totalTrips: 280,
    imageUrl: '/vehicles/minivan2.jpg',
  },
  {
    id: 12,
    transferType: 'Hotel to Hotel',
    pickupLocation: 'Antalya Hotels',
    dropoffLocation: 'Side Hotels',
    vehicleType: 'Business Sedan',
    passengerCapacity: 3,
    luggageCapacity: 3,
    pricePerKm: 25,
    features: ['VIP Service'],
    rating: 4.7,
    totalTrips: 560,
    imageUrl: '/vehicles/business3.jpg',
  },
  {
    id: 13,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Trabzon Airport',
    dropoffLocation: 'Uzungol Hotels',
    vehicleType: 'VIP Van',
    passengerCapacity: 8,
    luggageCapacity: 8,
    pricePerKm: 40,
    features: ['Meet & Greet', 'Flight Tracking', 'Multiple Stops'],
    rating: 4.8,
    totalTrips: 340,
    imageUrl: '/vehicles/vipvan3.jpg',
  },
  {
    id: 14,
    transferType: 'Custom Transfer',
    pickupLocation: 'Goreme',
    dropoffLocation: 'Urgup',
    vehicleType: 'Luxury Sedan',
    passengerCapacity: 3,
    luggageCapacity: 4,
    pricePerKm: 35,
    features: ['VIP Service', 'Extra Waiting Time'],
    rating: 4.9,
    totalTrips: 420,
    imageUrl: '/vehicles/luxury3.jpg',
  },
  {
    id: 15,
    transferType: 'Hotel to Port',
    pickupLocation: 'Cesme Hotels',
    dropoffLocation: 'Cesme Port',
    vehicleType: 'Standard Sedan',
    passengerCapacity: 3,
    luggageCapacity: 3,
    pricePerKm: 15,
    features: ['Meet & Greet'],
    rating: 4.6,
    totalTrips: 290,
    imageUrl: '/vehicles/sedan3.jpg',
  },
  {
    id: 16,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Esenboga Airport',
    dropoffLocation: 'Kizilay Hotels',
    vehicleType: 'Business Sedan',
    passengerCapacity: 3,
    luggageCapacity: 3,
    pricePerKm: 20,
    features: ['Meet & Greet', 'Flight Tracking'],
    rating: 4.7,
    totalTrips: 890,
    imageUrl: '/vehicles/business4.jpg',
  },
  {
    id: 17,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Adnan Menderes Airport',
    dropoffLocation: 'Alsancak Hotels',
    vehicleType: 'VIP Van',
    passengerCapacity: 8,
    luggageCapacity: 8,
    pricePerKm: 35,
    features: ['Meet & Greet', 'Flight Tracking', 'VIP Service'],
    rating: 4.8,
    totalTrips: 760,
    imageUrl: '/vehicles/vipvan4.jpg',
  },
  {
    id: 18,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Antalya Airport',
    dropoffLocation: 'Kemer Hotels',
    vehicleType: 'Minivan',
    passengerCapacity: 6,
    luggageCapacity: 6,
    pricePerKm: 28,
    features: ['Meet & Greet', 'Flight Tracking', 'Child Seat'],
    rating: 4.9,
    totalTrips: 1100,
    imageUrl: '/vehicles/minivan3.jpg',
  },
  {
    id: 19,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Milas-Bodrum Airport',
    dropoffLocation: 'Bodrum Marina Hotels',
    vehicleType: 'Luxury Sedan',
    passengerCapacity: 3,
    luggageCapacity: 4,
    pricePerKm: 32,
    features: ['Meet & Greet', 'VIP Service'],
    rating: 4.9,
    totalTrips: 580,
    imageUrl: '/vehicles/luxury4.jpg',
  },
  {
    id: 20,
    transferType: 'Hotel to Hotel',
    pickupLocation: 'Bursa City Center',
    dropoffLocation: 'Uludag Hotels',
    vehicleType: 'VIP Van',
    passengerCapacity: 8,
    luggageCapacity: 8,
    pricePerKm: 30,
    features: ['Extra Waiting Time', 'Multiple Stops'],
    rating: 4.7,
    totalTrips: 420,
    imageUrl: '/vehicles/vipvan5.jpg',
  },
  {
    id: 21,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Trabzon Airport',
    dropoffLocation: 'Sumela Monastery Area',
    vehicleType: 'Business Sedan',
    passengerCapacity: 3,
    luggageCapacity: 3,
    pricePerKm: 22,
    features: ['Meet & Greet', 'Flight Tracking'],
    rating: 4.6,
    totalTrips: 340,
    imageUrl: '/vehicles/business5.jpg',
  },
  {
    id: 22,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Nevsehir Airport',
    dropoffLocation: 'Goreme Hotels',
    vehicleType: 'Minivan',
    passengerCapacity: 6,
    luggageCapacity: 6,
    pricePerKm: 25,
    features: ['Meet & Greet', 'Flight Tracking'],
    rating: 4.8,
    totalTrips: 920,
    imageUrl: '/vehicles/minivan4.jpg',
  },
  {
    id: 23,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Gaziantep Airport',
    dropoffLocation: 'City Center Hotels',
    vehicleType: 'Standard Sedan',
    passengerCapacity: 3,
    luggageCapacity: 3,
    pricePerKm: 18,
    features: ['Flight Tracking'],
    rating: 4.5,
    totalTrips: 280,
    imageUrl: '/vehicles/sedan4.jpg',
  },
  {
    id: 24,
    transferType: 'Airport to Hotel',
    pickupLocation: 'Adana Airport',
    dropoffLocation: 'Seyhan Hotels',
    vehicleType: 'Business Sedan',
    passengerCapacity: 3,
    luggageCapacity: 3,
    pricePerKm: 20,
    features: ['Meet & Greet', 'Flight Tracking'],
    rating: 4.6,
    totalTrips: 450,
    imageUrl: '/vehicles/business6.jpg',
  },
];

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let filteredTransfers = [...transferData];
  const {
    transferType,
    vehicleType,
    passengers,
    luggage,
    features,
    maxPrice,
    pickupLocation,
    dropoffLocation
  } = req.query;

  // Transfer Type Filter
  if (transferType) {
    filteredTransfers = filteredTransfers.filter(
      transfer => transfer.transferType === transferType
    );
  }

  // Vehicle Type Filter
  if (vehicleType) {
    filteredTransfers = filteredTransfers.filter(
      transfer => transfer.vehicleType === vehicleType
    );
  }

  // Passenger Count Filter
  if (passengers) {
    filteredTransfers = filteredTransfers.filter(
      transfer => transfer.passengerCapacity >= parseInt(passengers)
    );
  }

  // Luggage Count Filter
  if (luggage) {
    filteredTransfers = filteredTransfers.filter(
      transfer => transfer.luggageCapacity >= parseInt(luggage)
    );
  }

  // Features Filter
  if (features) {
    const requestedFeatures = features.split(',');
    filteredTransfers = filteredTransfers.filter(transfer =>
      requestedFeatures.every(feature => transfer.features.includes(feature))
    );
  }

  // Price Range Filter
  if (maxPrice) {
    filteredTransfers = filteredTransfers.filter(
      transfer => transfer.pricePerKm <= parseInt(maxPrice)
    );
  }

  // Location Filters
  if (pickupLocation) {
    filteredTransfers = filteredTransfers.filter(
      transfer => transfer.pickupLocation.toLowerCase().includes(pickupLocation.toLowerCase())
    );
  }

  if (dropoffLocation) {
    filteredTransfers = filteredTransfers.filter(
      transfer => transfer.dropoffLocation.toLowerCase().includes(dropoffLocation.toLowerCase())
    );
  }

  res.status(200).json({
    success: true,
    total: filteredTransfers.length,
    transfers: filteredTransfers
  });
}
