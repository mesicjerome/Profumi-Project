const { User } = require('../models/User');

let auth = (req, res, next) => {
  let token = req.cookies.w_auth;

  // Si je ne retrouve pas l'user avec le token qui provient du cookie alors => erreur.
  // Si je le trouve nous avons les informations de l'user
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true
      });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
