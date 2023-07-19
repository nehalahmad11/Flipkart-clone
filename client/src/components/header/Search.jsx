
import { InputBase,Box,List, ListItem,styled } from "@mui/material";

// for icons 

import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from "react";

import {useSelector,useDispatch} from 'react-redux';
import {getProducts} from '../../redux/actions/productAtions';
import { Link } from "react-router-dom";

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
const ListWrpper=styled(List)`
    position:absolute;
    background:#FFFFFF;
    color:#000;
    margin-top:37px;
`


const Search=()=>{
    //fecthing text data here
    const[text,setText]=useState('');

    const {products}=useSelector(state=>state.getProducts);
// using ussEffect here
    const dispatch=useDispatch();
      useEffect(()=>{
        dispatch(getProducts());
      },[dispatch])

    const getText=(text)=>{
        setText(text);
    }
    return(
        <SearchContainer>
        
           <InputSearchBase
           placeholder="Search for products, brands and more"
           onChange={(e)=>getText(e.target.value)}
           value={text}
           />
           <SearchIconWrapper>
           <SearchIcon/>
           </SearchIconWrapper>
           {/* here handling the all Searh data whatever user will be Search */}
           {
            text && 
            <ListWrpper>
                    {
                        products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map( product =>(
                                <ListItem>
                                   <Link 
                                        to={`/product/${product.id}`}
                                        onClick={()=>setText('')}
                                        style={{textDecoration:'none',color:'inherit'}}
                                   >
                                   {product.title.longTitle}
                                   </Link>
                                </ListItem>
                        ))
                    }
            </ListWrpper>
           }
           
        </SearchContainer>
    )
}
export default Search;