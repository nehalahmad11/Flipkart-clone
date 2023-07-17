
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