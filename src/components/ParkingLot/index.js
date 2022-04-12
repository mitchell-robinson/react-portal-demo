import styles from "./parkinglot.module.css";
import Portal from "../Portal";
import { AnimatePresence, motion } from "framer-motion";

function ParkingLot({ lotOpen, closeParkingLot, vehicle }) {
  // Render without Portal, as a child of the parent component
  // if (!lotOpen) {
  //   return null;
  // }
  // return (
  //   <div className={styles["parking-lot-wrapper"]}>
  //     <div className={styles["pl-header"]}>
  //       <p>Parking Lot (1)</p>
  //       <button onClick={() => closeParkingLot()}>&gt;</button>
  //     </div>
  //     <div className="pl-main">
  //       {vehicle.year} {vehicle.make} {vehicle.model} added to your Parking Lot.
  //       <img alt="truck" src={vehicle.imgsrc} />
  //     </div>
  //   </div>
  // );

  // Render WITH Portal, at the wrapper specific by wrapperId
  if (!lotOpen) {
    return null;
  }
  return (
    <Portal rootId="parkingLotRoot">
      <AnimatePresence>
        <motion.div
          key="test"
          layout
          animate={{ right: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", top: 0, right: "-25vw" }}
          exit={{ opacity: 0 }}
        >
          <div className={styles["portal-parking-lot-wrapper"]}>
            <div className={styles["pl-header"]}>
              <p>Parking Lot (1)</p>
              <button onClick={() => closeParkingLot()}>&gt;</button>
            </div>
            <div className={styles["pl-main"]}>
              {vehicle.year} {vehicle.make} {vehicle.model} added to your
              Parking Lot.
              <img
                src={vehicle.imgsrc}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              />
            </div>
            <input
              type="text"
              onChange={(e) => (vehicle.note = e.target.value)}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </Portal>
  );
}

export default ParkingLot;
