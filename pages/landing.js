import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
//import Card from '../components/card'
//import background from '../static/justin.jpg'
//const image = require('../static/justin.jpg')
//const mainstyle = style({background: 'url(static/justin.jpg) no-repeat center cover'})
const landing  = () => (

    <div className="homeImg">

    
    <Head title="justincanode.com" className="homeImg"/>
    
	 <div className="hero">
        <Link href="/login">
            Login
            </Link>
	</div>
    
    <div className="row">
    
          <p className="card">
            <h1>Welcome</h1>
            <p>
            For online documentation and support please refer to 
            <Link href="https://github.com/jcanode/"> My github</Link>
            </p>
          </p>
        
    </div> 
    <style jsx>{`
    :global(body) {
       position: relative;
        margin: 0 0 0 0;
        font-family: -Arial;
        font-size: 0.9rem;
      }
    .homeImg{
        background-image: url(/static/sitemars.jpg);
      //  background-position: center;
        backgroun-repeat: no-repeat;
        height: 100vh;
        background-size: cover;
    }
    .hero {
        text-align: right;
        
        margin:0;
        //width: 100%;
        color: #ffffff;
      }
      .title{
          margin: 0;
          text-align: right;
      }
      .about{
        color: #ffffff;
      }
      .row {
        max-width: 880px;
        margin: 180px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 300px;
        text-align: left;
        text-decoration: none;
        color: #fff;
        border: 2px solid #9b9b9b;
      }
      
      .card h3 {
        margin: 0;
        color: #fff;
        font-size: 24px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 16px;
        color: #fff;
      }
      .link{
        color: #fff;
      }
    //   .container {
    //     display: grid;
    //     //grid-template-columns: 50px 50px 50px 50px;
    //     grid-template-rows: auto;
    //     grid-template-areas:
    //       "header header header header"
    //       "main main . sidebar"
    //       "footer footer footer footer";
    //   }
     
    `}</style>
    </div>
)
export default landing