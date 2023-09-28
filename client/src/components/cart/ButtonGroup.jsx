import { ButtonGroup,Button,styled } from "@mui/material"

const Component=styled(ButtonGroup)`
    margin-top:10px;

`;

const StyeldButton=styled(Button)`
    border-radius:50%;

`

const AllButtonGroup=()=>{
    return(
        <Component>
            <StyeldButton>-</StyeldButton>
            <Button disabled>1</Button>
            <StyeldButton>+</StyeldButton>
        </Component>
    )
}
export default AllButtonGroup;