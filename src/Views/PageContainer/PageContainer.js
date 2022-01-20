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
import {Divider} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';


const actions = [
    { icon: <LinkedInIcon />, name: 'LinkedIn' },
    { icon: <GitHubIcon />, name: 'GitHub' },
    { icon: <SummarizeIcon />, name: 'Resume' },
];


function PageContainer(props) {

    const handleDialAction = (actionName) => {
        switch(actionName) {
            case "Resume" :{
                const link = document.createElement('a');
                link.href = process.env.PUBLIC_URL + './Assets/Documents/resume.pdf';
                link.setAttribute('download', `resume.pdf`);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
                break;
            }
            case "LinkedIn": {
                const link = document.createElement('a');
                link.href = "https://www.linkedin.com/in/aamir-s/";
                link.click();
                link.parentNode.removeChild(link);
                break;
            }
            case "GitHub": {
                const link = document.createElement('a');
                link.href = "https://github.com/AamirL1011";
                link.click();
                link.parentNode.removeChild(link);
                break;
            }
            default:
                break;
        }
    }

    return(
        <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{backgroundColor: "#fff9eb", width: "100%", height: "100%"}}>
            <Navbar />
            <HomePage />
            <Grid container direction={"row"} item alignItems={"center"} justifyContent={"flex-start"} style={{bottom: "0", minHeight: "100px", backgroundColor: "rgba(56, 56, 56, 1.00)"}}>
                    <Grid item xs={3} md={2} style={{paddingLeft: "20px"}}>
                        <Grid container item xs={12}>
                            <img src={process.env.PUBLIC_URL + "/Assets/Images/personal_logo3_transparent.png"} style={{maxHeight: "40px", maxWidth:"60px"}} alt="..."/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={8} style={{color :"whitesmoke", paddingLeft: "10px", textAlign: "center"}}>
                        ©2022 Created with ❤️ by Aamir Sheergar
                    </Grid>
                <Grid item xs={3} sm={2}>
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"flex-start"}>
                        <Grid item xs={1}>
                            <br/>
                            <Divider orientation={"vertical"} flexItem={true} style={{height: "60px", maxHeight: "100%", backgroundColor: "white"}} />
                            <br/>
                        </Grid>
                        <Grid item xs={11}>
                            <Stack
                                direction="column"
                                spacing={0}
                            >
                                <Link href="https://github.com/AamirL1011" underline="none" style={{color: "white"}}>GitHub</Link>
                                <Link href="https://www.linkedin.com/in/aamir-s/" underline="none" style={{color: "white"}}>LinkedIn</Link>
                                <Link href="#" onClick={() => handleDialAction("Resume")} underline="none" style={{color: "white"}}>Resume</Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', position: "fixed", bottom: -50, right: 16, flexGrow: 1, zIndex: 56 }}>
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
                            onClick={() => handleDialAction(action.name)}
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
