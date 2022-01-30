import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch, useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {updateMenuState, updateProjectDialogState, updateWorkDialogState, updateProjectDialogTypeState} from "../../../Actions/mainActions";
import { connect } from "react-redux";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@material-ui/core/Typography";
import WorkDialog from "../../../Components/ExperienceDialogs/WorkDialog";
import ProjectDialog from "../../../Components/ProjectDialogs/ProjectDialog";
import CustomizedTimeline from "../../../Components/TimeLine/CustomizedTimeline";
import {Button, CardActionArea, CardActions, CardMedia, Divider} from "@material-ui/core";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';




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
    const [tabValue, setTabValue] = React.useState('personal');

    const handleOpenProject = (type) => {
        const {updateProjectDialogTypeState, updateProjectDialogState} = props;

        updateProjectDialogTypeState(type);
        updateProjectDialogState(true);
    }

    const handleTarget = (target) => {
        console.log(target);
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    /*
        const desktop =  useMediaQuery("(min-width: 900px)");
    */

    return(
        <Grid container item direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{backgroundColor: "#fff9eb"}}>
            <Grid item xs={12} id={"about"}>
                <br/>
                <br/>
                <br/>
            </Grid>
            <Grid item xs={10} sm={6} md={6} lg={4} xl={2}
            >
                <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                    <Grid item xs={10} sm={12}>
                        <div className={"scrabbleBox"} style={{maxWidth: "150px"}}>
                            <span className="scrabble animate"><span style={{color: "black"}}>Hi</span></span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={4} xl={2} style={{textAlign: "center", paddingTop: "10px"}}>
                <img className={"avatar"} src={process.env.PUBLIC_URL + './Assets/Images/bitmoji.png'} alt=""/>
            </Grid>
            <Grid item xs={10} style={{paddingTop: "15px"}} >
                <Card sx={{ borderRadius: "10px", backgroundColor: "#fff9eb" }} elevation={0}>
                    <CardContent>
                        <Slide direction={"up"} >
                            <Typography variant={"h5"} gutterBottom>
                                <strong style={{fontFamily: "Inter", color: "rgba(0, 0, 0, 0.7)", fontWeight: "500", fontSize: "1.3em"}}>About me:</strong>
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
            <Grid item xs={12} style={{minHeight: "150px"}}>
                <br/>
            </Grid>
            <Grid container item xs={12}  direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}
            style={{backgroundColor: "rgba(227, 207, 161, 1.00)", minHeight: "100px"}}
            >
                <Grid container item direction={"row"} xs={10} xl={6} style={{marginTop: "-100px", minHeight: "200px" ,
                    backgroundColor: "#f1edd6", filter: "drop-shadow(0 1px 0.05rem gray)", padding: "10px", borderRadius: "2px"}}
                      justifyContent={"space-evenly"} alignItems={"center"}>
                    <Grid container direction={"row"} item xs={12} md={6} xl={5} justifyContent={"space-evenly"}
                          alignItems={"center"}>
                        <Slide direction={"down"} triggerOnce={true}>
                            <Grid item xs={12} style={{textAlign: "center"}}>
                                <img src={process.env.PUBLIC_URL + './Assets/Images/stack2.png'} alt="..."
                                     style={{maxWidth: "100px"}}
                                />
                            </Grid>
                        </Slide>
                        <Grid item xs={10} style={{textAlign: "center"}}>
                            <Typography>
                                <span style={{fontFamily: "Inter", fontWeight: "500", fontSize: "20px"}}>Full Stack</span>
                            </Typography>
                            <Typography variant={"body2"}>
                            <span>From customer support & consultation, testing, UI/frontend, backend, to cloud deployment. I
                                have experience that encompasses every layer of the stack from start to finish and beyond.</span>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} item xs={12} md={6} xl={5} justifyContent={"space-evenly"}
                          alignItems={"center"}>
                        <Slide direction={"down"} triggerOnce={true}>
                            <Grid item xs={12} style={{textAlign: "center"}}>
                                <img src={process.env.PUBLIC_URL + './Assets/Images/fhir.png'} alt="..."
                                     style={{width: "250px", maxWidth: "100%", minHeight: "90px"}}
                                />
                            </Grid>
                        </Slide>
                        <Grid item xs={10} style={{textAlign: "center"}}>
                            <Typography>
                                <span style={{fontFamily: "Inter", fontWeight: "500", fontSize: "20px"}}>FHIR Health Data</span>
                            </Typography>
                            <Typography variant={"body2"}>
                            <span>Working with health data? I have experience with patient data in FHIR format and interfacing
                                with SMART on FHIR compatible EMR systems.</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} id={"experience"}  style={{backgroundColor: "rgba(227, 207, 161, 1.00)"}}>
                <br/>
            </Grid>
            <Grid item xs={12} style={{backgroundColor: "rgba(227, 207, 161, 1.00)"}}>
                <br/>
            </Grid>
            <Grid item xs={12} style={{backgroundColor: "rgba(227, 207, 161, 1.00)"}}>
                <br/>
            </Grid>
            <Grid item xs={12}
                  style={{textAlign: "center", paddingTop: "15px",  backgroundColor: "rgba(227, 207, 161, 1.00)" }}>
                <Slide direction={"up"}>
                    <Typography variant={"h5"}>
                        <span style={{fontFamily: "Inter", fontSize: "1.5em", fontWeight: "500", color: "rgba(0, 0, 0, 0.7)"}}>Work Experience</span>
                    </Typography>
                </Slide>
            </Grid>
            <Grid item xs={12} style={{backgroundColor: "rgba(227, 207, 161, 1.00)"}}>
                <CustomizedTimeline />
            </Grid>
            <Grid item xs={12} style={{backgroundColor: "rgba(227, 207, 161, 1.00)"}}>
                <br/>
                <br/>
                <br/>
            </Grid>
            <Grid container item className={"projectHeaderWrap"} direction={"row"} justifyContent={"flex-start"} alignItems={"center"} xs={12} style={{height:"100vh",
                backgroundImage: `linear-gradient(to left, rgba(163, 91, 57, 0.93), rgba(133, 36, 36, 0.73)), url(${projectImg})`,
            backgroundSize: "cover"}} id={"projects"}
                  >
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
                backgroundColor: "#edebe6", filter: "drop-shadow(0 0 0.05rem #edebe6)"}}
                  justifyContent={"space-evenly"} alignItems={"center"}>
                <Grid item xs={12} style={{textAlign: "center", paddingTop: "30px"}}>
                    <Typography variant={"h2"}>
                        <span style={{fontSize: "0.80em"}}>Some cool things I've worked on</span>
                    </Typography>
                </Grid>
                <Grid item xs={11} style={{textAlign: "center", paddingTop: "30px"}}>
{/*
                    <Divider variant={"middle"} style={{backgroundColor: "black"}} />
*/}
                    {/*<Box sx={{ width: '100%' }}>
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
                    </Box>*/}
                </Grid>
                <Grid container item xs={12} direction={"row"}
                      justifyContent={"space-evenly"} alignItems={"center"}
                style={{paddingTop: "30px", paddingBottom: "30px"}}>
                    <Grid item xs={11} sm={5} md={5} style={{padding: "20px"}}>
                        <Card sx={{ maxWidth: "100%" }} elevation={0}>
                            <CardMedia
                                component="img"
                                min-height="200"
                                min-width="250"
                                image={process.env.PUBLIC_URL + './Assets/Images/wechatter_app2.png'}
                                alt="..."
                            />
                            <CardActionArea
                            onClick={() => handleOpenProject("wechatter")}
                            >
                            <CardContent>
                                <Box sx={{flexGrow: 1}}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography gutterBottom variant="h6" component="div">
                                                <span style={{fontSize: "0.90em"}}>WeChatter Video Chat App (beta)</span>
                                            </Typography>
                                            <Typography variant={"body2"}>
                                                <strong>Tech/Stack: </strong>Docker, Google Cloud Platform, WebRTC, Express,
                                                Socket.IO, Terraform, Auth0
                                            </Typography>
                                        </Grid>
                                        <Grid container item xs={12} direction={"row"}
                                              justifyContent={"space-evenly"} alignItems={"flex-end"}
                                        style={{marginBottom: "-15px"}}>
                                            <Grid container item xs={12} style={{textAlign: "right"}}>
                                                <Grid item xs={9} />
                                                <Grid item xs={2}>
                                                    <Typography variant={"body1"}>
                                                    <span style={{color: "#53859e"}}>More</span>
                                                   </Typography>
                                                </Grid>
                                                <Grid item xs={1}><ArrowForwardIosIcon style={{color: "#53859e"}} /></Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={5} md={5} style={{padding: "20px"}}>
                        <Card sx={{ maxWidth: "100%" }} elevation={0}>
                            <CardMedia
                                component="img"
                                min-height="200"
                                min-width="250"
                                image={process.env.PUBLIC_URL + './Assets/Images/mangodb_thumb.png'}
                                alt="..."
                            />
                            <CardActionArea onClick={() => handleOpenProject("dogether")}>
                                <CardContent>
                                    <Box sx={{flexGrow: 1}}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    <span style={{fontSize: "0.90em"}}>DoGether Social Todo App</span>
                                                </Typography>
                                                <Typography variant={"body2"}>
                                                    <strong>Tech/Stack: </strong> React, Redux, Express, MongoDB, AWS (S3, Cloudfront),
                                                    Heroku, ESLint, Bootstrap
                                                </Typography>
                                            </Grid>
                                            <Grid container item xs={12} direction={"row"}
                                                  justifyContent={"space-evenly"} alignItems={"flex-end"}
                                                  style={{marginBottom: "-15px"}}>
                                                <Grid container item xs={12} style={{textAlign: "right"}}>
                                                    <Grid item xs={9} />
                                                    <Grid item xs={2}>
                                                        <Typography variant={"body1"}>
                                                            <span style={{color: "#53859e"}}>More</span>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}><ArrowForwardIosIcon style={{color: "#53859e"}} /></Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={5} md={5} style={{padding: "20px"}}>
                        <Card sx={{ maxWidth: "100%" }} elevation={0}>
                            <CardMedia
                                component="img"
                                min-height="200"
                                min-width="250"
                                image={process.env.PUBLIC_URL + './Assets/Images/myPage.png'}
                                alt="..."
                            />
                            <CardActionArea onClick={() => handleOpenProject("personal")}>
                                <CardContent>
                                    <Box sx={{flexGrow: 1}}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    <span style={{fontSize: "0.90em"}}>Personal Portfolio Page</span>
                                                </Typography>
                                                <Typography variant={"body2"}>
                                                    <strong>Tech/Stack: </strong> React, Material-UI, Cloudflare, AWS Route 53
                                                </Typography>
                                            </Grid>
                                            <Grid container item xs={12} direction={"row"}
                                                  justifyContent={"space-evenly"} alignItems={"flex-end"}
                                                  style={{marginBottom: "-15px"}}>
                                                <Grid container item xs={12} style={{textAlign: "right"}}>
                                                    <Grid item xs={9} />
                                                    <Grid item xs={2}>
                                                        <Typography variant={"body1"}>
                                                            <span style={{color: "#53859e"}}>More</span>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}><ArrowForwardIosIcon style={{color: "#53859e"}} /></Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={5} md={5} style={{padding: "20px"}}>
                        <Card sx={{ maxWidth: "100%" }} elevation={0}>
                            <CardMedia
                                component="img"
                                min-height="200"
                                min-width="250"
                                image={process.env.PUBLIC_URL + './Assets/Images/campusExplorer_thumb.png'}
                                alt="..."
                            />
                            <CardActionArea onClick={() => handleOpenProject("campus")}>
                                <CardContent>
                                    <Box sx={{flexGrow: 1}}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    <span style={{fontSize: "0.90em"}}>Campus Course Explorer App</span>
                                                </Typography>
                                                <Typography variant={"body2"}>
                                                    <strong>Tech/Stack: </strong> TypeScript, NodeJS, Mocha, Chai, Restify
                                                </Typography>
                                            </Grid>
                                            <Grid container item xs={12} direction={"row"}
                                                  justifyContent={"space-evenly"} alignItems={"flex-end"}
                                                  style={{marginBottom: "-15px"}}>
                                                <Grid container item xs={12} style={{textAlign: "right"}}>
                                                    <Grid item xs={9} />
                                                    <Grid item xs={2}>
                                                        <Typography variant={"body1"}>
                                                            <span style={{color: "#53859e"}}>More</span>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}><ArrowForwardIosIcon style={{color: "#53859e"}} /></Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={5} md={5} style={{padding: "20px"}}>
                        <Card sx={{ maxWidth: "100%" }} elevation={0}>
                            <CardActionArea onClick={() => handleOpenProject("database")}>
                                <CardContent>
                                    <Box sx={{flexGrow: 1}}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    <span style={{fontSize: "0.90em"}}>SQL Database Admin Console</span>
                                                </Typography>
                                                <Typography variant={"body2"}>
                                                    <strong>Tech/Stack: </strong> MySQL, Apache Server, PHP
                                                </Typography>
                                            </Grid>
                                            <Grid container item xs={12} direction={"row"}
                                                  justifyContent={"space-evenly"} alignItems={"flex-end"}
                                                  style={{marginBottom: "-15px"}}>
                                                <Grid container item xs={12} style={{textAlign: "right"}}>
                                                    <Grid item xs={9} />
                                                    <Grid item xs={2}>
                                                        <Typography variant={"body1"}>
                                                            <span style={{color: "#53859e"}}>More</span>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}><ArrowForwardIosIcon style={{color: "#53859e"}} /></Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={5} md={5} style={{padding: "20px"}}>
                        <Card sx={{ maxWidth: "100%" }} elevation={0}>
                            <CardActionArea onClick={() => handleOpenProject("bus")}>
                                <CardContent>
                                    <Box sx={{flexGrow: 1}}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    <span style={{fontSize: "0.90em"}}>Bus Transit Android App</span>
                                                </Typography>
                                                <Typography variant={"body2"}>
                                                    <strong>Tech/Stack: </strong> Java, Android Studio, Genymotion, JUnit
                                                </Typography>
                                            </Grid>
                                            <Grid container item xs={12} direction={"row"}
                                                  justifyContent={"space-evenly"} alignItems={"flex-end"}
                                                  style={{marginBottom: "-15px"}}>
                                                <Grid container item xs={12} style={{textAlign: "right"}}>
                                                    <Grid item xs={9} />
                                                    <Grid item xs={2}>
                                                        <Typography variant={"body1"}>
                                                            <span style={{color: "#53859e"}}>More</span>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}><ArrowForwardIosIcon style={{color: "#53859e"}} /></Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={5} md={5} style={{padding: "20px"}}>
                        <Card sx={{ maxWidth: "100%" }} elevation={0}>
                            <CardActionArea onClick={() => handleOpenProject("smtp")}>
                                <CardContent>
                                    <Box sx={{flexGrow: 1}}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    <span style={{fontSize: "0.90em"}}>SMTP Email Server</span>
                                                </Typography>
                                                <Typography variant={"body2"}>
                                                    <strong>Tech/Stack: </strong> C Language
                                                </Typography>
                                            </Grid>
                                            <Grid container item xs={12} direction={"row"}
                                                  justifyContent={"space-evenly"} alignItems={"flex-end"}
                                                  style={{marginBottom: "-15px"}}>
                                                <Grid container item xs={12} style={{textAlign: "right"}}>
                                                    <Grid item xs={9} />
                                                    <Grid item xs={2}>
                                                        <Typography variant={"body1"}>
                                                            <span style={{color: "#53859e"}}>More</span>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}><ArrowForwardIosIcon style={{color: "#53859e"}} /></Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={5} md={5} style={{padding: "20px"}}>
                        <Card sx={{ maxWidth: "100%" }} elevation={0}>
                            <CardActionArea onClick={() => handleOpenProject("dns")}>
                                <CardContent>
                                    <Box sx={{flexGrow: 1}}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    <span style={{fontSize: "0.90em"}}>DNS Resolver</span>
                                                </Typography>
                                                <Typography variant={"body2"}>
                                                    <strong>Tech/Stack: </strong> Java
                                                </Typography>
                                            </Grid>
                                            <Grid container item xs={12} direction={"row"}
                                                  justifyContent={"space-evenly"} alignItems={"flex-end"}
                                                  style={{marginBottom: "-15px"}}>
                                                <Grid container item xs={12} style={{textAlign: "right"}}>
                                                    <Grid item xs={9} />
                                                    <Grid item xs={2}>
                                                        <Typography variant={"body1"}>
                                                            <span style={{color: "#53859e"}}>More</span>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}><ArrowForwardIosIcon style={{color: "#53859e"}} /></Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <WorkDialog style={{zIndex: 99}} openDialog={true} />
            <ProjectDialog style={{zIndex: 99}} />
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        showWorkDialog: state.appState.showWorkDialog,
    };
};

const mapDispatchToProps = {
    updateMenuState,
    updateWorkDialogState,
    updateProjectDialogState,
    updateProjectDialogTypeState,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
