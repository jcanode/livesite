import React from 'react'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'

import background from '../components/background'
import Head from '../components/head'
import Nav from '../components/nav'

// const styles = theme => ({
//   img:{
//     //  //  backgroundposition: center,
//     //   //backgroundrepeat: no-repeat,
//     //   height: 100,
//     //   //backgroundSize: cover,
//    }
// });



// class About extends React.Component {
//   constructor(){
//       super();
//   }

//   render(){
//       let {classes} = this.props;
//       return(
//           <div>
//               <img src="/static/sitemars.jpg" className={classes.img}/>

//   <style jsx>{'
//       .img{
//       backgroundposition: center,
//       backgroundrepeat: no-repeat,
//       height: 100,
//       backgroundSize: cover,
//       }


//   </style>
// }
// </div>
//       )
//   }

const About = () => (<div>
  {/* <Nav />
<Head title="Home" /> */}
  {/* <br/>This will be an about me page */}
  {/* <background /> */}
  <div className="row">
    <img classname="image" src="/static/sitemars.jpg" />
    {/* <Link href="https://github.com/jcanode">
    <a className="card">
        <h3>My github</h3>
        <p>Here's a link to my github most of it's private. But one day therethere will be something.</p>
        </a>
</Link> */}

  </div>
  <style jsx>{`
      .image{
        // background-position: center,
        background-repeat: no-repeat,
        // height: 100vh,
        background-size: cover,
      }
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

export default About;
