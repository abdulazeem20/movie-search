import { MovieList } from "./movieList.js";
export function MovieInfo(movie) {
  let area = $(`
        <main id="movieDetails" class="container">
            <div class="detail">
                <div class="back">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
                <div class="center">
                    <img src="assets/images/movies/${movie.image}" alt="" />
                    <div class="list">
                        <div><h5>Title: ${movie.title}</h5> </div>
                        <div> <h5>Director:</h5> <h5> ${movie.director}</h5> </div>
                        <div> <h5>Generes:</h5> <h5> ${movie.geners}</h5> </div>
                        <div> <h5>Year:</h5> <h5> ${movie.year}</h5> </div>   
                    </div>
                </div>
                <div class="plot">
                    <h4>Plot: </h4><h5>${movie.plot}</h5>
                </div>
            </div>
        </main>
    `);
  area.find(".back").click(MovieList);
  $("body").children().not("script").remove();
  $("body").prepend(area);
}
