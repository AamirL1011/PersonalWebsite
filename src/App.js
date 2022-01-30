import './App.css';
import Grid from '@material-ui/core/Grid';
import {StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import PageContainer from "./Views/PageContainer/PageContainer";
import { BrowserRouter } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {updateMainState} from "./Actions/mainActions";
import { makeStyles } from '@material-ui/core/styles';
import theme from "./themes";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Button} from "@material-ui/core";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CircleIcon from '@mui/icons-material/Circle';
import { Fade } from "react-awesome-reveal";



const useStyles = makeStyles((theme) => ({
  introContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    opacity: "100% !important"
  },
  enterButton: {
    "&:hover": {
      "& span": {
        "& svg": {
          "& path": {
            d:
                "path('m 12 4 l -1.41 1.41 L 16.17 11 H 4 v 2 h 12.17 l -5.58 5.59 L 12 20 l 8 -8 Z')"
          }
        }
      }
    }
  }
}));


function App(props) {
  const {appState, updateMainState} = props;
  const classes = useStyles();
  const [mainState, updateMainAppState] = useState(appState);
  const [openLoad, setOpenLoad] = React.useState(false);


  useEffect(() => {
    updateMainState(mainState);
  }, [mainState]);

  const handleEnter = () => {
    setOpenLoad(true);
   const loadTimer = setTimeout(() => {
      setOpenLoad(false);
      clearTimeout(loadTimer);
      updateMainAppState(true);
    }, 500);

  }


  return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
              <Grid style={{height: "100vh"}}>
                {
                    !mainState && (
                        <Grid container className={"splashPage"} justifyContent={"center"} alignItems={"center"} style={{backgroundColor: "lightgray", width: "100vw", height: "100vh"}}>
                          <video className={"splashVid"} playsInline autoPlay muted loop>
                            <source src={process.env.PUBLIC_URL + "/Assets/Videos/video.mp4"} type="video/mp4" />
                          </video>

                          <Grid container item xs={11} sm={7} md={5} lg={5} xl={4} style={{zIndex: "50"}} justifyContent={"center"} alignItems={"center"}>
                            <Grid container item justifyContent={"center"} alignItems={"center"} >
                              <Grid container item>
                                <Box sx={{ flexGrow: 1, zIndex: "55", marginBottom: "5%"}}>
                                    <Fade delay={1000} triggerOnce={true}>
                                        <Grid container spacing={1} justifyContent={"center"} alignItems={"center"}>
                                            <Grid item xs={4}>
                                                <Paper style={{background: "rgba(158, 155, 147, 0.9)", padding: "5%", paddingBottom: "3%", textAlign: "center"}} elevation={4}>
                                                    <img src={process.env.PUBLIC_URL + "/Assets/Images/personal_logo3.png"} style={{width: "100%", height: "100%"}}/>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Fade>
                                </Box>
                              </Grid>

                              <Grid container item className="GreetingBox">
                                <Box sx={{ flexGrow: 1, background: "rgba(227, 207, 161, 0.7)", backdropFilter: "blur(5px)", padding: "3%", borderRadius: "10px", boxShadow: "0px 0.5px 1px grey" }}>
                                  <Grid container spacing={2}>
                                      <Grid item xs={12}>
                                          <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} >
                                              <Grid item xs={3} sm={2} style={{marginTop: "-1.5%", marginLeft: "-1.5%"}}>
                                                  <CircleIcon className={"menuButton"} onClick={() => handleEnter()}  style={{color: "rgba(255,69,58,0.95)", fontSize: "15px", paddingRight: "5px", cursor: "pointer"}} />
                                                  <CircleIcon className={"menuButton"} onClick={() => handleEnter()} style={{color: "rgba(255,186,10,0.95)", fontSize: "15px", paddingRight: "5px", cursor: "pointer"}} />
                                                  <CircleIcon className={"menuButton"} onClick={() => handleEnter()} style={{color: "rgba(50,215,75,0.95)", fontSize: "15px", cursor: "pointer"}} />
                                              </Grid>
                                              <Grid item xs={9} sm={10} />
                                          </Grid>
                                      </Grid>
                                    <Grid item xs={12} >
                                      <Paper style={{padding: "2%"}}>
                                          <Grid container item direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                                            <Grid item xs={1} sm={1} style={{marginTop: "-3px"}}>
                                                <span style={{color: "gray", fontSize: "1.3em", fontWeight: "500",
                                                    fontFamily: "-apple-system, Roboto, serif"}}>>_ </span>
                                            </Grid>
                                            <Grid item xs={11} sm={11} className={"typewriter"} style={{textAlign: "start"}}>
                                                <p style={{color: "gray", fontSize: "1.0em"}} className={"line anim-typewriter"}
                                                >
                                                    I'm Aamir, welcome to my page :)
                                                </p>
                                            </Grid>
                                          </Grid>
                                      </Paper>
                                    </Grid>
                                    <Grid item xs={4} />
                                      <Grid item xs={4} />
                                    <Grid item xs={4} style={{textAlign: "end"}}>
                                      <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}
                                              size={"small"}
                                              style={{textTransform: "none", backgroundColor: "whitesmoke",
                                                  borderRadius: "4px", fontFamily: "-apple-system, Roboto, serif"}}
                                              className={`enter-button ${classes.enterButton}`}
                                              onClick={() => handleEnter()}>
                                        Enter
                                      </Button>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Backdrop
                              sx={{ color: '#252525', zIndex: "60" }}
                              open={openLoad}
                          >
                            <CircularProgress color="inherit" />
                          </Backdrop>
                        </Grid>
                    )
                }
                {
                    mainState && (
                        <BrowserRouter>
                          <PageContainer />
                        </BrowserRouter>
                    )
                }
              </Grid>
        </ThemeProvider>
      </StylesProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState.showMain,
  };
};

const mapDispatchToProps = {
  updateMainState,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
