import { stateName, capitalCity } from "./modules/oregonCity.js";

//for the default modules just do this

import oregonStateInfo from "./modules/oregonInfo.js";

//for renaming in here we can
import { sum as addNumber } from "relative/path/file.js";

//for all member without specify them just use *
import * as myModules from "relative/path/file.js";

//loading dynamic Modules - only when they needed
const stateButton = document.getElementById("oregonButton");
stateButton.addEventListener("click", () =>
  import("./listing12-3.js").then((OregonInfo) => {
    alert(`${OregonInfo.stateName}'s state bird is ${OregonInfo.stateBird}.`);
  })
);
