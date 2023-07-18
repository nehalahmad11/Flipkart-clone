
import axios from "axios"

// import { GET_PRODUCTS_FAIL,GET_PRODUCTS_SUCCES } from "../constants/productConstant";
import * as actionTypes from '../constants/productConstant';

const URL=`http://localhost:8000`;
// here using middleware with thunk

export const getProducts= () => async(dispatch)=>{ // middleware for dispatching the data
    try{
        const { data }= await axios.get(`${URL}/products`);
        
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS,payload: data});
    }
    catch(error){
        
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL,payload: error.message});
    }   
}

// here fetching the details of Products 
// id is coming from back as props
export const getProductsDetails=(id)=>async(dispatch)=>{
        try{
            dispatch({type:actionTypes.GET_PROUDCTS_DETAILS_REQUEST});
            const { data }= await axios.get(`${URL}/product/${id}`);
            dispatch({type: actionTypes.GET_PROUDCTS_DETAILS_SUCCES,payload: data});
        }catch(error){
            dispatch({type: actionTypes.GET_PROUDCTS_DETAILS_FAIL,payload:error.message});
        }
}