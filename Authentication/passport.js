const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
app.get(
  '/login',
  passport.authenticate('oauth2', {
    session: true,
    successReturnToOrRedirect: '/'
  })
);
