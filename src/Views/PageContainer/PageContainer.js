import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch, useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {updateMenuState} from "../../Actions/mainActions";
import Navbar from "../../Components/Navbar/Navbar";
import { connect } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Divider} from "@material-ui/core";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@material-ui/core/Typography";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';


import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const actions = [
    { icon: <LinkedInIcon />, name: 'LinkedIn' },
    { icon: <GitHubIcon />, name: 'GitHub' },
    { icon: <SummarizeIcon />, name: 'Resume' },
];

export function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    September 2018 - April 2019
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{backgroundColor: "#9e5353"}}>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Blackberry QNX
                    </Typography>
                    <Typography>Software Integration Intern</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    May 2019 - August 2019
                </TimelineOppositeContent>
                <TimelineSeparator style={{color:"#53859e"}}>
                    <TimelineConnector />
                    <TimelineDot color="inherit" variant="outlined">
                        <LaptopMacIcon style={{color: "black"}} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Blackberry QNX
                    </Typography>
                    <Typography>Software Testing Intern</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    September 2020 - December 2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{backgroundColor: "#9e5353"}}>
                        <FilterDramaIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        UBC-AWS Cloud Innovation Centre
                    </Typography>
                    <Typography>Software Developer Intern</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    January 2021 - August 2021
                </TimelineOppositeContent>
                <TimelineSeparator style={{color:"#53859e"}}>
                    <TimelineConnector />
                    <TimelineDot color="inherit" variant="outlined">
                        <FilterDramaIcon style={{color: "black"}} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        UBC-AWS Cloud Innovation Centre
                    </Typography>
                    <Typography>Software Developer (part time)</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}


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

    return(
        <Grid container direction="column"  direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{backgroundColor: "#fff9eb", width: "100vw", height: "100vh"}}>
            <Navbar />
            <Grid item xs={10} sm={4} md={3} lg={1} xl={1}>
                <div className={"scrabbleBox"} style={{maxWidth: "150px"}}>
                    <span className="scrabble animate"><span style={{color: "black"}}>Hi</span></span>
                </div>
            </Grid>
            <Grid item xs={12} sm={7} md={3} lg={1} xl={1} style={{textAlign: "center", paddingTop: "10px"}}>
                    <img className={"avatar"} src={process.env.PUBLIC_URL + './Assets/Images/bitmoji.png'} alt=""/>
            </Grid>
            <Grid item xs={10} justifyContent={"center"} alignItems={"center"} style={{paddingTop: "15px"}} >
                <Card sx={{ borderRadius: "10px", backgroundColor: "rgba(255, 253, 250, 1.00)" }} elevation={1}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            <strong>About me:</strong>
                        </Typography>
                        <Typography variant="body2">
                            <p>Nice to meet you! I'm a 4th year computer science student and full-stack developer based in Vancouver, Canada. I have previously completed a BSc in Biology, with a focus at the cellular level.
                            I am goal driven, passionate about learning, and I love exploring new tools and technologies!</p>
                            Feel free to check out my <a href={process.env.PUBLIC_URL + './Assets/Documents/resume.pdf'} download="resume.pdf">resume</a>, my <a href="https://github.com/AamirL1011">GitHub</a>, and contact me on <a href="https://www.linkedin.com/in/aamir-s/">LinkedIn</a> if you have any questions!
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <br/>
            </Grid>
            <Grid item xs={12} style={{paddingTop: "15px", backgroundColor: "rgba(227, 207, 161, 1.00)"}}>
                {CustomizedTimeline()}
            </Grid>
            <Grid item xs={12}>
                <br/>
            </Grid>
            <Grid container item alignItems={"center"} justifyContent={"center"} style={{bottom: "0"}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Divider variant="middle"/>
                        </Grid>
                        <Grid item xs={12} style={{textAlign: "center"}}>
                            ©2022 Designed by Aamir Sheergar
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
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
