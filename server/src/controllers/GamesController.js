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
    Game.find({}, (err, games) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(games);
    });
  }
};
