import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch, useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {updateMenuState} from "../../Actions/mainActions";
import Navbar from "../../Components/Navbar/Navbar";
import { connect } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../../logo.svg";
import {Divider} from "@material-ui/core";
import Box from "@mui/material/Box";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    drawerPaper: {
        width: 240,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function PageContainer(props) {
    const classes = useStyles();
    let navigate = useNavigate();


/*
    const desktop =  useMediaQuery("(min-width: 900px)");
*/

    return(<Grid container direction="column" justifyContent={"center"} alignItems={"center"} style={{backgroundColor: "#fff9eb", width: "100vw", height: "100vh"}}>
        <Navbar />
        <br/>
        <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{backgroundColor: "#fff9eb"}}>
            <Grid item xs={10} sm={4} md={3} lg={1} xl={1}>
                <div className={"scrabbleBox"} style={{maxWidth: "150px"}}>
                    <span className="scrabble animate"><span style={{color: "black"}}>Hi</span></span>
                </div>
            </Grid>
            <Grid item xs={12} sm={7} md={3} lg={1} xl={1} style={{textAlign: "center", paddingTop: "10px"}}>
                    <img className={"avatar"} src={process.env.PUBLIC_URL + './Assets/Images/bitmoji.png'} alt=""/>
            </Grid>
            <Grid item xs={12} style={{backgroundColor: "#fff9eb"}}>

            </Grid>
            <Grid item xs={12}>
                <br/>
            </Grid>

        </Grid>
        <Grid container item alignItems={"center"} justifyContent={"center"} style={{position: "absolute", bottom: "0"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Divider variant="middle"/>
                    </Grid>
                    <Grid item xs={12} style={{textAlign: "center"}}>
                        Footer
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>)
}

const mapStateToProps = (state) => {
    return {
        menuEnabled: state.appState.showSideBar,
    };
};

const mapDispatchToProps = {
    updateMenuState,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
