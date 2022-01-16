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
                           Software Developer (Part Time)
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
                        <Chip label="SMART on FHIR" />
                        <Chip label="EMR Simulator" />
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
                        <Chip label="FHIR Health Data" variant="outlined" />
                        <Chip label="System Architecture" variant="outlined" />
                        <Chip label="Data Visualization" variant="outlined" />
                        <Chip label="Infrastructure As Code" variant="outlined" />
                        <Chip label="Cloud Deployment Troubleshooting" variant="outlined" />
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
                        projects. All projects are published as <a style={{color: "#9e5353"}} href={"https://cic.ubc.ca/projects/"}>open source</a>. Overall, it was a great experience and
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
                        While continuing with the CIC on a part time basis, I worked directly with key stakeholders to
                        architect, design, and develop a prototype clinical decision support application that leverages the
                        SMART on FHIR framework to interface with the newly implemented Electronic Medical Record (EMR) system at local
                        hospitals. This was an exploratory exercise for the physicians involved to see what could be possible
                        for future decision support applications. Since the neither the stakeholders nor the CIC have
                        worked with EMRs in the past, this was new territory and required a lot of research and
                        troubleshooting on my part.
                    </span>
                        <br/>
                        <br/>
                    </Typography>
                    <Typography >
                        <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                            The application utilizes the Fast Healthcare Interoperability Resources (FHIR)
                        data standard and queries patient data (FHIR format) from the EMR. The data then gets filtered,
                            classified and is then displayed visually on the dashboard as either a chart or an alert. More specifically,
                            this application was designed to be used when a physician is prescribing antibiotics, so that
                            they can easily look up the patient's vital data, lab results, allergies,
                            and previously prescribed antibiotics in a format that is more intuitive.
                        </span>
                        <br/>
                        <br/>
                    </Typography>
                </Fade>
                <Fade triggerOnce={true}>
                    <Typography variant={"h6"}>
                       <span style={{fontFamily: "Inter", fontWeight: 500, fontSize: "0.9em"}}>
                           Challenges
                       </span>
                    </Typography>
                    <br/>
                    <Typography>
                        <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                            Beyond learning how to interface with EMRs and how to handle/read/query FHIR data, one of
                            major challenges was how to filter an antibiotic from the rest of the prescriptions. The
                            prescription data is sometimes even written in abbreviations or short form which makes
                            filtering a challenge. Sometimes but not always, prescriptions are accompanied with an
                            RxNorm code that identifies the name and dosage of the medication as per US National Library
                            of Medicine. Additionally, there are many alternative names for different
                            antibiotics.
                        </span>
                        <br/>
                        <br/>
                        <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                            With the current version of the FHIR standard (R4), there is no way
                            to distinguish or manually classify a certain prescription as an antibiotic without
                            medical experience. After brainstorming with the stakeholders and a couple failed solutions,
                            I stumbled across the AWS Comprehend Medical Machine Learning service as a possible solution. More
                            specifically, the RxNorm functionality provided by the service would help identify abbreviated
                            prescriptions by identifying the full name of the medication and a corresponding RxNorm code.
                            Next, after a lot of research and testing of third party medical APIs, I was finally able
                            to come up with a process (shown below) to identify if a medication is an antibiotic.
                        </span>
                    </Typography>
                </Fade>
                <br/>
                <br/>
            </Grid>
            <Grid container direction={"row"} item xs={11} style={{paddingTop: "10px", textAlign: "center"}}>
                <Grid item xs={12} md={12}>
                    <img src={process.env.PUBLIC_URL + "/Assets/Images/medicationClassificationFlow.png"} style={{width: "500px", maxWidth: "100%"}} alt={"..."} />
                </Grid>
                <Grid item xs={12} md={12}>
                    <img src={process.env.PUBLIC_URL + "/Assets/Images/fhir_app.png"} style={{width: "450px", maxWidth: "100%"}} alt="..."/>
                </Grid>
            </Grid>
            <Grid item xs={11} style={{paddingTop: "10px"}}>
                <Typography variant={"h6"}>
                       <span style={{fontFamily: "Inter", fontWeight: 500, fontSize: "0.9em"}}>
                           Other Considerations
                       </span>
                </Typography>
                <br/>
                <Typography>
                        <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                            Each EMR vendor has specific requirements for applications they will allow to
                            interface with their systems. Such requirements may even encompass the look and feel of
                            the UI. To that end, we ended up using Cerner's (EMR vendor) UI framework to build out the
                            dashboard, while also following the same color scheme as the native EMR system to ensure a
                            seamless user experience.
                        </span>
                    <br/>
                    <br/>
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} style={{textAlign: "center"}}>
                <img src={process.env.PUBLIC_URL + "/Assets/Images/fhir_app2.png"} style={{width: "450px", maxWidth: "100%"}} alt="..."/>
            </Grid>
            <Grid item xs={11} style={{paddingTop: "10px"}}>
                <br/>
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
                <img src={process.env.PUBLIC_URL + "/Assets/Images/text_app.png"} style={{maxWidth: "400px"}} alt="..."/>
                <br/>
                <br/>
            </Grid>
        </Grid>
    )
}
