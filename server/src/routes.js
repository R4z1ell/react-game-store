const UserController = require('./controllers/UserController');
const GenresController = require('./controllers/GenresController');
const GameController = require('./controllers/GamesController');
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');

module.exports = app => {
  app.post('/api/users/register', UserController.register);
  app.post('/api/users/login', UserController.login);
  app.get('/api/users/auth', auth, UserController.authentication);
  app.get('/api/users/logout', auth, UserController.logout);
  app.post('/api/users/addToCart', auth, UserController.addToCart);
  app.get('/api/users/removeFromCart', auth, UserController.removeCartItem);
  app.get('/api/users/articles_by_id', UserController.getCartItems);
  app.post('/api/users/addToWishlist', auth, UserController.addToWishlist);
  app.get(
    '/api/users/removeFromWishlist',
    auth,
    UserController.removeFromWishlist
  );
  app.get('/api/users/getWishlistItems', UserController.getWishlistItems);
  app.post('/api/users/update_profile', auth, UserController.updateUserData);
  app.post('/api/users/successBuy', auth, UserController.onSuccessBuy);
  app.post('/api/users/reset_user', UserController.resetUser);
  app.post('/api/users/reset_password', UserController.resetPassword);
  app.get(
    '/api/users/findUserByResetToken/:token',
    UserController.findUserByResetToken
  );

  app.post('/api/games/genre', auth, admin, GenresController.addGenre);
  app.get('/api/games/get_genres', GenresController.getGenres);

  app.post('/api/games/add_game', auth, admin, GameController.addGame);
  app.get('/api/games/get_games', GameController.getGames);
  app.get('/api/games/get_discounted_games', GameController.getDiscountedGames);
  app.get('/api/games/get_game_by_title/:title', GameController.getGameByTitle);
  app.get('/api/games/search_game_by_title', GameController.searchGameByTitle);
  app.post('/api/games/shop', GameController.getGamesToShop);
};
