import { Box,styled } from "@mui/material";

import Slide from './Slide';


const Component=styled(Box)`
        display:flex;

`

const LeftComponent=styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}))
        


const RightComponent=styled(Box)(({theme})=>({
        background:'#ffffff',
        padding:5,
        marginTop:10,
        marginLeft:7,
        width:'16%',
        textAlign:'center',
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
    }));


const midSlide=({products,title, timer})=>{
    const adsURL = 'https://rukminim2.flixcart.com/fk-p-flap/464/708/image/7e1b10c407635c44.png?q=70';
    return(
        <Component>
            <LeftComponent>
            <Slide products={products} 
            title={title} timer={timer}/>
            </LeftComponent>
            <RightComponent>
                <img src={adsURL} alt="ads imag url" style={{width:195,height:355}}/>
            </RightComponent>
        </Component>
    )
}
export default midSlide;