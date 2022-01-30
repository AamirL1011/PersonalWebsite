import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from "@mui/material";

function DoGetherDialog() {

    return(<DialogContent dividers>
        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={11}>
                <img src={process.env.PUBLIC_URL + './Assets/Images/mangodb3.png'} style={{maxWidth: "100%"}}  alt={""}  />
            </Grid>
            <Grid item xs={11}>
                <Typography variant={"h6"}>
                    <span style={{fontSize: "0.9em"}}>Click <a style={{color: "#9e5353"}} href="https://dogetherapp.herokuapp.com/">here</a> to explore the live demo site deployed on Heroku!</span>
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Duration of Development:</strong></span> May 2020 to August 2020
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "5px"}}>
                    <span style={{color: "#baa982"}}><strong>Tools and Technologies Used:</strong></span>
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Backend:</strong></span> NodeJS, Express, Heroku, MongoDB, AWS (S3, Cloudfront)
                </Typography>
                <Typography variant={"body2"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#53859e"}}><strong>Frontend:</strong></span> ReactJS, JavaScript, Redux, Bootstrap, ESLint
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Project Type:</strong></span> Group Project (4 members)
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"}>
                    <span style={{color: "#baa982"}}><strong>Function:</strong></span> A social task management app that allows users to share their tasks publicly on a twitter-like feed. Users are able
                    to earn and award mango points to other users to cheer them on. Users can also follow other users, and buy special badges in the store.
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{textAlign: "start"}}>
                <Typography variant={"body1"} style={{paddingBottom: "3px"}}>
                    <span style={{color: "#baa982"}}><strong>My Contributions:</strong></span>
                    <ul>
                        <li>Implemented the front-end ReactJS components for the twitter-like feed, a store to redeem points,
                            social interaction features, and user profile page components.</li>
                        <li>Created RESTful API routes in an Express back-end that queries or updates user data in a MongoDB Atlas cloud database.</li>
                        <li>Integrated cloud-based AWS S3 data uploading and CloudFront CDN static asset delivery for increased scalability and performance.</li>
                        <li>Designed custom logo and login page animation.</li>
                    </ul>
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11}>
                <span style={{color: "#baa982"}}><strong>GitHub Repo:</strong></span>{' '}
                <IconButton
                    href={"https://github.com/MS642/MangoDB"}
                >
                    <GitHubIcon />
                </IconButton>
            </Grid>

        </Grid>
    </DialogContent>);
}

export default DoGetherDialog;
