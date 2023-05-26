import { Component } from "../core/heropy";
import store from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
    constructor() {
        super();
        store.subscribe("movies", () => this.render());
        store.subscribe("message", () => this.render());
        store.subscribe("loading", () => this.render());
    }

    render() {
        this.el.classList.add("movie-list");
        this.el.innerHTML = `
            ${
                store.state.message
                    ? `<div class="message">${store.state.message}</div>`
                    : `<div class="movies"></div>`
            }
        `;

        const movieEl = this.el.querySelector(".movies");
        movieEl?.append(...store.state.movies.map(movie => new MovieItem({ movie }).el));

        const loaderEl = this.el.querySelector(".the-loader");
        store.state.loading ? loaderEl.classList.remove("hide") : loaderEl.classList.add("hide");
    }
}
