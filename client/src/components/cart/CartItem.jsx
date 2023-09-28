import {Box, Button, Typography,styled} from '@mui/material';
import {useDispatch} from 'react-redux';

// Components

import { addEllipsis } from '../../utils/common-utils';
import AllButtonGroup from './ButtonGroup';
import { removeFromCart } from '../../redux/actions/cartActions';
// import EmptyCart from './EmptyCart';


const Component=styled(Box)`
    border:1px solid #f0f0f0;
    display:flex;
    background:#fff;
`;
const LeftComponent=styled(Box)`
    margin:25px;
    display:flex;
    flex-direction:column;

`;
const SmallText=styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:3px;
`;
const RemoveButton=styled(Button)`
    margin-top:15px;
    color:#000;
    font-size:16px;
    font-weight:600;

`
const CartItem=({item})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';


    const dispatch=useDispatch();
    const removeiItemFromCart=(id)=>{
            dispatch(removeFromCart(id))
    }
    return(
        <Component>
            <LeftComponent>
                <img src={item.url} alt="product Img" style={{height:90,width:90}}/>
                <AllButtonGroup/>
            </LeftComponent>
            <Box style={{margin:20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component='span'><img src={fassured} alt="fassured img" style={{width:50,marginLeft:10}} /></Box>
                </SmallText>
                <Typography style={{margin:'20px, 0',marginTop:13}}>
                    <Box component="span" style={{fontWeight:600,fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='sapn' style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color:'green'}}>{item.price.discount}</Box>
                </Typography>
                <RemoveButton onClick={()=>removeiItemFromCart(item.id)}>Remove</RemoveButton>
            </Box>
        </Component>
    )
}
export default CartItem;