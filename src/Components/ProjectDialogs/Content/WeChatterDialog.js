import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from "@mui/material";

function WeChatterDialog() {

    return(<DialogContent dividers>
        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={11}>
            <img src={process.env.PUBLIC_URL + './Assets/Images/wechatter_app3.png'} style={{maxWidth: "100%"}}  alt={""} />
            </Grid>
            <Grid item xs={11}>
                <Typography variant={"h6"}>
                    <span style={{fontSize: "0.9em"}}>Click <a style={{color: "#9e5353"}} href="https://wechatter-client-lgkjuzpj3a-uc.a.run.app/">here</a> to explore the live demo (beta) site deployed on Google Cloud Platform via Cloud Run and Docker!</span>
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Duration of Development:</strong></span> January 2022 to Present
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "5px"}}>
                    <span style={{color: "#baa982"}}><strong>Tools and Technologies Used:</strong></span>
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Backend:</strong></span> Google Cloud Platform (Cloud Run), NodeJS, Express, Socket.IO (websocket), Docker, Nginx
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Frontend:</strong></span> React, Redux, Material-UI, SimplePeer (WebRTC), Socket.IO (websocket)
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Other:</strong></span> Terraform
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
                    <span style={{color: "#baa982"}}><strong>Function:</strong></span> A video conferencing app to conduct video meetings with friends or family.
                    Currently, support is only provided for two participants at a time. Multi-user and other functionality will be added in the future.
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#baa982"}}><strong>Implementation:</strong></span> The frontend pings the Express server to create a socket connection.
                    With the socket ID ("Meeting ID"), users can share this ID to their friends so that they can call them and start a video meeting. With this socket ID and signal data from WebRTC,
                    a WebRTC based P2P connection between the two users can be established for 2-way video streaming.
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11}>
                <span style={{color: "#baa982"}}><strong>GitHub Repo:</strong></span>{' '}
                <IconButton
                href={"https://github.com/AamirL1011/WeChatter"}
            >
                <GitHubIcon />
            </IconButton>
            </Grid>

        </Grid>
    </DialogContent>);
}

export default WeChatterDialog;

