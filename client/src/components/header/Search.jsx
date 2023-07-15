
import { InputBase,Box,styled } from "@mui/material";

// for icons 

import SearchIcon from '@mui/icons-material/Search';

// maneging Search bar Css here

const SearchContainer=styled(Box)`
        background:#fff;
        width:30%;
        border-radius:2px;
        margin-left:10px;
        display:flex;
        height:35px;
`;
// managing Search bar input css

const InputSearchBase=styled(InputBase)`
        padding-left:20px;
        width:100%;
        font-size:14px;

`
const SearchIconWrapper=styled(Box)`
    color:blue;
    padding:7px;
    display:flex;
`

const Search=()=>{
    return(
        <SearchContainer>
        
           <InputSearchBase
           placeholder="Search for products, brands and more"
           />
           <SearchIconWrapper>
           <SearchIcon/>
           </SearchIconWrapper>
           
        </SearchContainer>
    )
}
export default Search;