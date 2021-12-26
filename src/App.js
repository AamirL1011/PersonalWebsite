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


const useStyles = makeStyles((theme) => ({
  introContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    opacity: "100%"
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
                    <Grid style={{backgroundColor: "white", width: "100vw", height: "100vh"}}>
                      <Grid container justifyContent={"center"} alignItems={"center"}>
                        <video playsInline autoPlay muted loop>
                          <source src={process.env.PUBLIC_URL + "/Assets/Videos/video2.mp4"} type="video/mp4" />
                        </video>

                        <Grid container item xs={12} md={6} style={{zIndex: "50"}} justifyContent={"center"} alignItems={"center"}>
                          <Grid container item justify={"space-evenly"} alignItems={"center"} >
                            <Grid container item xs={12} justify={"center"} alignItems={"center"} style={{marginTop: "5%"}}>
                              <Grid item xs={3}>
                                <img src={process.env.PUBLIC_URL + "/Assets/Images/personal_logo3.png"} style={{width: "100%", height: "100%"}}/>
                              </Grid>
                            </Grid>
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
