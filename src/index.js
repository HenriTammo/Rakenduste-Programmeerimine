<<<<<<< HEAD
<<<<<<< HEAD
/*jshint esversion: 6 */
//const homepage = require("./homepage.js");
//const itempage = require("./itempage.js");
import homepage from "./homepage.js";
import itempage from "./itempage.js";
=======
const homepage = require("./homepage.js");
const itempage = require("./itempage.js")
>>>>>>> 68de6b9f4f55c53a2a80df82063507e3466efe5e
=======
const homepage = require("./homepage.js");
const itempage = require("./itempage.js")
>>>>>>> 953750bd2d12b6d0f374d7b57bce4f5d9fe44b34

console.log("index file");

window.addEventListener("load", () => {
    homepage.setup();
    itempage.setup();
});
