import { Component } from "../core/heropy";
import store, { searchMovie } from "../store/movie";

export default class Search extends Component {
    render() {
        this.el.classList.add("search");
        this.el.innerHTML = `
            <input value="${store.state.searchText}" placeholder="Enter the movie title to search!" />
            <button class="btn btn-primary">Search!</button>
        `;

        const inputEl = this.el.querySelector("input");
        inputEl.addEventListener("input", () => {
            store.state.searchText = inputEl.value;
        });
        inputEl.addEventListener("keydown", event => {
            if (event.key === "Enter" && store.state.searchText.trim()) {
                searchMovie(1);
            }
        });

        const btnEl = this.el.querySelector(".btn");
        btnEl.addEventListener("click", () => {
            if (store.state.searchText.trim()) {
                searchMovie(1);
            }
        });
    }
}
