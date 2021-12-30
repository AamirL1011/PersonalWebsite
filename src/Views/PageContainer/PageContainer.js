import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch, useNavigate} from 'react-router-dom';
import {updateMenuState} from "../../Actions/mainActions";
import Navbar from "../../Components/Navbar/Navbar";
import { connect } from "react-redux";
import Box from "@mui/material/Box";





import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import HomePage from "../Pages/Home/HomePage";

const actions = [
    { icon: <LinkedInIcon />, name: 'LinkedIn' },
    { icon: <GitHubIcon />, name: 'GitHub' },
    { icon: <SummarizeIcon />, name: 'Resume' },
];


function PageContainer(props) {


    return(
        <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{backgroundColor: "#fff9eb", width: "100vw", height: "100vh"}}>
            <Navbar />
            <HomePage />
            <Box sx={{ height: 320, transform: 'translateZ(0px)', position: "fixed", bottom: 16, right: 16, flexGrow: 1, zIndex: 56 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{}}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                        />
                    ))}
                </SpeedDial>
            </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
