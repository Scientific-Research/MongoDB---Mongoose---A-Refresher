const mongoose = require("mongoose");

const Product = require("./models/product");

const connectDB = async () => {
  try {
    // mongoose.connect() does open, close and all other thing...
    await mongoose.connect(
      "mongodb+srv://Maximilian:4N22oIntIDURyhVl@cluster0.ki7w2ay.mongodb.net/products_test?retryWrites=true&w=majority"
    );
    console.log("Connected to database!");
  } catch (error) {
    console.log("Connection faild!", error);
  }
};

connectDB();

module.exports.createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();

  res.status(200).json({ message: "Our Created Product:", product: result });
};
