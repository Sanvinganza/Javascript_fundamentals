import "./index.css";
import { browserInfo } from "./methods/browserInfo";
import { navButtons } from "./methods/navButtons";
import { printSize } from "./methods/printSize";
import { setUrlHashParameter } from "./methods/setUrlHashParameter";
import { setUrlParameter } from "./methods/setUrlParameter";

// printSize();

setUrlParameter("x", 10);
setUrlParameter("y", 41);
setUrlParameter("x", 22);

// navButtons();

// browserInfo();

setUrlHashParameter("x", 12)
setUrlHashParameter("y", 18)
setUrlHashParameter("x", 2)