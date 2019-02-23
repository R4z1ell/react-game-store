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
      Game.find()
        .populate({ path: 'genres', model: 'Genre' })
        .exec((err, games) => {
          if (err) return res.status(400).send(err);
          res.send(games);
        });
    }
  },
  getDiscountedGames(req, res) {
    Game.find({ 'prices.discount': { $ne: null } })
      .populate({
        path: 'genres',
        model: 'Genre'
      })
      .exec((err, games) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(games);
      });
  },
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
  searchGameByTitle(req, res) {
    let search = req.query.search;

    Game.find({
      $or: [
        { title: new RegExp(search, 'i') },
        { publisher: new RegExp(search, 'i') },
        { developer: new RegExp(search, 'i') }
      ]
    })
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
    let findArgs = {};

    req.query.price === 'u5'
      ? (findArgs['prices.basePrice'] = { $gte: 0, $lte: 500 })
      : null;
    req.query.price === 'u10'
      ? (findArgs['prices.basePrice'] = { $gte: 0, $lte: 1000 })
      : null;
    req.query.price === 'u15'
      ? (findArgs['prices.basePrice'] = { $gte: 0, $lte: 1500 })
      : null;
    req.query.price === 'u25'
      ? (findArgs['prices.basePrice'] = { $gte: 0, $lte: 2500 })
      : null;
    req.query.price === 'a25'
      ? (findArgs['prices.basePrice'] = { $gte: 2500, $lte: 1500000 })
      : null;
    req.query.price === 'discounted'
      ? (findArgs['prices.discount'] = { $ne: null })
      : null;

    req.query.language
      ? (findArgs['languages.language_name'] = {
          $all: req.query.language.split(',')
        })
      : null;
    req.query.genres
      ? (findArgs['genres'] = new ObjectId(req.query.genres))
      : null;
    req.query.search
      ? (findArgs['title'] = { $in: new RegExp(req.query.search, 'i') })
      : null;

    Game.find(findArgs)
      .populate({ path: 'genres', model: 'Genre' })
      .exec((err, articles) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
          articles
        });
      });
  }
};
