const express = require('express');
const _ = require('lodash');

// MIDDLEWARES
const bodyParser = require('body-parser');
const helmet = require('helmet');

// DATABASE
const db = require('@db');

// CONTROLLER ROUTES
const moviesRouter = require('@api/movies').route;
const commentsRouter = require('@api/comments').route;

const app = express();

// MIDDLEWARES
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CENTRAL API ROUTES
const router = express.Router();

app.use('/api/v1', router);
router.use('/movies', moviesRouter);
router.use('/comments', commentsRouter);

module.exports = app;
