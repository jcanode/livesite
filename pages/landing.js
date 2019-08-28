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
     <Link href="/login">Login</Link></div>
     <div className="row">
     <p className="card">
     <h1>Welcome</h1>
     <p>If you made it to my site, welcome! Theres not much here yet but one there will (hopefully) be more. A bit about me: I am a second year Computer Science Student studying at Grand Canyon University in Phoenix, Arizona. I am passionate about AI and Machine Learning. To view more of my work see my 
     <Link href="https://github.com/jcanode/"> github.</Link>
     </p>
     </p>
     </div>
     <div    className="copyRight">
        Disclamer. Image is from NASA I do not own it.
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
      .row{
      max-width: 880px;
      margin: 180px auto 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;}
      .card{padding: 18px 18px 24px;
      width: 300px;
      text-align: left;
      text-decoration: none;
      color: #fff;}
      .link{color: #fff}
      .copyRight{color: #fff; position: fixed; bottom: 0;}

    `}</style>
    </div>
)
export default landing
                                   