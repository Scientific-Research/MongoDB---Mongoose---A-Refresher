const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://Maximilian:4N22oIntIDURyhVl@cluster0.ki7w2ay.mongodb.net/products_test?retryWrites=true&w=majority";

module.exports.createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.status(500).json({ message: "Could not store data!" });
  } finally {
    client.close();
  }
  res.status(200).json({
    Message: "This product created in Database:",
    product: newProduct,
  });
};

module.exports.getProducts = async (req, res, next) => {
  const client = new MongoClient(url);
  let products;

  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
    console.log(products);
  } catch (error) {
    return res.status(500).json({ Message: "Could not find the data!" });
  } finally {
    client.close();
  }
  res.status(200).json({
    Message: "These products retrieved from Database: ",
    products: products,
  });
};
