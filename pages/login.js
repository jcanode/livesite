import React from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'


//this will be the authentication page
const login = () => (
  
<div className="landingPage">
<Head title="Login"/>
      <div className="hero">
      <Link href="/landing">
        Back
      </Link>
      </div>
      <h1>Welcome to the login page</h1>
        <Input 
        placeholder="username"
        />

        <br/>
        <Input 
        placeholder="password"
        />
        <br/>
      <button variant="contained">Submit</button>

    <style jsx>{`:global(body){background-color: #A9A9A9; margin: 0 0 0 0;} .hero {
        text-align: right;
        
        margin:0;
        //width: 100%;
        color: #ffffff;
      }`
    
    }</style>
</div>

)

export default login  