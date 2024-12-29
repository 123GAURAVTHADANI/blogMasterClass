const { Article } = require("../Model/blog.schema");

function createBlog(req, res) {
  try {
    Article.create(req.body)
      .then((response) => {
        res
          .json({ Message: "Article is Created Succefully!", data: response })
          .status(201);
      })
      .catch((err) => {
        res.json({ Message: "Something went wrong!", error: err }).status(500);
      });
  } catch (err) {
    res.json({ Message: "Something went wrong!", error: err }).status(500);
  }
}
module.exports = { createBlog };
