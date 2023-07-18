
// here fetching all Product on home page from server 
import Product from "../modelSchema/product-schema.js";
export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
// here fecthing product by Id from server routes
export const getProductById = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findOne({ id: id });
    response.status(200).json(product);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
