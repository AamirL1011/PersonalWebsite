import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';


function SMTPDialog() {

    return(<DialogContent dividers>
        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={11}>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Duration of Development:</strong></span> October 2021
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
                    <span style={{color: "#baa982"}}><strong>Function:</strong></span> A recursive DNS resolver that takes a
                    domain name as input and returns the associated IP address if one exists.
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#baa982"}}><strong>My Contributions:</strong></span>
                    <ul>
                        <li>Implemented the name server querying process recursively.</li>
                        <li>Parsed the responses from name servers to proceed with additional queries or return the IP
                            if one exists. </li>
                    </ul>
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11}>
                <span style={{color: "#baa982"}}><strong>GitHub Repo:</strong></span>{' '}
                Please contact me on <a style={{color: "#9e5353"}} href="https://www.linkedin.com/in/aamir-s/">LinkedIn</a> for repo access.
            </Grid>
        </Grid>
    </DialogContent>);
}

export default SMTPDialog;
