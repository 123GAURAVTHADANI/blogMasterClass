var mongoose = require("mongoose");
function dbConfig() {
  mongoose
    .connect(
      "mongodb+srv://garvthad:123Gaurav@cluster0.yl7bq.mongodb.net/FSDMasterClass?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connected to DB!!");
    });
}
module.exports = { dbConfig };
