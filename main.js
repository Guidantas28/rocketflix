import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

function getMovie() {
  const idmovie = Math.floor(Math.random() * 1000 + 1);

  axios
    .get(`${BASE_URL}${idmovie}?api_key=${API_KEY}&${language}`)
    .then(function (response) {
      const dataMovie = response.data;
      const posterMovie = response.data.poster_path;
      showMovie(dataMovie, posterMovie);
    })
    
}

function clickFind() {
  const findMovies = document.querySelector(".search-movies");
  findMovies.addEventListener("click", getMovie);
}

clickFind();

function showMovie(movie, poster) {
  const movieContent = document.querySelector("#movie-content");
  const movieTitle = movie.original_title;
  const movieSynopsis = movie.overview;

  const contentMovie = `
  <img src="${IMG_URL}${poster}" alt="" />
        <div class="description-movie">
          <h1 class="movie-title">${movieTitle}</h1>
          <p class="movie-description">${movieSynopsis}</p>
        </div>
`;

  movieContent.innerHTML = contentMovie;
}