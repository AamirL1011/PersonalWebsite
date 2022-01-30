import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';


function BusTransitDialog() {

    return(<DialogContent dividers>
        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={11}>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Duration of Development:</strong></span> July 2017 to August 2017
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "5px"}}>
                    <span style={{color: "#baa982"}}><strong>Tools and Technologies Used:</strong></span>
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Backend:</strong></span> Java
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Other:</strong></span> Genymotion, JUnit, Android Studio
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Project Type:</strong></span> Individual
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Function:</strong></span> A mobile Android app that displays
                    the bus stops nearest to the user, while providing a visual illustration of the bus routes and
                    arrival times for a user-selected stop.
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#baa982"}}><strong>My Contributions:</strong></span>
                    <ul>
                        <li>Responsible for the completion of the backend (and some minor frontend components) of a
                            skeleton mobile Android app.</li>
                        <li>Used Test Driven Development (TDD) and Object Oriented (OO) programming techniques.</li>
                        <li>Created a JSON parser which organizes route and arrival data provided from a Translink
                            (Metro-Vancouver Transit Authority) API.</li>
                        <li>Conducted tests and debugging using JUnit.</li>
                    </ul>
                </Typography>
                <br/>
            </Grid>

        </Grid>
    </DialogContent>);
}

export default BusTransitDialog;
