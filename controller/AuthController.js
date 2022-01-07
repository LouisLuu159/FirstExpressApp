const getLoginForm = (req, res, next) => {
  res.render("login", { title: "Login" });
};
const users = [
  { id: 1, name: "Louis", username: "louis123", password: "@louis321" },
  { id: 2, name: "Henry", username: "henry123", password: "@henry321" },
];

const login = (req, res, next) => {
  // console.log(req.body);
  // console.log("username:" + req.body.username);
  let user_name = req.body.username;

  // console.log("password:" + req.body.password);
  let password = req.body.password;
  let user = users.find((user) => {
    return user.username === user_name && user.password === password;
  });
  // console.log(user);

  if (user === undefined) {
    res.render("login", { error: "Login failed" });
  } else {
    req.session.userInfo = { id: user.id, name: user.name };
    res.redirect("/");
  }
};

module.exports = { getLoginForm, login };
