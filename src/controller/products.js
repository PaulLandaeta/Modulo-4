const Product = require("./../models/products");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "ok",
      data: products,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const addProduct = async (req, res) => {
  const {
    body: { name, price, unit, inventory },
  } = req;
  let newProduct = new Product();
  newProduct.name = name;
  newProduct.price = price;
  newProduct.unit = unit;
  newProduct.inventory = inventory;
  newProduct = await newProduct.save();
  res.status(200).json({
    status: "ok",
    dataInserted: newProduct,
  });
};

const getProductById = async (req, res) => {
  const _id = req.params.id;
  const product = await Product.findById({ _id });
  res.status(200).json({
    status: "ok",
    data: product,
  });
};

const updateProductById = async (req, res) => {
  const _id = req.params.id;
  let productUpdated = {
    name: req.body.name,
    price: req.body.price,
    unit: req.body.unit,
    inventory: req.body.inventory,
  };
  const product = await Product.findByIdAndUpdate(_id, productUpdated, {
    new: true,
  });
  res.status(200).json({
    status: "ok",
    data: product,
  });
};

const deleteProductById = async (req, res) => {
  const _id = req.params.id;
  const product = await Product.findByIdAndDelete({ _id });
  res.status(200).json({
    status: "ok",
    message: `${product.name} has been deleted`,
  });
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
