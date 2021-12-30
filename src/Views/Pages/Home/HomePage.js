import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch, useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {updateMenuState} from "../../../Actions/mainActions";
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
import TimelineButton from '../../../Components/TimelineButton/TimelineButton';



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
                    <TimelineButton
                        job={"Blackberry QNX"}
                        title={"Software Integration Intern"}
                        imagePath={"bbryLogo.jpeg"}
                    />
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
                    <TimelineButton
                        job={"Blackberry QNX"}
                        title={"Software Testing Intern"}
                        imagePath={"bbryLogo.jpeg"}
                    />
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
                    <TimelineButton
                        job={"UBC-AWS Cloud Innovation Centre"}
                        title={"Software Developer Intern"}
                        imagePath={"ubcAws2.png"}
                    />
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
                    <TimelineButton
                        job={"UBC-AWS Cloud Innovation Centre"}
                        title={"Software Developer (part time)"}
                        imagePath={"ubcAws2.png"}
                    />
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

function HomePage(props) {
    const classes = useStyles();
    let navigate = useNavigate();


    /*
        const desktop =  useMediaQuery("(min-width: 900px)");
    */

    return(
        <Grid container item direction={"row"} justifyContent={"center"} alignItems={"center"} style={{backgroundColor: "#fff9eb"}}>
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
                            Feel free to check out my <a href={process.env.PUBLIC_URL + './Assets/Documents/resume.pdf'} download="resume.pdf" style={{color: "#9e5353"}}>resume</a>, my <a href="https://github.com/AamirL1011" style={{color: "#9e5353"}}>GitHub</a>, and contact me on <a href="https://www.linkedin.com/in/aamir-s/" style={{color: "#9e5353"}}>LinkedIn</a> if you have any questions!
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <br/>
            </Grid>
            <Grid item xs={12} style={{textAlign: "center",paddingTop: "15px", backgroundColor: "rgba(227, 207, 161, 1.00)" }}>
                <Typography variant={"h5"}>
                    Experience
                </Typography>
            </Grid>
            <Grid item xs={12} style={{backgroundColor: "rgba(227, 207, 161, 1.00)"}}>
                {CustomizedTimeline()}
            </Grid>
            <Grid item xs={12}>
                <br/>
            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
