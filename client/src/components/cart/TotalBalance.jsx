import { useState,useEffect } from "react";
import { Box, Typography,styled } from "@mui/material";

const HeadingPrice=styled(Box)`
    padding:15px 24px;
    background:#fff;
    border-botton:1px solid #f0f0f0;
`;
const HeaderWrapper=styled(Typography)`
    color:#878787;

`;
const Container=styled(Box)`
    padding:15px 24px;
    background: #fff;
    & > p {
        margin-bottom:20px;
        font-size:14px;
    }
    & h6 >{
        margin-bottom:20px;
    }

`;
const Pricetext=styled(Box)`
    float:right;

`;
const Discount=styled(Typography)`
    font-size:12px;
    color:green;
    font-weight:500;
`

const TotalBalance = ({ cartItems }) => {

    const[price,setPrice]=useState(0);
    const[discount,setDiscount]=useState(0);

    useEffect(()=>{
        totalAmount();
    },[cartItems])

    const totalAmount=()=>{
        let price=0,discount=0;
        cartItems.map(item=>{
            price+=item.price.mrp;
            discount+=(item.price.mrp-item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }
  return (
    <Box>
        <HeadingPrice>
            <HeaderWrapper>PRICE DETAILS</HeaderWrapper>
        </HeadingPrice>
        <Container>
            <Typography>
                    Price({cartItems?.length}item)
                <Pricetext component="span">₹{price}</Pricetext>
            </Typography>
            <Typography>
                    Discount
                <Pricetext component="span">-₹{discount}</Pricetext>
            </Typography>
            <Typography>
                    Delivery Charges
                <Pricetext component="span">₹40</Pricetext>
            </Typography>
            <Typography variant="h6">
                     Total Amount 
                <Pricetext component="span">₹{price-discount + 40}</Pricetext>
            </Typography>
            <Discount>
                     You will save ₹{discount - 40} on this order
            </Discount>
        </Container>
    </Box>
  );
};
export default TotalBalance;
