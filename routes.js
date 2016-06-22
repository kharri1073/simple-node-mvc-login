var index_controller = require('./controllers/index.js');
var about_controller = require('./controllers/about.js');
var account_controller = require('./controllers/account.js');
var auth_controller = require('./controllers/auth.js');
var login_controller = require('./controllers/login.js');

var passport = require('passport');

module.exports = function(app)
{
    app.get('/', index_controller.index);
    app.get('/about', about_controller.about);
    app.get('/about/secret', about_controller.secret);

    app.get('/auth/facebook', passport.authenticate('facebook'), function(req, res){});
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/', successRedirect : '/account' }), function(req, res) { res.redirect('/account'); });
    app.get('/auth/instagram', passport.authenticate('instagram'), function(req, res){});
    app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/' }), function(req, res) { res.redirect('/account'); });
    app.get('/auth/twitter', passport.authenticate('twitter'), function(req, res){});
    app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }), function(req, res) { res.redirect('/account'); });

    app.get('/account', authTest, account_controller.index);
    app.get('/account/update', authTest, account_controller.update);
    app.get('/login', login_controller.index);
    app.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
    });

}

function authTest(req, res, next) { // is a user authenticated?
  if (req.isAuthenticated()) { console.log('we are authenticated'); return next(); } else {console.log('not authenticated');}
  res.redirect('/');
}

