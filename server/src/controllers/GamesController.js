const { Game } = require('../models/game');
var ObjectId = require('mongoose').Types.ObjectId;

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
  },
  // getGameById(req, res) {
  //   let gameId = req.query.id;

  //   Game.find({ _id: { $in: gameId } })
  //     .populate({
  //       path: 'genres',
  //       model: 'Genre'
  //     })
  //     .exec((err, game) => {
  //       if (err) return res.status(400).send(err);
  //       res.status(200).send(game);
  //     });
  // },
  getGameByTitle(req, res) {
    let gameTitle = req.params.title;

    Game.find({ title: { $in: gameTitle } })
      .populate({
        path: 'genres',
        model: 'Genre'
      })
      .exec((err, game) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(game);
      });
  },
  getGamesToShop(req, res) {
    let price = req.query.price;
    let language = req.query.language;
    let genres = req.query.genres;
    let search = req.query.search;
    let findArgs = {};

    if (price && !language) {
      if (price === 'u5') findArgs = { $gte: 0, $lte: 500 };
      if (price === 'u10') findArgs = { $gte: 0, $lte: 1000 };
      if (price === 'u15') findArgs = { $gte: 0, $lte: 1500 };
      if (price === 'u25') findArgs = { $gte: 0, $lte: 2500 };
      if (price === 'a25') findArgs = { $gte: 2500, $lte: 1500000 };

      if (genres) {
        Game.find({
          'prices.basePrice': findArgs,
          genres: new ObjectId(genres)
        })
          .populate({ path: 'genres', model: 'Genre' })
          .exec((err, articles) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({
              articles
            });
          });
      }

      if (!genres) {
        Game.find({ 'prices.basePrice': findArgs })
          .populate({ path: 'genres', model: 'Genre' })
          .exec((err, articles) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({
              articles
            });
          });
      }
    }

    if (language && !price) {
      const languages = language.split(',');

      if (genres) {
        Game.find({
          'languages.language_name': { $all: languages },
          genres: new ObjectId(genres)
        })
          .populate({ path: 'genres', model: 'Genre' })
          .exec((err, articles) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({
              articles
            });
          });
      }

      if (!genres) {
        Game.find({ 'languages.language_name': { $all: languages } })
          .populate({ path: 'genres', model: 'Genre' })
          .exec((err, articles) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({
              articles
            });
          });
      }
    }

    if (language && price) {
      const languages = language.split(',');

      if (price === 'u5') findArgs = { $gte: 0, $lte: 500 };
      if (price === 'u10') findArgs = { $gte: 0, $lte: 1000 };
      if (price === 'u15') findArgs = { $gte: 0, $lte: 1500 };
      if (price === 'u25') findArgs = { $gte: 0, $lte: 2500 };
      if (price === 'a25') findArgs = { $gte: 2500, $lte: 1500000 };

      if (genres) {
        Game.find({
          'languages.language_name': { $all: languages },
          'prices.basePrice': findArgs,
          genres: new ObjectId(genres)
        })
          .populate({ path: 'genres', model: 'Genre' })
          .exec((err, articles) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({
              articles
            });
          });
      }

      if (!genres) {
        Game.find({
          'languages.language_name': { $all: languages },
          'prices.basePrice': findArgs
        })
          .populate({ path: 'genres', model: 'Genre' })
          .exec((err, articles) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({
              articles
            });
          });
      }
    }

    if (!language && !price && !genres) {
      if (search) {
        let regexQuery = { title: new RegExp(search, 'i') };

        Game.find(regexQuery)
          .populate({ path: 'genres', model: 'Genre' })
          .exec((err, articles) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({
              articles
            });
          });
      }

      if (!search) {
        Game.find()
          .populate({ path: 'genres', model: 'Genre' })
          .exec((err, games) => {
            if (err) return res.status(400).send(err);
            res.send(games);
          });
      }
    }

    if (!language && !price && genres) {
      Game.find({ genres: new ObjectId(genres) })
        .populate({ path: 'genres', model: 'Genre' })
        .exec((err, games) => {
          if (err) return res.status(400).send(err);
          res.send(games);
        });
    }
  }
};
