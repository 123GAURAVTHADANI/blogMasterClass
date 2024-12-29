var express = require("express");
const { createBlog } = require("../Controllers/blog.controller");
var blogRouter = express.Router();

blogRouter.post("/createBlog", createBlog);

module.exports = { blogRouter };
