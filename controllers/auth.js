var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var InstagramStrategy = require('passport-instagram').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var Model = require('../models/model.js');
var config = require('../config.js');

function checkUser(user,done)
{

    if (user !== null) {
        //we have the user in the db already
        console.log('at done');
        done(null, user);

    } else {
        //we don't have the user in the db
        user = Model.Users.build({
            oauth_id: profile.id,
            name: profile.displayName,
            created: Date.now()
        });

        user.save().then(function(user) {
            done(null, user);
        }).catch(function(e){
            done(e, false);
        });
    }

}

module.exports = passport.use(new FacebookStrategy({
  clientID: config[env].passport.facebook.publicKey,
  clientSecret: config[env].passport.facebook.secretKey,
  callbackURL: config[env].passport.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {

    Model.Users.findOne({ where:{ oauth_id: profile.id } }).then(function(user) {
        checkUser(user,done);
    }).catch(function(e){
        console.log(e);  //manage the error
    });

  }
));

passport.use(new TwitterStrategy({
  consumerKey: config[env].passport.twitter.publicKey,
  consumerSecret: config[env].passport.twitter.secretKey,
  callbackURL: config[env].passport.twitter.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {

    Model.Users.findOne({ where:{ oauth_id: profile.id } }).then(function(user) {
        checkUser(user,done);
    }).catch(function(e){
        console.log(e);  //manage the error
    });

  }
));

passport.use(new InstagramStrategy({
  clientID: config[env].passport.instagram.publicKey,
  clientSecret: config[env].passport.instagram.secretKey,
  callbackURL: config[env].passport.instagram.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {

    Model.Users.findOne({ where:{ oauth_id: profile.id } }).then(function(user) {
        checkUser(user,done);
    }).catch(function(e){
        console.log(e);  //manage the error
    });

  }
));

