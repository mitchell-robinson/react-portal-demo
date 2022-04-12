import styles from "./parkinglot.module.css";
import Portal from "../Portal";

function ParkingLot({ lotOpen, closeParkingLot, vehicle }) {
  if (!lotOpen) {
    return null;
  }

  // Render without Portal, as a child of the parent component
  // return (
  //   <div className={styles["parking-lot-wrapper"]}>
  //     <div className={styles["pl-header"]}>
  //       <p>Parking Lot (1)</p>
  //       <button onClick={() => closeParkingLot()}>&gt;</button>
  //     </div>
  //     <div className="pl-main">
  //       {vehicle.year} {vehicle.make} {vehicle.model} added to your Parking Lot.
  //       <img src={vehicle.imgsrc} />
  //     </div>
  //   </div>
  // );

  // Render WITH Portal, at the wrapper specific by wrapperId
  if (!lotOpen) {
    return null;
  }
  return (
    <Portal rootId="parkingLotRoot">
      <div className={styles["portal-parking-lot-wrapper"]}>
        <div className={styles["pl-header"]}>
          <p>Parking Lot (1)</p>
          <button onClick={() => closeParkingLot()}>&gt;</button>
        </div>
        <div className={styles["pl-main"]}>
          {vehicle.year} {vehicle.make} {vehicle.model} added to your Parking
          Lot.
          <img
            src={vehicle.imgsrc}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          />
        </div>
      </div>
    </Portal>
  );
}

export default ParkingLot;
