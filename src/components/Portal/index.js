import { createPortal } from "react-dom";

//Function that can be imported to use a Portal anywhere within the app
function Portal({ children, rootId }) {
  return createPortal(children, document.getElementById(rootId));
}

export default Portal;
