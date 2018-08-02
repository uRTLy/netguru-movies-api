const omdbApi = require('@services/omdb');
const normalizeCamelCaseProps = require('@util/normalizeCamelCaseProps');

const Movie = require('./movie.model');

function getMovies(req, res, next) {
  // const movieTitle =
}

async function postMovie(req, res, next) {
  const { title } = req.body;

  try {
    const result = await omdbApi.getMovie({ t: title, plot: 'full' });

    if (result.response === 'False') {
      return next(new MovieNotFound(''));
    }
    const movie = normalizeCamelCaseProps(result.data);

    console.log(movie, 'MOVIE');
    const savedMovie = await Movie.create(movie);
    console.log(savedMovie, 'saved movie');

    // res.status(201).json;
  } catch (e) {
    console.log(e);
    res.send('smth');
  }
  // res.json({ title });
}

module.exports = {
  getMovies,
  postMovie
};
