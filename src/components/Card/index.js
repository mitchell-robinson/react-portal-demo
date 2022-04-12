function Card({ vehicle, addToParkingLot }) {
  return (
    <div className="vehicle-card">
      <p className="market-time-header">
        {vehicle.daysonmarket} Days On Market
      </p>
      <img
        src={`${vehicle.imgsrc}`}
        alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
      />
      <div className="details">
        <ul>
          <li>Condition: {vehicle.condition}</li>
          <li>
            {vehicle.year} {vehicle.make} {vehicle.model}
          </li>
          <li>{vehicle.trim}</li>
          <li>{vehicle.mileage}</li>
          <li>Advertised Price: {vehicle.price}</li>
          <li>TotalPrice: {vehicle.totalprice}</li>
          <li>Location: {vehicle.location}</li>
        </ul>
      </div>
      <button
        onClick={() => addToParkingLot(vehicle)}
        className="add-parking-lot"
      >
        Add To Parking Lot
      </button>
    </div>
  );
}

export default Card;
