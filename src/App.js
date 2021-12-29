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
              <Grid>
                {
                    !mainState && (
                        <Grid container justifyContent={"center"} alignItems={"center"} style={{backgroundColor: "lightgray", width: "100vw", height: "100vh"}}>
                          <video playsInline autoPlay muted loop>
                            <source src={process.env.PUBLIC_URL + "/Assets/Videos/video.mp4"} type="video/mp4" />
                          </video>

                          <Grid container item xs={11} md={5} lg={2} xl={1} style={{zIndex: "50"}} justifyContent={"center"} alignItems={"center"}>
                            <Grid container item justifyContent={"center"} alignItems={"center"} >
                              <Grid container item>
                                <Box sx={{ flexGrow: 1, zIndex: "55", marginBottom: "-5%"}}>
                                  <Grid container spacing={1} justifyContent={"center"} alignItems={"center"}>
                                    <Grid item xs={4}>
                                      <Paper style={{background: "rgba(158, 155, 147, 0.9)", padding: "5%", paddingBottom: "3%", textAlign: "center"}} alignItems={"center"} justifyContent={"center"} elevation={4}>
                                        <img src={process.env.PUBLIC_URL + "/Assets/Images/personal_logo3.png"} style={{width: "100%", height: "100%"}}/>
                                      </Paper>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>

                              <Grid container item className="GreetingBox">
                                <Box sx={{ flexGrow: 1, background: "rgba(227, 207, 161, 0.9)", padding: "5%", borderRadius: "10px", boxShadow: "0px 0.5px 1px grey" }}>
                                  <Grid container spacing={2} className={""}>
                                    <Grid item xs={12}></Grid>
                                    <Grid item xs={12}></Grid>
                                    <Grid item xs={12} className={"typewriter"}>
                                      <Paper style={{padding: "2%"}}>
                                        <p style={{color: "gray", fontSize: "1.0em"}} className={"line anim-typewriter"}
                                        >
                                          I'm Aamir, welcome to my page :)
                                        </p>
                                      </Paper>
                                    </Grid>
                                    <Grid item xs={4} />
                                    <Grid item xs={4} alignItems={"center"} justifyContent={"center"} style={{textAlign: "center"}}>
                                      <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}
                                              style={{textTransform: "none"}}
                                              className={`enter-button ${classes.enterButton}`}
                                              onClick={() => handleEnter()}>
                                        Enter
                                      </Button>
                                    </Grid>
                                    <Grid item xs={4} />
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
