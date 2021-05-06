import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Avatar, Button, ListItemAvatar } from '@material-ui/core';
import './CustomerDashboard.css'
import logo from '../../img/logos/logo.png'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import Order from './Order/Order';
import ServiceList from './ServiceList/ServiceList';
import Review from './Review/Review';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const CustomerDashboard = (props) => {
    const [user, updateUser] = useContext(UserContext);
    console.log(user);
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [component, setComponent] = useState({ title: 'Order', icon: (<ShoppingCartOutlinedIcon />), component: (<Order />) })

    const menuList = [
        { title: 'Order', icon: (<ShoppingCartOutlinedIcon />), component: (<Order />) },
        { title: 'Service List', icon: (<ListAltOutlinedIcon />), component: (<ServiceList />) },
        { title: 'Review', icon: (<RateReviewOutlinedIcon />), component: (<Review />) }
    ]

    const drawer = (
        <div>
            <Link to="/">
                <img src={logo} className="logo" alt="logo" width="130px" />
            </Link>
            <div className={classes.toolbar} />
            <Divider />

            <List>
                {menuList.map(data => <ListItem onClick={() => setComponent(data)} button key={data.class}>
                    <ListItemIcon>{data.icon}</ListItemIcon>
                    <ListItemText primary={data.title} />
                </ListItem>)}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {component.title}
                    </Typography>
                    <div>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt={user.displayName} src={user.photoURL}/>

                            </ListItemAvatar>
                            <ListItemText
                                primary={user.displayName}
                            />
                        </ListItem>
                    </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {component.component}
            </main>
        </div>
    );
};
CustomerDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default CustomerDashboard;