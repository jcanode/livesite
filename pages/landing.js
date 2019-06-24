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

    
    <Head title="Landing" className="homeImg"/>
    
	 <div className="hero">
        <Link href="/login">
            Login
            </Link>
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