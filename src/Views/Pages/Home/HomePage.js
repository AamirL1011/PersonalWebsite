import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch, useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {updateMenuState, updateWorkDialogState} from "../../../Actions/mainActions";
import { connect } from "react-redux";
import { Fade, Slide } from "react-awesome-reveal";
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@material-ui/core/Typography";
import WorkDialog from "../../../Components/ExperienceDialogs/WorkDialog";
import CustomizedTimeline from "../../../Components/TimeLine/CustomizedTimeline";
import {Divider} from "@material-ui/core";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';




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
    let projectImg = process.env.PUBLIC_URL + './Assets/Images/projectMoment.jpg';
    const {showWorkDialog} = props;
    const [tabValue, setTabValue] = React.useState('personal');

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    /*
        const desktop =  useMediaQuery("(min-width: 900px)");
    */

    return(
        <Grid container item direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{backgroundColor: "#fff9eb"}}>
            <Grid item xs={10} sm={6} md={3} lg={1} xl={1}>
                <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                    <Grid item xs={10} sm={12}>
                        <div className={"scrabbleBox"} style={{maxWidth: "150px"}}>
                            <span className="scrabble animate"><span style={{color: "black"}}>Hi</span></span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={5} md={2} lg={1} xl={1} style={{textAlign: "center", paddingTop: "10px"}}>
                <img className={"avatar"} src={process.env.PUBLIC_URL + './Assets/Images/bitmoji.png'} alt=""/>
            </Grid>
            <Grid item xs={10} style={{paddingTop: "15px"}} >
                <Card sx={{ borderRadius: "10px", backgroundColor: "#fff9eb" }} elevation={0}>
                    <CardContent>
                        <Slide direction={"up"} >
                            <Typography variant={"h5"} gutterBottom>
                                <strong style={{fontFamily: "Inter", color: "rgba(0, 0, 0, 0.7)", fontWeight: "500"}}>About me:</strong>
                            </Typography>
                        </Slide>
                        <Slide direction={"up"} >
                            <Typography variant="body1">
                            <span style={{fontFamily: "Inter", fontSize: "1.1em", color: "rgba(0, 0, 0, 0.6)"}}>Nice to meet you!
                                I'm a 4th year computer science student and full-stack developer based in Vancouver,
                                Canada. I have previously completed a BSc in Biology, with a focus at the cellular level.
                                I am goal driven, passionate about learning, and I love exploring new tools and technologies!
                            </span>
                                <br/>
                                <br/>
                                <span style={{fontFamily: "Inter", fontSize: "1.1em", color: "rgba(0, 0, 0, 0.6)"}}>Feel free to check
                                out my <a href={process.env.PUBLIC_URL + './Assets/Documents/resume.pdf'} download="resume.pdf" style={{color: "#9e5353"}}>resume</a>,
                                my <a href="https://github.com/AamirL1011" style={{color: "#9e5353"}}>GitHub</a>, and
                                contact me on <a href="https://www.linkedin.com/in/aamir-s/" style={{color: "#9e5353"}}>LinkedIn</a> if you have any questions!
                            </span>
                                <br />
                            </Typography>
                        </Slide>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} id={"experience"}>
                <br/>
            </Grid>
            <Grid item xs={12} id={"experience"}>
                <br/>
            </Grid>
            <Grid item xs={12}>
                <br/>
            </Grid>
            <Grid item xs={12} style={{textAlign: "center", paddingTop: "15px", backgroundColor: "rgba(227, 207, 161, 1.00)" }}>
                <Slide direction={"up"}>
                    <Typography variant={"h5"}>
                        <span style={{fontFamily: "Inter", fontWeight: "500", color: "rgba(0, 0, 0, 0.7)"}}>Experience</span>
                    </Typography>
                </Slide>
            </Grid>
            <Grid item xs={12} style={{backgroundColor: "rgba(227, 207, 161, 1.00)"}}>
                <CustomizedTimeline />
            </Grid>
            <Grid container item className={"projectHeaderWrap"} direction={"row"} justifyContent={"flex-start"} alignItems={"center"} xs={12} style={{height:"100vh",
                backgroundImage: `linear-gradient(to left, rgba(163, 91, 57, 0.93), rgba(133, 36, 36, 0.73)), url(${projectImg})`,
            backgroundSize: "cover"}} id={"projects"}>
                <Grid item xs={11} style={{paddingLeft: "20px"}}>
                    <Slide direction={"up"}>
                        <Typography variant={"h5"} style={{zIndex: 10}}>
                            <Slide direction={"left"}>
                                <Divider variant="middle" style={{backgroundColor: "white", width: "137px", marginLeft: "2px"}} />
                            </Slide>
                            <span style={{fontFamily: "Inter", fontSize: "1.5em", fontWeight: "500", color: "rgb(240,240,240)"}}>Projects</span>
                        </Typography>
                    </Slide>
                </Grid>
            </Grid>
            <Grid container item direction={"row"} xs={11} style={{marginTop: "-45px", minHeight: "100px" ,
                backgroundColor: "lightgray", filter: "drop-shadow(0 0 0.05rem grey)"}}
                  justifyContent={"space-evenly"} alignItems={"center"}>
                <Grid item xs={12} style={{textAlign: "center", paddingTop: "30px"}}>
                    <Typography variant={"h2"}>
                        <span style={{fontSize: "0.80em"}}>Some cool things I've worked on</span>
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{textAlign: "center", paddingTop: "30px"}}>
                    <Box sx={{ width: '100%' }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            textColor={"inherit"}
                            indicatorColor={"primary"}
                            disableRipple={true}
                            centerRipple={false}
                            aria-label="secondary tabs example"
                            centered
                        >
                            <Tab value="personal" label="Personal"/>
                            <Tab value="other" label="Other" />
                        </Tabs>
                    </Box>
                </Grid>
            </Grid>
            <Grid container item xs={10}>
                <p></p>
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
