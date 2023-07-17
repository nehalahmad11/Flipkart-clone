import { Grid,styled} from "@mui/material";
import { imageURL } from "../../constants/data";

const WrapperGrid=styled(Grid)`
    margin-top:10px;
    justify-content:space-between;
`
// here access theme for UI Material ui for responsive 

const Image=styled('img')(({theme})=>({
    width:'100%',
    height:170,
    marginTop:10,
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }

}))
const MidSectionBanner=()=>{
    const url="https://res3.sastasundar.com/live/website/hb-react/build_1.0.0/static/media/hero-banner.d0a50a48aa83de04e169.webp";
    return (<>
{/* here working for resposive UI */}
        <WrapperGrid lg={12} sm={12} md={12} xs={12} container>
                {
                    imageURL.map(image=>(
                       <Grid item lg={4} sm={4} md={4} xs={12}>
                         <img src={image} alt="img url banner" style={{width:"100%"}} />
                        </Grid>
                    ))
                }
        </WrapperGrid>
        <Image src={url} alt="heathcare img" />
        </>
    )
}
export default MidSectionBanner;