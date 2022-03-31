const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Somi2096:Somi2096@cluster0.g05du.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
