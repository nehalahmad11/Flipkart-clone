

import {AppBar,Toolbar,Box,Typography,styled} from "@mui/material";
// components import here 
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";


// Here managing Header css using material ui------->>>>>>>>>>>

 const StyledHeader = styled(AppBar)`
        background: rgb(40 116 240);
        height: 55px;
 `
//  managing Component css here
     const Component=styled(Link)`
        margin-left:12%;
        line-height:0;
        text-decoration:none;
        color:inherit;
     `
// manage SubHeading css here
const SubHeading=styled(Typography)`
        font-size:10px;
        font-style:italic;
`
//   here manage the Sub-logo-img 
const PlusLogoImg=styled("img")({
    width: "10px",
    height:"10px",
    marginLeft:"2px"
})

// header margin handle the css here
const CustomWrapperButton=styled(Box)`
 margin: 0 5% 0 auto;

`


const Header=()=>{
    const LogoUrl="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const SubImgLogo="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
    return (
        <StyledHeader>
            <Toolbar style={{minHeight:"55px"}}>
                <Component to={'/'}>
                <img src={LogoUrl} alt="logo" style={{width:"75px"}}/>
                <Box style={{display:"flex"}}>
                <SubHeading>
                    Explore &nbsp;
                    <Box component="span" style={{color:"yellow"}}>Plus</Box> 
                </SubHeading>
                <PlusLogoImg src={SubImgLogo} alt="sub-img-logo" />
                </Box>
                </Component>
                <Search/>
                <CustomWrapperButton>
                    <CustomButtons/>
                </CustomWrapperButton>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header;