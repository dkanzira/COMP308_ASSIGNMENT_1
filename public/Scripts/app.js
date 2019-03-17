/**App JavaScript file */
exports.render = function(req, res) {
  var username = req.body.username;

  var session = req.session;

  session.username = username;

  console.log("In index function - User name = " + session.username);
  //check if session object contains the username

  if (session.username) {
    res.redirect("/feedback");
  } else {
    res.render("/index");
  }

  console.log("GET request - User name = " + session.username);
};
