const { Genre } = require('../models/genre');

module.exports = {
  addGenre(req, res) {
    const genre = new Genre(req.body);

    genre.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json({
        success: true,
        genre: doc
      });
    });
  },
  getGenres(req, res) {
    Genre.find({}, (err, genres) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(genres);
    });
  }
};
