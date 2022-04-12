import Portal from "../Portal";

function Tooltip({ showTooltip }) {
  // Render WITH Portal, at the wrapper specific by wrapperId
  if (!showTooltip) {
    return null;
  }
  return (
    <Portal rootId="header">
      <p>I was sent from the vehicle card!</p>
    </Portal>
  );
}

export default Tooltip;
