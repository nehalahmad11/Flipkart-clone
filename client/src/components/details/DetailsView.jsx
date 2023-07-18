
// components
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { getProductsDetails } from "../../redux/actions/productAtions";
import { Box,Grid,styled } from "@mui/material";

import ActionItems from "./ActionItems";
import ProductDetails from "./ProductDetails";


// here hanling the css of product components

const Component=styled(Box)`
    background:#f2f2f2;
    // margin:3px;

`;
// css of image margin 

const Container=styled(Grid)(({theme})=>({
    background:'#ffffff',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}))
    

const RightContainer=styled(Grid)`
    margin-top:50px;
`

const DetailsView=()=>{
    
    const dispacth=useDispatch();
    const {id}=useParams();

    // here destructuring the data 
    const {loading,product}=useSelector(state=>state.getProductsDetails);

    useEffect(()=>{
        if(product && id !==product.id)
        dispacth(getProductsDetails(id))
    },[dispacth],id,product,loading)


    console.log(product);
    return(
        <Component>
            {
                 product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItems product={product}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        
                            <ProductDetails product={product}/>
                    </RightContainer>
                </Container>   
            }
        </Component>
    )
}
export default DetailsView