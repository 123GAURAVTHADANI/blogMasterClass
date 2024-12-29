const { User } = require("../Model/user.schema");

function createUser(req, res) {
  try {
    User.create(req.body)
      .then((response) => {
        res
          .json({ Message: "User is Created Succefully!", data: response })
          .status(201);
      })
      .catch((err) => {
        res.json({ Message: "Something went wrong!", error: err }).status(500);
      });
  } catch (err) {
    res.json({ Message: "Something went wrong!", error: err }).status(500);
  }
}
function getUser(req, res) {
  try {
    User.find({})
      .then((response) => {
        res
          .json({ Message: "User is fetched Successfully!", data: response })
          .status(200);
      })
      .catch((err) => {
        res.json({ Message: "Something went wrong!", error: err }).status(500);
      });
  } catch (err) {
    res.json({ Message: "Something went wrong!", error: err }).status(500);
  }
}
function getUserById(req, res) {
  try {
    User.find({ _id: req.params.id })
      .then((response) => {
        res.json({ Message: "User it is!", data: response }).status(200);
      })
      .catch((err) => {
        res.json({ Message: "Something went wrong!", error: err }).status(500);
      });
  } catch (err) {
    res.json({ Message: "Something went wrong!", error: err }).status(500);
  }
}
module.exports = { createUser, getUser, getUserById };
