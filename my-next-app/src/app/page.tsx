'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TourCard from './components/TourCard';
import TicketCard from './components/TicketCard';
import RentCard from './components/RentCard';

// Tipleri tanımlayalım
interface Tour {
  id: string;
  name: string;
  location: string;
  theme: string;
  activities: string[];
  vehicles: string[];
  startTime: string;
  duration: number;
  maxGroupSize: number;
  price: number;
  features: string[];
  description: string;
}

interface Ticket {
  id: string;
  name: string;
  location: string;
  venue: string;
  type: string;
  date: string;
  time: string;
  price: number;
  availableQuantity: number;
  description: string;
}

interface Vehicle {
  id: string;
  name: string;
  location: string;
  type: string;
  category: string;
  transmission: string;
  fuelType: string;
  price: number;
  features: string[];
  passengers: number;
  luggage: number;
  description: string;
  available: boolean;
}

interface Transfer {
  id: number;
  transferType: string;
  pickupLocation: string;
  dropoffLocation: string;
  vehicleType: string;
  passengerCapacity: number;
  luggageCapacity: number;
  pricePerKm: number;
  features: string[];
  rating: number;
  totalTrips: number;
  imageUrl: string;
}

interface NavbarProps {
  setFilteredTours: React.Dispatch<React.SetStateAction<Tour[]>>;
  setFilteredTickets: React.Dispatch<React.SetStateAction<Ticket[]>>;
  setFilteredVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>;
  setFilteredTransfers: React.Dispatch<React.SetStateAction<Transfer[]>>;
  setSearchPerformed: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Home() {
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [filteredTransfers, setFilteredTransfers] = useState<Transfer[]>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar
        setFilteredTours={setFilteredTours}
        setFilteredTickets={setFilteredTickets}
        setFilteredVehicles={setFilteredVehicles}
        setFilteredTransfers={setFilteredTransfers}
        setSearchPerformed={setSearchPerformed}
        setIsLoading={setIsLoading}
        setSelectedCategory={setSelectedCategory}
      />
      
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : searchPerformed ? (
          <>
            {selectedCategory === 'Transfer' && filteredTransfers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTransfers.map((transfer) => (
                  <div key={transfer.id} className="border rounded-lg p-4 shadow-md">
                    <img
                      src={transfer.imageUrl}
                      alt={transfer.vehicleType}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{transfer.vehicleType}</h3>
                      <p className="text-sm text-gray-600">{transfer.transferType}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm">From: {transfer.pickupLocation}</p>
                          <p className="text-sm">To: {transfer.dropoffLocation}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">${transfer.pricePerKm}/km</p>
                          <p className="text-sm text-gray-500">
                            Up to {transfer.passengerCapacity} passengers
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {transfer.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-xs px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="ml-1">{transfer.rating}</span>
                        </div>
                        <button className="bg-primary-500 text-black px-4 py-2 rounded text-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : selectedCategory === 'Transfer' && (
              <div className="text-center py-8">
                <p className="text-gray-500">No transfers found matching your criteria.</p>
              </div>
            )}

            {/* Tours Results */}
            {selectedCategory === 'Tours' && filteredTours.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            )}
            
            {/* Tickets Results */}
            {selectedCategory === 'Tickets' && filteredTickets.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTickets.map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
              </div>
            )}

            {/* Rent Results */}
            {selectedCategory === 'Rent' && filteredVehicles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <RentCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            )}

            {/* No Results Message */}
            {((selectedCategory === 'Tours' && filteredTours.length === 0) ||
              (selectedCategory === 'Tickets' && filteredTickets.length === 0) ||
              (selectedCategory === 'Rent' && filteredVehicles.length === 0)) && (
              <div className="text-center text-gray-600">
                <p>Seçilen kriterlere uygun sonuç bulunamadı.</p>
                <p className="mt-2">Lütfen farklı filtreler deneyiniz.</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-600">
            <p>Arama yapmak için yukarıdaki filtreleri kullanınız.</p>
          </div>
        )}
      </div>
    </main>
  );
} 