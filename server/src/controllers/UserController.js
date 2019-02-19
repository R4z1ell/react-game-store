const { User } = require('../models/user');
const { Game } = require('../models/game');
const { Payment } = require('../models/payment');
const { sendEmail } = require('../../utils/mail/index');
const mongoose = require('mongoose');
const moment = require('moment');
const SHA1 = require('crypto-js/sha1');

module.exports = {
  register(req, res) {
    const user = new User(req.body);

    user.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
        success: true
      });
    });
  },
  login(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (!user)
        return res.json({
          loginSuccess: false,
          message: 'Auth failed, email not found'
        });

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch)
          return res.json({
            loginSuccess: false,
            message: 'Wrong password'
          });

        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
          res
            .cookie('x_auth', user.token)
            .status(200)
            .json({
              loginSuccess: true
            });
        });
      });
    });
  },
  findUserByResetToken(req, res) {
    User.findOne(
      {
        resetToken: req.params.token
      },
      (err, user) => {
        if (!user)
          return res.json({
            success: false,
            message: 'Sorry, your token is expired'
          });
        else {
          return res.status(200).send({
            success: true,
            username: user.username,
            email: user.email
          });
        }
      }
    );
  },
  resetUser(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (!user) return res.json({ success: false, err });
      user.generateResetToken((err, user) => {
        if (err) return res.json({ success: false, err });
        sendEmail(user.email, user.username, null, 'reset_password', user);
        return res.json({ success: true });
      });
    });
  },
  resetPassword(req, res) {
    var today = moment()
      .startOf('day')
      .valueOf();

    User.findOne(
      {
        resetToken: req.body.resetToken,
        resetTokenExp: {
          $gte: today
        }
      },
      (err, user) => {
        if (!user)
          return res.json({
            success: false,
            message: 'Sorry, bad token. Generate a new one'
          });
        // else {
        //   return res.status(200).send({
        //     user
        //   });
        // }
        user.password = req.body.password;
        user.resetToken = '';
        user.resetTokenExp = '';

        user.save((err, doc) => {
          if (err) return res.json({ success: false, err });
          return res.status(200).json({
            success: true
          });
        });
      }
    );
  },
  authentication(req, res) {
    res.status(200).json({
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      username: req.user.username,
      role: req.user.role,
      cart: req.user.cart,
      wishlist: req.user.wishlist,
      history: req.user.history
    });
  },
  logout(req, res) {
    User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true
      });
    });
  },
  addToCart(req, res) {
    User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          cart: {
            id: mongoose.Types.ObjectId(req.query.productId),
            date: Date.now()
          }
        }
      },
      { new: true },
      (err, doc) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json(doc.cart);
      }
    );
  },
  getCartItems(req, res) {
    let ids = req.query.id.split(',');
    items = [];
    items = ids.map(item => {
      return mongoose.Types.ObjectId(item);
    });

    Game.find({ _id: { $in: items } })
      .populate({ path: 'genres', model: 'Genre' })
      .exec((err, docs) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(docs);
      });
  },
  removeCartItem(req, res) {
    User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $pull: { cart: { id: mongoose.Types.ObjectId(req.query._id) } }
      },
      { new: true },
      (err, doc) => {
        let cart = doc.cart;

        let array = cart.map(item => {
          return mongoose.Types.ObjectId(item.id);
        });

        Game.find({ _id: { $in: array } })
          .populate('brand')
          .populate('wood')
          .exec((err, cartDetail) => {
            return res.status(200).json({ cartDetail, cart });
          });
      }
    );
  },
  addToWishlist(req, res) {
    User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          wishlist: {
            id: mongoose.Types.ObjectId(req.query.productId),
            date: Date.now()
          }
        }
      },
      { new: true },
      (err, doc) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json(doc.wishlist);
      }
    );
  },
  getWishlistItems(req, res) {
    let ids = req.query.id.split(',');
    items = [];
    items = ids.map(item => {
      return mongoose.Types.ObjectId(item);
    });

    Game.find({ _id: { $in: items } })
      .populate({ path: 'genres', model: 'Genre' })
      .exec((err, docs) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(docs);
      });
  },
  removeFromWishlist(req, res) {
    User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $pull: { wishlist: { id: mongoose.Types.ObjectId(req.query._id) } }
      },
      { new: true },
      (err, doc) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json(doc.wishlist);
      }
    );
  },
  updateUserData(req, res) {
    User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: req.body },
      { new: true },
      (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({ success: true });
      }
    );
  },
  onSuccessBuy(req, res) {
    let history = [];
    let transactionData = {};
    const date = new Date();
    const po = `PO-${date.getSeconds()}${date.getMilliseconds()}-${SHA1(
      req.user._id
    )
      .toString()
      .substring(0, 8)}`;

    req.body.cartDetail.forEach(item => {
      history.push({
        porder: po,
        dateOfPurchase: Date.now(),
        title: item.title,
        images: item.images,
        id: item._id,
        prices: item.prices,
        paymentId: req.body.paymentData.paymentID
      });
    });

    transactionData.user = {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email
    };
    transactionData.data = { ...req.body.paymentData, porder: po };
    transactionData.product = history;

    User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { history: history }, $set: { cart: [] } },
      { new: true },
      (err, user) => {
        if (err) return res.json({ success: false, err });

        const payment = new Payment(transactionData);

        payment.save((err, doc) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json({
            success: true,
            cart: user.cart,
            cartDetail: []
          });
        });
      }
    );
  }
};
