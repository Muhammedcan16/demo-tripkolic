const TicketCard = ({ ticket }) => {
  if (!ticket) return null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{ticket.name}</h3>
        <p className="text-gray-600 mb-2">{ticket.venue}</p>
        <p className="text-sm text-gray-500 mb-2">
          {new Date(ticket.date).toLocaleDateString('tr-TR')} - {ticket.time}
        </p>
        <p className="text-gray-600 text-sm mb-4">{ticket.description}</p>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-gray-500">
              Kalan bilet: {ticket.availableQuantity}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primary-500">
              ${ticket.price}
            </p>
            <button className="mt-2 bg-primary-500 text-white px-4 py-2 rounded-md text-sm hover:bg-primary-600 transition-colors">
              Satın Al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard; 