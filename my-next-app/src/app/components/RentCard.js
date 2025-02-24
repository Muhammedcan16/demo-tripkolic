const RentCard = ({ vehicle }) => {
  if (!vehicle) return null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
        <p className="text-gray-600 mb-2">{vehicle.location}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">{vehicle.type}</span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">{vehicle.category}</span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">{vehicle.transmission}</span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">{vehicle.fuelType}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {vehicle.features.map((feature, index) => (
            <span key={index} className="px-2 py-1 bg-primary-100 rounded-full text-xs">
              {feature}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-4">{vehicle.description}</p>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-gray-500">
              Yolcu: {vehicle.passengers} | Bagaj: {vehicle.luggage}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primary-500">
              ${vehicle.price}/gün
            </p>
            <button className="mt-2 bg-primary-500 text-white px-4 py-2 rounded-md text-sm hover:bg-primary-600 transition-colors">
              Kirala
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCard; 