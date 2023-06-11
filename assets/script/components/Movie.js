import { MovieInfo } from "../pages/movieInfo.js";
export function Movie(props) {
	props.image = props.image ?? "404.png";
	let movieCard = $(`
        <div class="movie">
            <div class="overlay">
                <p>${props.year}</p>
            </div>
            <img src="assets/images/movies/${props.image}" alt="movie-image" />
            <div class="info">
                <p id="title">${props.title}</p>
            </div>
        </div>
        `);

	movieCard.on("click", () => MovieInfo(props));
	return movieCard;
}
