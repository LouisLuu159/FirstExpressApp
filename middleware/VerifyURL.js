const handlePreLogin = (req, res, next) => {
  if (req.session.userInfo !== undefined) {
    return res.redirect("/");
  } else next();
};

const handlePreIndex = (req, res, next) => {
  if (typeof req.session.userInfo === "undefined") {
    return res.redirect("/login");
  } else next();
};

module.exports = { handlePreIndex, handlePreLogin };
