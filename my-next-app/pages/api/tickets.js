const ticketData = [
  // İSTANBUL
  {
    id: 1,
    name: 'Topkapı Palace Museum',
    location: 'Istanbul',
    venue: 'Topkapı Palace',
    type: 'Museum',
    date: '2024-12-31',
    time: '09:00',
    price: 30,
    availableQuantity: 1000,
    description: 'Visit the historic Topkapı Palace Museum',
    imageUrl: '/tickets/topkapi.jpg'
  },
  {
    id: 2,
    name: 'Beşiktaş vs Galatasaray',
    location: 'Istanbul',
    venue: 'Vodafone Park',
    type: 'Sports',
    date: '2024-05-15',
    time: '20:00',
    price: 250,
    availableQuantity: 400,
    description: 'Istanbul Derby - Turkish Super League',
    imageUrl: '/tickets/derby.jpg'
  },
  {
    id: 3,
    name: 'Tarkan Live Concert',
    location: 'Istanbul',
    venue: 'Harbiye Open Air Theater',
    type: 'Concert',
    date: '2024-07-20',
    time: '21:00',
    price: 300,
    availableQuantity: 2000,
    description: 'Mega Star Tarkan Summer Concert',
    imageUrl: '/tickets/tarkan.jpg'
  },

  // ANKARA
  {
    id: 4,
    name: 'Anıtkabir Museum',
    location: 'Ankara',
    venue: 'Anıtkabir',
    type: 'Museum',
    date: '2024-12-31',
    time: '09:00',
    price: 20,
    availableQuantity: 5000,
    description: 'Visit Atatürk Memorial Museum',
    imageUrl: '/tickets/anitkabir.jpg'
  },
  {
    id: 5,
    name: 'Presidential Symphony Orchestra',
    location: 'Ankara',
    venue: 'CSO Concert Hall',
    type: 'Concert',
    date: '2024-06-10',
    time: '20:00',
    price: 150,
    availableQuantity: 800,
    description: 'Classical Music Concert',
    imageUrl: '/tickets/symphony.jpg'
  },

  // İZMİR
  {
    id: 6,
    name: 'Ephesus Ancient City Tour',
    location: 'Izmir',
    venue: 'Ephesus Archaeological Site',
    type: 'Museum',
    date: '2024-12-31',
    time: '08:00',
    price: 40,
    availableQuantity: 2000,
    description: 'Guided tour of ancient Ephesus',
    imageUrl: '/tickets/ephesus.jpg'
  },
  {
    id: 7,
    name: 'İzmir Jazz Festival',
    location: 'Izmir',
    venue: 'Cultural Park',
    type: 'Concert',
    date: '2024-07-05',
    time: '19:00',
    price: 180,
    availableQuantity: 1500,
    description: 'International Jazz Festival',
    imageUrl: '/tickets/jazz.jpg'
  },

  // ANTALYA
  {
    id: 8,
    name: 'Aspendos Opera Festival',
    location: 'Antalya',
    venue: 'Aspendos Ancient Theater',
    type: 'Theatre',
    date: '2024-06-25',
    time: '21:00',
    price: 200,
    availableQuantity: 1000,
    description: 'Opera performance in ancient theater',
    imageUrl: '/tickets/aspendos.jpg'
  },
  {
    id: 9,
    name: 'Aquarium Entry',
    location: 'Antalya',
    venue: 'Antalya Aquarium',
    type: 'Theme Park',
    date: '2024-12-31',
    time: '10:00',
    price: 45,
    availableQuantity: 3000,
    description: 'Worlds largest tunnel aquarium',
    imageUrl: '/tickets/aquarium.jpg'
  },

  // MUĞLA
  {
    id: 10,
    name: 'Bodrum Castle Museum',
    location: 'Mugla',
    venue: 'Bodrum Castle',
    type: 'Museum',
    date: '2024-12-31',
    time: '09:00',
    price: 35,
    availableQuantity: 1500,
    description: 'Underwater Archaeology Museum',
    imageUrl: '/tickets/bodrum-castle.jpg'
  },
  {
    id: 11,
    name: 'White Party Bodrum',
    location: 'Mugla',
    venue: 'Club Catamaran',
    type: 'Concert',
    date: '2024-08-15',
    time: '23:00',
    price: 250,
    availableQuantity: 800,
    description: 'Famous summer party series',
    imageUrl: '/tickets/white-party.jpg'
  },

  // NEVŞEHİR
  {
    id: 12,
    name: 'Göreme Open Air Museum',
    location: 'Nevsehir',
    venue: 'Göreme National Park',
    type: 'Museum',
    date: '2024-12-31',
    time: '08:00',
    price: 25,
    availableQuantity: 2000,
    description: 'UNESCO World Heritage Site',
    imageUrl: '/tickets/goreme.jpg'
  },
  {
    id: 13,
    name: 'Cappadocia Balloon Festival',
    location: 'Nevsehir',
    venue: 'Göreme Valley',
    type: 'Exhibition',
    date: '2024-07-01',
    time: '05:00',
    price: 150,
    availableQuantity: 500,
    description: 'Hot air balloon festival',
    imageUrl: '/tickets/balloon-fest.jpg'
  },

  // BURSA
  {
    id: 14,
    name: 'Uludağ Cable Car',
    location: 'Bursa',
    venue: 'Uludağ National Park',
    type: 'Theme Park',
    date: '2024-12-31',
    time: '09:00',
    price: 40,
    availableQuantity: 1000,
    description: 'Scenic cable car ride to Uludağ',
    imageUrl: '/tickets/teleferik.jpg'
  },
  {
    id: 15,
    name: 'Grand Mosque Tour',
    location: 'Bursa',
    venue: 'Ulu Cami',
    type: 'Museum',
    date: '2024-12-31',
    time: '09:00',
    price: 15,
    availableQuantity: 3000,
    description: 'Guided tour of historic mosque',
    imageUrl: '/tickets/ulucami.jpg'
  },

  // TRABZON
  {
    id: 16,
    name: 'Sumela Monastery Visit',
    location: 'Trabzon',
    venue: 'Sumela Monastery',
    type: 'Museum',
    date: '2024-12-31',
    time: '09:00',
    price: 30,
    availableQuantity: 1000,
    description: 'Ancient monastery tour',
    imageUrl: '/tickets/sumela.jpg'
  },
  {
    id: 17,
    name: 'Trabzonspor Match',
    location: 'Trabzon',
    venue: 'Medical Park Stadium',
    type: 'Sports',
    date: '2024-05-20',
    time: '19:00',
    price: 100,
    availableQuantity: 1500,
    description: 'Turkish Super League Match',
    imageUrl: '/tickets/trabzonspor.jpg'
  }
];

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let filteredTickets = [...ticketData];
  const { location, type, date, maxPrice, minQuantity } = req.query;

  // Location Filter
  if (location) {
    filteredTickets = filteredTickets.filter(
      ticket => ticket.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  // Type Filter
  if (type) {
    filteredTickets = filteredTickets.filter(
      ticket => ticket.type === type
    );
  }

  // Date Filter
  if (date) {
    filteredTickets = filteredTickets.filter(
      ticket => ticket.date >= date
    );
  }

  // Price Filter
  if (maxPrice) {
    filteredTickets = filteredTickets.filter(
      ticket => ticket.price <= parseInt(maxPrice)
    );
  }

  // Quantity Filter
  if (minQuantity) {
    filteredTickets = filteredTickets.filter(
      ticket => ticket.availableQuantity >= parseInt(minQuantity)
    );
  }

  res.status(200).json({
    success: true,
    total: filteredTickets.length,
    tickets: filteredTickets
  });
} 