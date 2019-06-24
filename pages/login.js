import React from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'


//this will be the authentication page
const login = () => (
<div>
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
</div>

)

export default login