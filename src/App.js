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


const useStyles = makeStyles((theme) => ({
  introContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    opacity: "100% !important"
  }
}));


function App(props) {
  const {appState, updateMainState} = props;
  const classes = useStyles();
  const [mainState, updateMainAppState] = useState(appState);


  useEffect(() => {
    updateMainState(mainState);
  }, [mainState]);



  return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Grid>
            {
                !mainState && (
                      <Grid container justifyContent={"center"} alignItems={"center"} style={{backgroundColor: "white", width: "100vw", height: "100vh"}}>
                        <video playsInline autoPlay muted loop>
                          <source src={process.env.PUBLIC_URL + "/Assets/Videos/video2.mp4"} type="video/mp4" />
                        </video>

                        <Grid container item xs={12} md={6} style={{zIndex: "50"}} justifyContent={"center"} alignItems={"center"}>
                          <Grid container item justifyContent={"center"} alignItems={"center"} >
                            <Grid container item className="GreetingBox">
                              <Box sx={{ flexGrow: 1, background: "rgba(158, 155, 147, 0.8)", padding: "5%", borderRadius: "10px" }}>
                                <Grid container spacing={2} className={""}>
                                  <Grid item xs={4}/>
                                  <Grid item xs={4}>
                                    <Paper style={{background: "rgba(245, 228, 181, 0.8)", padding: "10px", textAlign: "center"}} alignItems={"center"} justifyContent={"center"}>
                                      <img src={process.env.PUBLIC_URL + "/Assets/Images/personal_logo3.png"} style={{width: "90%", height: "90%"}}/>
                                    </Paper>
                                  </Grid>
                                  <Grid item xs={4}/>
                                  <Grid item xs={12} className={"typewriter"}>
                                    <Paper>
                                      <p className={"line anim-typewriter"}
                                      >
                                        Welcome!
                                      </p>
                                    </Paper>
                                  </Grid>
                                  <Grid item xs={4} />
                                  <Grid item xs={4} alignItems={"center"} justifyContent={"center"} style={{textAlign: "center"}}>
                                    <Button>
                                      Enter
                                    </Button>
                                  </Grid>
                                  <Grid item xs={4} />
                                </Grid>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>

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
