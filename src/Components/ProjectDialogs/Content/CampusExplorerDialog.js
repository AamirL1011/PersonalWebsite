import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';


function CampusExplorerDialog() {

    return(<DialogContent dividers>
        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={11}>
                <img src={process.env.PUBLIC_URL + './Assets/Images/campusExplorer.png'} style={{maxWidth: "100%"}} alt={""} />
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Duration of Development:</strong></span> September 2019 to December 2019
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "5px"}}>
                    <span style={{color: "#baa982"}}><strong>Tools and Technologies Used:</strong></span>
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Backend:</strong></span> TypeScript, NodeJS, Restify, JSON data
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Testing:</strong></span> Mocha, Chai
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Project Type:</strong></span> Group Project (1 partner)
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Function:</strong></span> A tool to explore and search for
                    university courses based on certain query parameters. Supports data aggregation queries.
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#baa982"}}><strong>My Contributions:</strong></span>
                    <ul>
                        <li>Developed the backend for a web app (with a partner) in a series of four sprints to query and
                            display university metadata (building/rooms, course data).</li>
                        <li>Successfully implemented: a query engine (for data aggregation and retrieval), a JSON
                            dataset validation system, and a JSON query validation system (semantic and syntactic checking).</li>
                        <li>Incorporated Object Oriented (OO) and Test Driven Development (TDD) principles into the
                            design process.</li>
                        <li>Performed unit testing (white-box), integration (black-box), and end-to-end tests using
                            Mocha and Chai frameworks.</li>
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

export default CampusExplorerDialog;
