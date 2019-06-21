import React from 'react'
import Link from 'next/link'
import {withStyles} from '@material-ui/core/styles'
import Head from '../components/head'
import Nav from '../components/nav'
//import Image from '../static/sitemars.jpg'
//import { url } from 'inspector';

const styles = theme => ({
    img:{
         backgroundposition: center,
        backgroundrepeat: no-repeat,
        height: 100,
        backgroundSize: cover,
     }
});

class background extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        let {classes} = this.props;
        return(
            <div>
                <img src="/static/sitemars.jpg" className={classes.img}/>
            </div>
        )
    }
}

export default withStyles(styles)(background);