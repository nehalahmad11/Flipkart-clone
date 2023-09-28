
import { Box,Table,TableRow,TableBody,TableCell,Typography,styled } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';


// css of offer line font 
const SmallText=styled(Box)`
    font-size:12px;
    vertical-align:baseline;
        & > p {
            font-size:14px;
            margin-top:10px;
        }

`;
// css of Badge means all offers line
const StyledBadge=styled(Badge)`
        margin-right:10px;
        color:rgb(20,190,71);
        font-size:15px;

`
// tableRow font size off css
const ColumnText=styled(TableRow)`
        font-size:14px;
        vertical-align:baseline;
        & > td {
            font-size:14px;
            margin-top:10px;
            border:none;
        }

`

const ProductDetails=({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    // time of delivery reached of css
    const date= new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));
    return(<>
        <Box style={{marginLeft:12}}>
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
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge/>Bank Offer10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge/>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*</Typography>
                <Typography><StyledBadge/>Partner OfferPurchase now & get 1 surprise cashback coupon in Future Know More</Typography>
                <Typography><StyledBadge/>Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
                <Typography><StyledBadge/>Bank Offer10% off on Axis Bank Debit Card and EMI Transactions, up to ₹500, on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge/>Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999T&C</Typography>
            </SmallText>
        </Box>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery By {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell >No Warranty</TableCell> 
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell >
                            <Box  component='span' style={{color:'#2874f0'}}>BUZZINDIA</Box>
                            <Typography>GST Invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width:390}} alt="ads img" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
            </> )
}
export default ProductDetails;