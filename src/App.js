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
  videoBox: {
    justifyContent: "center",
    alignItems: "center",
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
                    <Grid>
                      <Grid container direction={"row"} spacing={1} style={{width: "100vw", height: "100vh"}}>
                        <video playsInline autoPlay muted loop>
                          <source src={process.env.PUBLIC_URL + "/Assets/Videos/video2.mp4"} type="video/mp4" />
                        </video>
                        {/*<Grid item xs={1}>
                          <Grid container direction={"column"} alignItems="center" justify={"center"}>
                            <Grid item>
                              Hello World
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={23}>
                          <Grid container direction={"column"} alignItems="center" justify="center">

                          </Grid>

                        </Grid>*/}
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
