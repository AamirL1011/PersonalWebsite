import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from "@mui/material";

function DatabaseAdminDialog() {

    return(<DialogContent dividers>
        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={11}>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Duration of Development:</strong></span> March 2020 to April 2020
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "5px"}}>
                    <span style={{color: "#baa982"}}><strong>Tools and Technologies Used:</strong></span>
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Backend:</strong></span> MySQL, Apache Server
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Frontend:</strong></span> PHP, HTML, CSS
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Project Type:</strong></span> Group Project (2 partners)
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Function:</strong></span> A web interface for managing
                    users/data of a database and displaying data.
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#baa982"}}><strong>My Contributions:</strong></span>
                    <ul>
                        <li>Responsible for the frontend design and layout, logo, database normalization (BCNF) to
                            reduce redundancy, and some SQL queries.</li>
                        <li>Contributed to the database schema design.</li>
                    </ul>
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11}>
                <span style={{color: "#baa982"}}><strong>GitHub Repo:</strong></span>{' '}
                <IconButton
                    href={"https://github.com/AlanSPAGHETTI/CPSC_304_WINE_PAGES"}
                >
                    <GitHubIcon />
                </IconButton>
            </Grid>

        </Grid>
    </DialogContent>);
}

export default DatabaseAdminDialog;
