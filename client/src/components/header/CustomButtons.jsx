import { useState, useContext} from "react";

import { Button, Typography,Box,styled, Badge } from "@mui/material"
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";


// components
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginDialog from "../login/loginDailog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./profiles";

// here handimg header of login ,cart, or seller of more button

const IconWrapper=styled(Box)(({theme})=>({
    display:'flex',
    margin:'0 4% 0 auto',
    '& > *':{
        marginRight:'40px !important',
        fontSize:16,
        alignItem:'center'
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))
    

// here handling button or Drawer of CSS


const CartContainer=styled(Link)(({theme})=>({
        display:'flex',
        textDecoration:'none',
        color:'inherit',
    [theme.breakpoints.down('md')]:{
            display:"block"
    }

}))
        


// here maneging Login button css

const LoginButtons=styled(Button)`
    color:#2874f0;
    background:#fff;
    text-transform:none;
    padding:5px 32px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:28px;
`
const CustomButtons=()=>{

    const [open,setOpen]=useState(false);

    // Here Fstching context Provider
    const {account,setAccount}=useContext(DataContext);
    const {cartItems}=useSelector(state=>state.cart);

    const openDialog=()=>{
        setOpen(true);
    }
    return(
        <IconWrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/> :
                <LoginButtons variant="contained" onClick={()=>openDialog()}>Login</LoginButtons>
            }
           
            <Typography style={{marginTop:3, width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>
            <CartContainer to={'/cart'} style={{marginTop:4}}>
                <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon/>
                </Badge>
                <Typography style={{marginLeft:7}}>Cart</Typography>
            </CartContainer>
            {/* here passing open as a props */}
            <LoginDialog open={open} setOpen={setOpen}/>
        </IconWrapper>
    )
}
export default CustomButtons