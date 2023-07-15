

// components
import NavBar from "./NavBar.jsx";
import Banner from "./Banner";
import { styled,Box } from "@mui/material";

// here handling the css of slide bar background

const ContainerShadow=styled(Box)`
    padding:10px;
    background:#f2f2f2;
`
const Home=()=>{
    return(
      <>
        <NavBar/>
      <ContainerShadow>
      <Banner/>
      </ContainerShadow>
      </>
    )

}
export default Home;