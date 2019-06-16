import React from 'react';
import link from 'next/link'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import About from '../pages/about';
import Home from '../pages/index';
  
const links = {
    href: 'https://github.com/jcanode',
    label:'Github'
}
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Navtest() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Github" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><Home /></TabContainer>}
      {value === 1 && <TabContainer><About /></TabContainer>}
      {value === 2 && <TabContainer><a href="http://github.com/jcanode">http://github.com</a></TabContainer>}
    </div>
  );
}