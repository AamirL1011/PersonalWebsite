import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch, useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {updateMenuState, updateWorkDialogState} from "../../../Actions/mainActions";
import { connect } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@material-ui/core/Typography";
import WorkDialog from "../../../Components/ExperienceDialogs/WorkDialog";
import CustomizedTimeline from "../../../Components/TimeLine/CustomizedTimeline";


import SummarizeIcon from '@mui/icons-material/Summarize';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const actions = [
    { icon: <LinkedInIcon />, name: 'LinkedIn' },
    { icon: <GitHubIcon />, name: 'GitHub' },
    { icon: <SummarizeIcon />, name: 'Resume' },
];


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

    const {showWorkDialog} = props;
    /*
        const desktop =  useMediaQuery("(min-width: 900px)");
    */

    return(
        <Grid container item direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{backgroundColor: "#fff9eb"}}>
            <Grid item xs={10} sm={6} md={3} lg={1} xl={1}>
                <div className={"scrabbleBox"} style={{maxWidth: "150px"}}>
                    <span className="scrabble animate"><span style={{color: "black"}}>Hi</span></span>
                </div>
            </Grid>
            <Grid item xs={12} sm={5} md={2} lg={1} xl={1} style={{textAlign: "center", paddingTop: "10px"}}>
                <img className={"avatar"} src={process.env.PUBLIC_URL + './Assets/Images/bitmoji.png'} alt=""/>
            </Grid>
            <Grid item xs={10} style={{paddingTop: "15px"}} >
                <Card sx={{ borderRadius: "10px", backgroundColor: "#fff9eb" }} elevation={0}>
                    <CardContent>
                        <Typography variant={"h5"} gutterBottom>
                            <strong style={{fontFamily: "Inter", color: "rgba(0, 0, 0, 0.7)", fontWeight: "500"}}>About me:</strong>
                        </Typography>
                        <Typography variant="body1">
                            <span style={{fontFamily: "Inter", color: "rgba(0, 0, 0, 0.6)"}}>Nice to meet you!
                                I'm a 4th year computer science student and full-stack developer based in Vancouver,
                                Canada. I have previously completed a BSc in Biology, with a focus at the cellular level.
                                I am goal driven, passionate about learning, and I love exploring new tools and technologies!
                            </span>
                            <br/>
                            <br/>
                            <span style={{fontFamily: "Inter", color: "rgba(0, 0, 0, 0.6)"}}>Feel free to check
                                out my <a href={process.env.PUBLIC_URL + './Assets/Documents/resume.pdf'} download="resume.pdf" style={{color: "#9e5353"}}>resume</a>,
                                my <a href="https://github.com/AamirL1011" style={{color: "#9e5353"}}>GitHub</a>, and
                                contact me on <a href="https://www.linkedin.com/in/aamir-s/" style={{color: "#9e5353"}}>LinkedIn</a> if you have any questions!
                            </span>
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <br/>
            </Grid>
            <Grid item xs={12} style={{textAlign: "center", paddingTop: "15px", backgroundColor: "rgba(227, 207, 161, 1.00)" }} id={"experience"}>
                <Typography variant={"h5"}>
                    <span style={{fontFamily: "Inter", fontWeight: "500", color: "rgba(0, 0, 0, 0.7)"}}>Experience</span>
                </Typography>
            </Grid>
            <Grid item xs={12} style={{backgroundColor: "rgba(227, 207, 161, 1.00)"}}>
                <CustomizedTimeline />
            </Grid>
            <Grid item xs={12}>
                <br/>
            </Grid>
            <Grid item xs={12} style={{textAlign: "center"}} id={"projects"}>
                <Typography variant={"h5"}>
                    <span style={{fontFamily: "Inter", fontWeight: "500", color: "rgba(0, 0, 0, 0.7)"}}>Projects</span>
                </Typography>
            </Grid>
            <WorkDialog style={{zIndex: 99}} openDialog={true} />
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        menuEnabled: state.appState.showSideBar,
        showWorkDialog: state.appState.showWorkDialog,
    };
};

const mapDispatchToProps = {
    updateMenuState,
    updateWorkDialogState,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
