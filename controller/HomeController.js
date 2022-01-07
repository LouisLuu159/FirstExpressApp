module.exports.getHomePage = (req, res, next) => {
  res.render("index", { title: "Home", user: req.session.userInfo });
};
