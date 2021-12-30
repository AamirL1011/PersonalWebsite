import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MoreIcon from '@material-ui/icons/MoreVert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import {updateMenuState} from "../../Actions/mainActions";
import Box from "@mui/material/Box";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        fontSize: '1.3em',
        color: "#e3cfa1",
    },
    logo: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        paddingLeft: '10px',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function Navbar(props) {
    const {updateMenuState, menuEnabled} = props;
    const classes = useStyles();
    const theme = useTheme();
    let navigate = useNavigate();


    const [loadingBackdrop, setLoadingBackdrop] = React.useState(false);



    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };




    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={isMenuOpen}
        >
            <MenuItem><span>Logout  </span></MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem disabled>
                <AccountBoxIcon /><Typography variant={"subtitle1"} noWrap></Typography>
            </MenuItem>
            <MenuItem><span>Logout  </span><ExitToAppIcon color={"secondary"}/></MenuItem>

        </Menu>
    );



    return(
        <Grid item xs={12} className={classes.appBar}>
            <AppBar position="fixed" style={{backgroundColor: "rgba(255, 249, 235, 0.50)", backdropFilter: "blur(6px)"}} elevation={0}>
                <Toolbar>
                    <img className={classes.logo} style={{width: "50px", height: "40px"}} src={process.env.PUBLIC_URL + './Assets/Images/personal_logo3_transparent.png'} alt="..."/>
                    <Typography style={{paddingLeft: "10px", paddingRight: "10px"}} className={classes.title} noWrap>
                        <span>Aamir Sheergar</span>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key={"home"}
                                sx={{ my: 2, display: 'block' }}
                            >
                                <span style={{color: "#9e5353"}}>Home</span>
                            </Button>
                            <Button
                                key={"experience"}
                                sx={{ my: 2, display: 'block' }}
                            >
                                <span style={{color: "#9e5353"}}>Experience</span>
                            </Button>
                        <Button
                            key={"projects"}
                            sx={{ my: 2, display: 'block' }}
                        >
                            <span style={{color: "#9e5353"}}>Projects</span>
                        </Button>
                    </Box>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                        {renderMobileMenu}
                        {renderMenu}
                    </div>
                </Toolbar>
            </AppBar>
            <br/>
            <br/>
            <br/>
            <Backdrop className={classes.backdrop} open={loadingBackdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Grid>
    )

}

const mapStateToProps = (state) => {
    return {
        menuEnabled: state.appState.showSideBar,
    };
};

const mapDispatchToProps = {
    updateMenuState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
