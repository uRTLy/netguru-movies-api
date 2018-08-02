const { Sequelize, connection } = require('@db');

const Movie = require('@api/movies').model;

const Comment = connection.define('comment', {
  uuid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  movieUuid: {
    type: Sequelize.INTEGER
    // reference
  },
  text: {
    type: Sequelize.TEXT
  }
});

// Comment.belongsTo(Movie);.

module.exports = Comment;
