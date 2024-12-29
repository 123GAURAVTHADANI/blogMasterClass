var express = require("express");
const { User } = require("../Model/user.schema");
const {
  createUser,
  getUser,
  getUserById,
} = require("../Controllers/user.controller");
var userRouter = express.Router();

// Router Middleware
userRouter.post("/createUser", createUser);
userRouter.get("/getUser", getUser);
userRouter.get("/getUser/:id", getUserById);
module.exports = { userRouter };

// {
//     "firstName":"Gaurav",
//     "lastName":"Thadani",
//     "password":"123@gauravThadani",
//     "email":"garv.thadani@netflix.com",
//     "username":"garv.thadani",
//     "roles":"SUPER ADMIN"
// }

// {
//     "title":"Title 1",
//     "description":"I am the first Blog!!"
//  }