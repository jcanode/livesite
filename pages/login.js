import React from 'react'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const handleChange = name => event => {
  setValues({ ...values, [name]: event.target.value });
};

const login = () => (
  
  
<div className="landingPage">
<Head title="Login"/>
      <div className="hero">
      <Link href="/landing">
        Back
      </Link>
      </div>
      <h1>Welcome to the login page</h1>
       
        <TextField 
          label="Username"
          margin="normal"
        />
        <br/>

        
       
       <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        
      />
        <br/>
      <button variant="contained" color="primary" >Submit</button>

    <style jsx>{`:global(body){background-color: #A9A9A9; margin: 0 0 0 0;} .hero {
        text-align: right;
        
        margin:0;
        //width: 100%;
        color: #ffffff;
      }`
    
    }</style>
</div>

)

export default     login  