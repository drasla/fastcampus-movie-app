import App from "./App";
import router from "./routes";

const root = document.querySelector("#root");
console.log("a");
root.append(new App().el);
router();
