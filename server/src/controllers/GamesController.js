const { Game } = require('../models/game');

module.exports = {
  addGame(req, res) {
    const game = new Game(req.body);

    game.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json({
        success: true,
        game: doc
      });
    });
  },
  getGames(req, res) {
    let limit = parseInt(req.query.limit);

    if (limit) {
      Game.find()
        .populate({ path: 'genres', model: 'Genre' })
        .limit(limit)
        .exec((err, games) => {
          if (err) return res.status(400).send(err);
          res.send(games);
        });
    } else {
      Game.find({}, (err, games) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(games);
      });
    }
  }
};
