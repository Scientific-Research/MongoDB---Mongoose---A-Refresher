const mongoose = require("mongoose");

// mongoose.Schema({here comes the items that we want to store in our Databank!})
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

// mongoose.model('name of collection', name of our Schema)
module.exports.Product = mongoose.model("Product", productSchema);
