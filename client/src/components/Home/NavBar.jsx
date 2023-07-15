
import { Box ,Typography,styled} from "@mui/material";
// Component
import { navData } from "../../constants/data";

// here managing navbar product of css
const Component=styled(Box)`
    display:flex;
    margin:55px 30px 15px 30px;
    justify-content:space-between;
`
const Container=styled(Box)`
    padding:12px 8px;
    text-align:center;
`

const Text=styled(Typography)`
    font-size:14px;
    font-weight:600;
     font-family:inherit;
`

const NavBar=()=>{
    return(
        <Component>
            {
               navData.map(data=>(
                <Container>
                    <img src={data.url} alt="nav_product" style={{width:45}} />
                    <Text>{data.text}</Text>
                </Container>
               )) 
            }
        </Component>
    )
}
export default NavBar;