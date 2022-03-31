const mongoose = require("mongoose");


const furnitureSchema = new mongoose.Schema(
  {
    img_url: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("furnitures", furnitureSchema);
