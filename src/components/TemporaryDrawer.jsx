import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
        redirect: ''
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const handlePageChange = (text, index) => {
        if(index==0){
            // setState(function(state, props) {return {redirect: '/'}})
            console.log(index)
        }
    }

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Новости', 'Список на грант', 'Статьи', 'FAQ'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <Button  onClick={handlePageChange(text, index)}>{text}</Button>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const renderRedirect = () => {
        if(state.redirect){
            return  <Redirect to={state.redirect}/>
        }
    }

    return (
        <div>
            {renderRedirect()}
            <IconButton edge="start"  onClick={toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
            
        </div>
    );
}