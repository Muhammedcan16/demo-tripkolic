// pages/api/getEvents.js

import { cities } from './cities';  // cities.js'yi import ettik

export default async function handler(req, res) {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ error: 'Location is required' });
  }

  // Şehir ismi validasyonu yapalım
  const validCity = cities.some(city => city.name.toLowerCase() === location.toLowerCase());
  
  if (!validCity) {
    return res.status(404).json({ error: `No events found for location: ${location}` });
  }

  // Eğer geçerli bir şehirse, etkinlikleri döndürelim
  const events = [
    { id: 1, name: 'Island Tour(43)', location: location },
    { id: 2, name: 'Safari(43)', location: location},
    { id: 3, name: 'Land Tour(43)', location: location },
    { id: 4, name: 'Lake Tour(43)', location: location },
    { id: 5, name: 'Camp(43)', location: location },
  ];

  res.status(200).json(events);
}
