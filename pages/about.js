import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'


const About = () => (<div><Nav />
<Head title="Home" />
<br/>This will be an about me page
<div className="row"> 
    
    <Link href="https://github.com/jcanode">
    <a className="card">
        <h3>My github</h3>
        <p>Here's a link to my github most of it's private. But one day therethere will be something.</p>
        </a>
</Link>
</div>
<style jsx>{`
      .hero {
        width: 100%;
        color: #000;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: left;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
</div>)

export default About
