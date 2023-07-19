import { useState } from "react";
import { Box, Button,styled } from "@mui/material";

import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";



const LeftContainerImg=styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }
}))
    

// here image of left product box of css
const Image=styled('img')({
    padding:'15px',
   
})

// button  Buy and add to cart of css
const StyleButton=styled(Button)(({theme})=>({
    width:'48%',
    height:'50px',
    borderRadius:'2px',
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('xs')]:{
        width:'48%'
    }
}))
   
const ActionItems=({product})=>{
    // here maintaing the Add to cart Button
        const navigate=useNavigate();
        const dispatch=useDispatch();
        const[quantity,setQuantity]=useState(1);
        const {id}=product;

        const addItemToCart=()=>{
            dispatch(addToCart(id,quantity))
            navigate('/cart');
        }
    return(
    <LeftContainerImg>
        <Box style={{ padding:'15px 15px',border:'1px solid #f0f0f0',width:'90%'}}>
        <Image src={product.detailUrl} alt="Product img" style={{width:'85%'}}/>
        </Box>
        <StyleButton variant="contained" onClick={()=>addItemToCart()} style={{marginRight:10, background:'rgb(255,159,0)'}}><Cart/>Add to Cart</StyleButton>
        <StyleButton variant="contained" style={{background:'rgb(251,100,27)'}}><Flash/>Buy Now</StyleButton>
    </LeftContainerImg>
    )
}
export default ActionItems;