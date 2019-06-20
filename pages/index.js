import React, { Component } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import {withStyles} from '@material-ui/styles'
import Head from '../components/head'
import Nav from '../components/nav'
import Switch from '@material-ui/core/Switch';

const classes = withStyles();




// const [state, setState] = React.useState({
//     checkedA: true,
//     checkedB: true,
// });
  
//  handleChange = name => event => {
//     setState({ ...state, [name]: event.target.checked });
// };
export default class Home extends React.Component {

  constructor(){
    super();
    this.setState = {
      Darkmode: false,
      checkedB: true,
    }
  }

      
  handleChange = name => event => {
    let mode = this.state.Darkmode;
    mode[name] = event.target.value;
    this.setState({Darkmode: true});
    

  };


  render(){
    let {classes} = this.props;
    let darkClass = {}
    if(this.state.Darkmode){
      darkClass[classes.Dark] = true;
    }else{
      darkClass[classes.Dark] = false;
    }
    return(
  <div className={classNames(classes.Dark)}>
    <Head title="Home" />
    <Nav />
    <Switch
        checked={this.setState.Darkmode}
        onChange={handleChange('Darkmode')}
        value="Darkmode"
        label="Darkmode"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
    />

    <div className="hero">
      <h1 className="title">Welcome to Next!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <Link href="https://github.com/zeit/next.js#getting-started">
          <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next on Github and in their examples</p>
          </a>
        </Link>
        <Link href="https://open.segment.com/create-next-app">
          <a className="card">
            <h3>Examples &rarr;</h3>
            <p>
              Find other example boilerplates on the{' '}
              <code>create-next-app</code> site
            </p>
          </a>
        </Link>
        <Link href="https://github.com/segmentio/create-next-app">
          <a className="card">
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </Link>
      </div>
    </div>
    )
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
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
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

      Dark: {
        background: #00000,
      }
    `}</style>
  </div>
    )
    }
  }

//export default Home
