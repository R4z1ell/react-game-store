const { User } = require('../models/user');
const mongoose = require('mongoose');

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
  authentication(req, res) {
    res.status(200).json({
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      username: req.user.username,
      role: req.user.role,
      cart: req.user.cart,
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
    // .populate({ path: 'cart', model: 'Game' })
    // .exec((err, doc) => {
    //   if (err) return res.status(400).send(err);
    //   res.status(200).send(doc);
    // });
  }
};
