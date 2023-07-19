
import { Grid, Typography,Box ,styled} from "@mui/material";
import { useSelector } from "react-redux";
// Components 
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";


const Conatiner=styled(Grid)`
    padding:30px 135px;

`;
const Header=styled(Box)`
    padding:15px 24px;
`

const Cart=()=>{

    const {cartItems}=useSelector(state=>state.cart);
    return(
        <>
            {
                cartItems.length ? 
                <Conatiner container>
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item=>(
                                <CartItem item={item}/>
                            ))
                        }
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance/>
                    </Grid>
                </Conatiner>
                : <div>Empty</div>
            }
        </>
    )
}
export default Cart;