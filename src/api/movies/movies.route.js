const moviesRouter = require('express').Router();
const { postMovie, getMovies } = require('./movies.controller');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', postMovie);

module.exports = moviesRouter;
