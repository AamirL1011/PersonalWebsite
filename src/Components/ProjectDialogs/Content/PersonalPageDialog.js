import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from "@mui/material";

function PersonalPageDialog() {

    return(<DialogContent dividers>
        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={11}>
                <img src={process.env.PUBLIC_URL + './Assets/Images/myPage2.png'} style={{maxWidth: "100%"}}  alt={""} />
            </Grid>
            <Grid item xs={11}>
                <Typography variant={"h6"}>
                    <span style={{fontSize: "0.9em"}}>You are viewing this project right now!</span>
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Duration of Development:</strong></span> December 2021 to January 2022
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "5px"}}>
                    <span style={{color: "#baa982"}}><strong>Tools and Technologies Used:</strong></span>
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Backend:</strong></span> Cloudflare DNS, AWS (Route 53)
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Frontend:</strong></span> ReactJS, Redux, Material-UI
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Project Type:</strong></span> Personal Project (Individual)
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Function:</strong></span> A responsive personal portfolio site.
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#baa982"}}><strong>Implementation:</strong></span>
                    <ul>
                        <li>Designed custom logo and UI.</li>
                        <li>Utilized responsive design techniques.</li>
                        <li>Utilized Material-UI framework for styling.</li>
                    </ul>
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11}>
                <span style={{color: "#baa982"}}><strong>GitHub Repo:</strong></span>{' '}
                <IconButton
                    href={"https://github.com/AamirL1011/PersonalWebsite"}
                >
                    <GitHubIcon />
                </IconButton>
            </Grid>

        </Grid>
    </DialogContent>);
}

export default PersonalPageDialog;
