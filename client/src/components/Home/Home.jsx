// using useEffect i get all data

import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAtions";
import { useDispatch, useSelector } from "react-redux";
import MidSectionBanner from "./MidSectionBanner";

// components
import NavBar from "./NavBar.jsx";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from './MidSlide'

import { styled, Box } from "@mui/material";

// here handling the css of slide bar background

const ContainerShadow = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
const Home = () => {
  // here using useSelector for getting all products on screen
  const { products } = useSelector((state) => state.getProducts);

  //  Object destructuring point method
  console.log(products);
  // here using useEffect for collecting data from  getproucts functions

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <ContainerShadow>
        <Banner />
        {/* here passing products as props */}
        <MidSlide products={products} title="Deal of the Day" timer={true}/> 
        <MidSectionBanner/>
        <Slide products={products} title="Discounts for You" timer={false}/>
        <Slide products={products} title="Suggested Items" timer={false}/>
        <Slide products={products} title="Top Selections" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Sessions Top Pick's" timer={false}/>
        <Slide products={products} title="Top Deals on Accoseries" timer={false}/>
      </ContainerShadow>
    </>
  );
};
export default Home;
