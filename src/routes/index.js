import Home from "./Home";
import About from "./About";
import Movie from "./Movie";
import NotFound from "./NotFound";
import { createRouter } from "../core/heropy";

export default createRouter([
    { path: "#/", component: Home },
    { path: "#/movie", component: Movie },
    { path: "#/about", component: About },
    { path: ".*", component: NotFound },
]);
