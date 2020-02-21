import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TemporaryDrawer from './TemporaryDrawer';
import { Redirect } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttons: {
    color: 'white'
  }
}));



export default function ButtonAppBar() {
  const classes = useStyles();
  const [renderInd, setRenderInd] = useState()
  const handleButtonClick = (index) => {
    setRenderInd(index)
  }
  const renderRedirect = () => {
    if (renderInd == 1) return <Redirect to='/main'/>
    if (renderInd == 2) return <Redirect to='/abitur'/>
    if (renderInd == 3) return <Redirect to='/articles'/>
    if (renderInd == 4) return <Redirect to='/faq'/>
    if (renderInd == 5) return <Redirect to='/login'/>
    if (renderInd == 6) return <Redirect to='/signup'/>
  }
  return (
    <div className={classes.root}>
      {renderRedirect()}
      <AppBar position="static">
        <div>
            {/* <TemporaryDrawer></TemporaryDrawer> */}
          <div style={{float: 'left'}}>
            <Button className={classes.buttons} onClick={() => setRenderInd(1) }>Главная</Button>
            <Button className={classes.buttons} onClick={() => setRenderInd(2)}>Претенденты на грант</Button>
            <Button className={classes.buttons} onClick={() => setRenderInd(3)}>Статьи</Button>
            {/* <Button className={classes.buttons} onClick={() => setRenderInd(4)}>FAQ</Button> */}

          </div>
          <Button style={{float: 'right'}} color="inherit" onClick={()=>setRenderInd(6)}>Sign up</Button>
          <Button style={{float: 'right'}} color="inherit" onClick={()=>setRenderInd(5)}>Login</Button>
        </div >
      </AppBar>
    </div>
  );
}