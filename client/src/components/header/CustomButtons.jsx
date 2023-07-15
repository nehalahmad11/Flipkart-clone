import { useState, useContext} from "react";

import { Button, Typography,Box,styled } from "@mui/material"
import Profile from "./profiles";


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// components
import LoginDialog from "../login/loginDailog";
import { DataContext } from "../../context/DataProvider";

const IconWrapper=styled(Box)`
    display:flex;
    margin:0 4% 0 auto;
    & > button, & > p, & > div{
        margin-right:40px;
        align-item:center;
        
    }
`

const CartContainer=styled(Box)`
        display:flex;

`
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
            <CartContainer style={{marginTop:4}}>
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </CartContainer>
            {/* here passing open as a props */}
            <LoginDialog open={open} setOpen={setOpen}/>
        </IconWrapper>
    )
}
export default CustomButtons