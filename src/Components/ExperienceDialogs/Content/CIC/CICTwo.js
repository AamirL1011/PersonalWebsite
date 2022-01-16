import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Fade, Slide } from "react-awesome-reveal";



export default function CICTwo(props) {

    const imgLink = process.env.PUBLIC_URL + './Assets/Images/cic_logo_2020.png';
    return(
        <Grid container alignItems={"center"} justifyContent={"center"} style={{backgroundColor: "rgb(255, 249, 235)"}}>
            <Grid item xs={11} style={{textAlign: "center"}}>
                <Slide triggerOnce={true} direction={"up"}>
                    <img src={imgLink} width="800px" height="100px" style={{maxWidth: "100%", borderRadius: "2px"}} alt={"..."} />
                </Slide>
            </Grid>
            <Grid item xs={11} style={{textAlign: "left"}}>
                <Fade triggerOnce={true}>
                    <Typography variant={"h5"}>
                        <span style={{fontFamily: "Inter", fontWeight: 500, fontSize: "1.0em"}}>
                           Software Developer Intern
                       </span>
                    </Typography>
                </Fade>
            </Grid>
            <Grid item xs={11} style={{paddingTop: "10px"}}>
                <Fade triggerOnce={true}>
                    <Typography >
                        Tools & Technologies:
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                        <Chip label="AWS" />
                        <Chip label="React" />
                        <Chip label="Git" />
                        <Chip label="JavaScript" />
                        <Chip label="Figma" />
                    </Stack>
                </Fade>
            </Grid>
            <Grid item xs={11} style={{ paddingTop: "10px"}}>
                <Fade triggerOnce={true}>
                    <Typography >
                        Skills:
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }}
                           spacing={1}>
                        <Chip label="Full Stack Development" variant="outlined" />
                        <Chip label="Serverless" variant="outlined" />
                        <Chip label="API Integration" variant="outlined" />
                        <Chip label="Microservices" variant="outlined" />
                        <Chip label="Data Processing" variant="outlined" />
                    </Stack>
                </Fade>
            </Grid>
            <Grid item xs={11} style={{paddingTop: "10px"}}>
                <Fade triggerOnce={true}>
                    <Typography>
                    <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                        The <a style={{color: "#9e5353"}} href="https://cic.ubc.ca/">UBC-AWS Cloud Innovation Centre</a> (CIC) is an
                        organization jointly run
                        by <a style={{color: "#9e5353"}} href="https://aws.amazon.com/government-education/cloud-innovation-centers/">Amazon</a> and
                        the <a style={{color: "#9e5353"}} href="https://www.ubc.ca/">University of British Columbia</a> with
                        the goal of creating novel cloud-native software solutions to address public sector pain points. I
                        had the opportunity to work with both team members from UBC and engineers from Amazon on various
                        projects. All projects are published as open source. Overall, it was a great experience and
                        I learned a lot!
                    </span>
                    </Typography>
                </Fade>
                <br/>
                <Fade triggerOnce={true}>
                    <Typography variant={"h6"}>
                       <span style={{fontFamily: "Inter", fontWeight: 500, fontSize: "1.1em"}}>
                           My Role
                       </span>
                    </Typography>
                    <br/>
                    <Typography>
                    <span  style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                        During my time at the CIC, I worked on two healthcare related software solutions. During my internship,
                        I worked on a prototype near real-time health monitoring platform for senior care homes which
                        ingests sensor data (location and heart rate) from wearables and informs a central dashboard
                        with an alert if any anomalies are found (no page refreshing required). I was responsible for
                        developing the data schema for the entire project (leveraging GraphQL and DynamoDB), the frontend dashboard, and most of the backend data processing.
                    </span>
                        <br/>
                        <br/>
                    </Typography>
                        <Typography variant={"h6"}>
                       <span style={{fontFamily: "Inter", fontWeight: 500, fontSize: "0.9em"}}>
                           Platform Frontend
                       </span>
                        </Typography>
                    <Typography>
                        <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                            As the customer planned on developing their own custom UI for their dashboard,
                            we took an off-the-shelf React theme template and adapted it to accelerate the
                            development timeline. I developed the business logic and backend integrations for the
                            dashboard, as well as integrating Google Maps API to allow real-time tracking of patients
                            that are displayed on maps. The dashboard also featured wearable device management, user
                            management, geofence creation (for location breach alerts), and vital data visualization.
                        </span>
                    </Typography>
                </Fade>
                <br/>
                <br/>
            </Grid>
            <Grid container direction={"row"} item xs={11} style={{paddingTop: "10px", textAlign: "center"}}>
                <Grid item xs={12} md={6}>
                    <img src={process.env.PUBLIC_URL + "/Assets/Images/mhmp1.png"} style={{maxWidth: "400px"}} alt={"..."} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={process.env.PUBLIC_URL + "/Assets/Images/mhmp2.png"} style={{maxWidth: "400px"}} alt="..."/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <img src={process.env.PUBLIC_URL + "/Assets/Images/mhmp3.png"} style={{maxWidth: "400px"}} alt="..."/>
                </Grid>
            </Grid>
            <Grid item xs={11} style={{paddingTop: "10px"}}>
                <Typography variant={"h6"}>
                       <span style={{fontFamily: "Inter", fontWeight: 500, fontSize: "0.9em"}}>
                           Platform Backend
                       </span>
                </Typography>
                <br/>
                <Typography>
                        <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                            For the backend, we took a serverless microservices approach. As data is ingested from the
                            wearables it is passed into the AWS Kinesis Data Stream, which then triggers
                            AWS Lambda functions (microservices) to process the incoming data. We also set up a Data Lake in S3 to
                            dump data for later data mining. Along with creating the project data schema which leveraged
                            the GraphQL protocol and used AWS DynamoDB (NoSQL) for data storage, I implemented a few
                            Lambda functions that perform a number of operations.
                        </span>
                    <br/>
                    <br/>
                         <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                            One service processes the incoming data, updates the patient's current vital data and
                        status in DynamoDB, and generates gps location anomaly alerts if necessary. A second service I
                             implemented is spun up periodically every five minutes to query each patient's hear rate
                             data to check if an anomaly is present. We purposely took a naive approach to this as a
                             developing a vital sign anomaly detection algorithm is out of scope and best left for
                             medical experts. We included it only for example purposes, and end users must replace the
                             algorithm. Finally, I implemented a service that checks for device activity to ensure all
                             wearable devices are functioning and active as expected.
                        </span>
                </Typography>
                <br/>
            </Grid>
            <Grid item xs={11} style={{paddingTop: "10px"}}>
                <Typography variant={"h6"}>
                       <span style={{fontFamily: "Inter", fontWeight: 500, fontSize: "0.9em"}}>
                           Other Work
                       </span>
                </Typography>
                <Typography>
                        <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                            During my internship, I also designed and developed a responsive
                            React login page template from scratch which integrated AWS Cognito APIs for user authentication
                            management. This login template was integrated into most CIC frontend projects in
                            development. It included features such as the ability to easily switch between either a video,
                            image, or static colour background, a light/dark theme setting, along with the ability to
                            specify a different theme color.
                        </span>
                    <br/>
                    <br/>
                </Typography>
            </Grid>
            <Grid item xs={11} style={{textAlign: "center"}}>
                <img src={process.env.PUBLIC_URL + "/Assets/Images/cic_login.png"} style={{maxWidth: "400px"}} alt="..."/>
                <br/>
                <br/>
            </Grid>
        </Grid>
    )
}
