import axios from 'axios';

const URL='http://localhost:8000'

export const authenticationSignup=async(data)=>{
    try{
        return await axios.post(`${URL}/signup`,data);
    }catch(error){
        console.log("Error while calling the signup api ",error);
    }
}
export const authenticationLogin=async(data)=>{
    try{
        return await axios.post(`${URL}/login`,data);
    }catch(error){
        console.log("Error while calling the login api ",error);
        return error.response;
    }
}

// Making the Api for the Payment Paytmgateway

export  const payUsingPaytm = async(data) => {
    try{
        let response=await axios.post(`${URL}/payment`, data);
        return response.data;
    }
    catch(error){
        console.log("Error while Calling Payment Api", error);
    } 

}