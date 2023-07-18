
// components
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { getProductsDetails } from "../../redux/actions/productAtions";
import { Box, Typography,Grid,styled } from "@mui/material";

import ActionItems from "./ActionItems";


// here hanling the css of product components

const Component=styled(Box)`
    background:#f2f2f2;
    // margin:3px;

`;

const Container=styled(Grid)`
    background:#ffffff;
    display:flex;

`;

const RightContainer=styled(Grid)`
    margin-top:50px;
`

const DetailsView=()=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
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
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5,
                            color:'#878787',
                            fontSize:14}}>
                            8 Rating & 1 Reviews
                            <Box component='span'><img src={fassured} alt="fassured img"  style={{width:77,marginLeft:20}}/></Box>
                            </Typography>
                            <Typography>

                                <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                <Box component='sapn' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{color:'green'}}>{product.price.discount}</Box>
                            </Typography>
                    </RightContainer>
                </Container>   
            }
        </Component>
    )
}
export default DetailsView