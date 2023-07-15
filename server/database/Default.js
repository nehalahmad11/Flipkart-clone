import Product from "../modelSchema/product-schema.js"
import { products } from "../constants/data.js"

const DefaultData= async()=>{
    try{
        // await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Product data imported Succesfully in database....")
    }
    catch(error){
        console.log("Error while inserting data in product....",error.message);
    }
}

export default DefaultData;