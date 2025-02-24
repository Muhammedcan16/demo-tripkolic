const TourCard = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={tour.imageUrl}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white font-semibold text-lg">{tour.name}</h3>
          <p className="text-white text-sm">{tour.location}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-primary-500 font-semibold">${tour.price}</span>
          <span className="text-gray-600 text-sm">{tour.duration} hours</span>
        </div>

        <p className="text-gray-600 text-sm mb-2">{tour.description}</p>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            {tour.activities.map((activity, index) => (
              <span
                key={index}
                className="bg-gray-100 text-xs px-2 py-1 rounded"
              >
                {activity}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-1">
            {tour.features.map((feature, index) => (
              <span
                key={index}
                className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Max group: {tour.maxGroupSize}
          </div>
          <button className="bg-primary-500 text-white px-4 py-2 rounded text-sm hover:bg-primary-600">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;