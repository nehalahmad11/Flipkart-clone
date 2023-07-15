import mongoose from "mongoose";

const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@flipkart-clone.fx7smyz.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Database connected succesfully....")
    }
    catch(error){
        console.log("Error while connecting the database",error.message);
    }
}

export default Connection;