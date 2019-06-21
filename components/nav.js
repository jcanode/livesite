import React from 'react'
import Link from 'next/link'
//import { HUE } from '@material-ui/core/colors/HUE';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Switch from '@material-ui/core/Switch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme'


//const color = purple[900];


// const links = [
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

const links = {
  href: 'https://github.com/jcanode',
  label:'Github'
  }

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function Nav() {
  const classes = useStyles();
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  // });

  // const handleChange = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
  // };


return   (
  <nav>
  <MuiThemeProvider theme={theme}>

    <AppBar position="static">
    <ul>
      <li>
        <Button variant="outlined"  href="/" className={classes.button}>
        Home
      </Button>
      </li>
      <li>
        <Button variant="outlined" href="/about" className={classes.button}>
          about
        </Button>
      </li>
      <ul>
          <li>
            <Button variant="outlined"  href={links.href} className={classes.button}>
              {links.label}
            </Button>
          </li>
      </ul>
    </ul>
    </AppBar>
    </MuiThemeProvider>
    <div className="darkmode">
 {/* <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        label="Darkmode"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
    /> */}
  </div>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
       text-align: right;
      }
      darkmode{
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
    

  </nav>

)

    }

//export default Nav
