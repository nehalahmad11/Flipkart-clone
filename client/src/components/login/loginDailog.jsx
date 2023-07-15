
import { useState, useContext} from 'react'

import {Dialog,Box,TextField, Typography,Button,styled} from '@mui/material'
import { authenticationSignup, authenticationLogin } from '../../service/api'
import { DataContext } from '../../context/DataProvider'

const Component=styled(Box)`
    height:87vh;
    width:112vh;
`
const Image=styled(Box)`
        background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
        height:80.9%;
        width:29%;
        padding:50px 35px;
        & > h5{
            color:white;
            font-weight:600;
        }


`
const Wrapper=styled(Box)`
        display:flex;
        flex-direction:column;
        padding:25px 35px;
        flex:1;
        & > div, & > p, & button {
            margin-top:20px;
        }
`
// here handling Login button css--->>

const LoginButton=styled(Button)`
        text-transform:none;
        background:rgb(251,100,27);
        color:#fff;
        height:45px;
        border-radius:2px;
       
`

// here handling the Request OTP Button css

const RequestButton=styled(Button)`
        text-transform:none;
        background:white;
        color:#2874f0;
        height:45px;
        border-radius:2px;
        box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
       
`

const Text=styled(Typography)`
        font-size:14px;
        color:#878787;

`
// here handling the css of Create new Account on flipkart.
const CreateAccount=styled(Typography)`
        font-size:14px;
        color:#2874f0;
        font-weight:600;
        text-align:center;
        cursor:pointer;
`
const Error=styled(Typography)`
        font-size:10px;
        color:#ff6161;
        line-height:0;
        margin-top:10px;
        font-weight:600;
`

// here handling  login and signup functionality....
const accountInitialValues={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'

    },
    signup:{
        view:'signup',
        heading:'Looks like you\'re new here!',
        subHeading:'Sign up with your mobile number to get started'
    }
}


// here handlig the sign up initial value taken 

const signupInitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const loginIntialVaules={
    username:'',
    password:''
}

// here handlig all Login dialog 
const LoginDialog=({open,setOpen})=>{

    const [account,toggleAccount]=useState(accountInitialValues.login)

    const [signup,setSignup]=useState(signupInitialValues)

    const [login,setLogin]=useState(loginIntialVaules);

    const [error,setError]=useState(false);
    //  here find the dataContex here
    const {setAccount}=useContext(DataContext);

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login)
        setError(false);
    }

// here handling toggle signup onclick funtion

const toggleSignup=()=>{
    toggleAccount(accountInitialValues.signup)
}


// here handlig all onchange input taking function
const onChangeInput=(e)=>{
    // console.log(e.target.value);
    setSignup({...signup,[e.target.name]:e.target.value});
    // console.log(signup);
}


// here handling the sign with continue button funtionality authenticationSignup

const onSignupUser=async()=>{
    let response=await authenticationSignup(signup);
    // /onsole.log(response);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname);
    // console.log(setAccount);
}

const onValueChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
}
const loginInUser= async()=>{
    let response= await authenticationLogin(login);
    console.log(response);
    if(response.status === 200){
        handleClose();
        setAccount(response.data.data.firstname );
    }else{
        setError(true);
    }

}


    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
           <Component>
            <Box style={{display:'flex',height:'100%'}}>
            <Image>
                <Typography variant='h5' style={{marginLeft:"20px"}}>{account.heading}</Typography>
                <Typography style={{margin:20,color:'rgb(195,205,222)'}}>{account.subHeading}</Typography>
            </Image>
            {
                account.view==='login' ?
                <Wrapper>
                <TextField variant='standard' onChange={(e)=>{onValueChange(e)}} name='username' label='Enter Username'/>
                { error &&<Error>Please enter valid Username and Password</Error>}
                <TextField variant='standard' onChange={(e)=>{onValueChange(e)}} name='password' label='Enter Password'/>
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                <LoginButton onClick={()=>loginInUser()}>Login</LoginButton>
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <RequestButton>Request OTP</RequestButton>
                <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
                <TextField variant='standard' onChange={(e)=>{onChangeInput(e)}} name='firstname' label='Enter Firstname'/>
                <TextField variant='standard' onChange={(e)=>{onChangeInput(e)}} name='lastname' label='Enter Lastname'/>
                <TextField variant='standard' onChange={(e)=>{onChangeInput(e)}} name='username' label='Enter Username'/>
                <TextField variant='standard' onChange={(e)=>{onChangeInput(e)}} name='email' label='Enter Email'/>
                <TextField variant='standard' onChange={(e)=>{onChangeInput(e)}} name='password' label='Enter Password'/>
                <TextField variant='standard' onChange={(e)=>{onChangeInput(e)}} name='phone' label='Enter Phone Number'/>
                <LoginButton onClick={()=>{onSignupUser()}}>Continue</LoginButton>
            </Wrapper>
            }
            </Box>
           </Component>
        </Dialog>
    )
}
export default LoginDialog;