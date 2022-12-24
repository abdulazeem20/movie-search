import { Movie } from "../components/Movie.js";
import { movies } from "../components/moviesServer.js";
import { NotFound } from "../components/NotFound.js";
export function MovieList() {
  let myMovies = movies;
  let handleSearch = function () {
    let value = area.find("#search").val().toLowerCase();
    let total = 0;
    area.find(".notfound").remove();
    let movie = area.find(".movie");
    movie.each(function (i, el) {
      $(el).show();
      ++total;
      let title = $(el).find("#title").text().toLowerCase();
      if (!title.includes(value)) {
        $(el).hide();
        --total;
      }
    });
    if (total == 0) NotFound({ target: area.find(".movies") });
  };

  let allMovies = function () {
    area.find(".movies").empty();
    myMovies.forEach((el) => {
      area.find(".movies").append(Movie(el));
    });
  };

  let area = $(`
        <main id="movieArea" class="container">
            <div class="head">
                <h2>Movie World</h2>
                <div class="search">
                    <input type="text" name="" id="search" class="form-control" placeholder="Search Moive by Title"/>
                    <span id="searchKey">
                         <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="movies">
                
            </div>
        </main>
    `);

  allMovies();
  area.find("#search").on("input", handleSearch);
  $("body").children().not("script").remove();
  $("body").prepend(area);
}
