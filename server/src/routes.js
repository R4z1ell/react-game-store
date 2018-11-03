const AuthenticationController = require('./controllers/AuthenticationController');
const GenresController = require('./controllers/GenresController');
const GameController = require('./controllers/GamesController');
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');

module.exports = app => {
  app.post('/api/users/register', AuthenticationController.register);
  app.post('/api/users/login', AuthenticationController.login);
  app.get('/api/users/auth', auth, AuthenticationController.authentication);
  app.get('/api/users/logout', auth, AuthenticationController.logout);

  app.post('/api/games/genre', auth, admin, GenresController.addGenre);
  app.get('/api/games/get_genres', GenresController.getGenres);

  app.post('/api/games/add_game', auth, admin, GameController.addGame);
};
