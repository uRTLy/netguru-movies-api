const commentsRouter = require('express').Router();
const { postComment, getComments } = require('./comments.controller');

commentsRouter.get('/', getComments);
commentsRouter.post('/', postComment);

module.exports = commentsRouter;
