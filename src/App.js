import "./App.css";
import Card from "./components/Card";
import ParkingLot from "./components/ParkingLot";
import { useState } from "react";

function App() {
  const [lotOpen, setLotOpen] = useState(false);
  const [newPLVehicle, setNewPLVehicle] = useState();

  const addToParkingLot = (vehicle) => {
    setLotOpen(true);
    setNewPLVehicle(vehicle);
  };

  const closeParkingLot = () => {
    setLotOpen(false);
  };

  // Some sample data that would be in the parking lot db
  const vehicles = [
    {
      condition: "New",
      year: "2022",
      make: "Nissan",
      model: "Frontier",
      trim: "PRO-X RWD",
      mileage: "5 miles",
      price: "$36,917",
      totalprice: "$39,911",
      location: "San Antonio, TX",
      imgsrc: "./truck.png",
      daysonmarket: "12",
    },
    {
      condition: "Used",
      year: "2019",
      make: "Toyota",
      model: "Tacoma",
      trim: "TRD Sport",
      mileage: "27k miles",
      price: "$38,917",
      totalprice: "$40,911",
      location: "Boerne, TX",
      imgsrc: "./truck2.png",
      daysonmarket: "33",
    },
  ];

  return (
    <div className="App">
      <div className="parking-lot-button">
        <button>Parking Lot</button>
      </div>
      <header className="App-header">
        {vehicles.map((veh, index) => {
          return (
            <Card key={index} vehicle={veh} addToParkingLot={addToParkingLot} />
          );
        })}
      </header>
      <ParkingLot
        lotOpen={lotOpen}
        closeParkingLot={closeParkingLot}
        vehicle={newPLVehicle}
      />
    </div>
  );
}

export default App;
