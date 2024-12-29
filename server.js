var express = require("express");
const { dbConfig } = require("./Configurations/db.config");
const { userRouter } = require("./Routers/user.router");
var app = express();
var bodyParser = require("body-parser");
const { blogRouter } = require("./Routers/blog.router");

// Middlewares
app.use(bodyParser.json({}));
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);

app.listen(5001, async () => {
  await dbConfig();
  console.log("Listening to a port 5001");
});
