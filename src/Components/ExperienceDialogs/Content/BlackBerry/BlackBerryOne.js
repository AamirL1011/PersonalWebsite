import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Fade, Slide } from "react-awesome-reveal";




export default function BlackBerryOne(props) {

    const imgLink = process.env.PUBLIC_URL + './Assets/Images/blackberry_graphic.png';
    return(
        <Grid container alignItems={"center"} justifyContent={"center"} style={{backgroundColor: "rgb(255, 249, 235)"}}>
            <Grid item xs={11} style={{textAlign: "center"}}>
                <Slide triggerOnce={true} direction={"up"}>
                    <img src={imgLink} width="600px" height="350px" style={{maxWidth: "100%", borderRadius: "2px"}} alt={"..."} />
                </Slide>
            </Grid>
            <Grid item xs={11} style={{paddingTop: "10px"}}>
                    <Typography >
                        Tools & Technologies:
                    </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                    <Chip label="QNX Momentics" />
                    <Chip label="QNX RTOS" />
                    <Chip label="JIRA" />
                    <Chip label="VMware" />
                    <Chip label="C Language" />
                </Stack>
            </Grid>
            <Grid item xs={11} style={{ paddingTop: "10px"}}>
                    <Typography >
                        Skills:
                    </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }}
                       spacing={1}>
                    <Chip label="API integration" variant="outlined" />
                    <Chip label="Customer consultation" variant="outlined" />
                    <Chip label="Troubleshooting" variant="outlined" />
                    <Chip label="Root-cause analysis" variant="outlined" />
                    <Chip label="Open source licenses" variant="outlined" />
                </Stack>
            </Grid>
            <Grid item xs={11} style={{paddingTop: "10px"}}>
                <Fade triggerOnce={true}>
                    <Typography>
                    <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                        <a style={{color: "#9e5353"}} href="https://www.blackberry.com/">BlackBerry</a> is a software company that
                        specializes in enterprise security, offering solutions such as the <a style={{color: "#9e5353"}} href="https://en.wikipedia.org/wiki/Cylance">world's first</a> endpoint
                        security system to apply AI and Machine Learning for virus and malware detection.

                        My first ever internship was at BlackBerry's <a style={{color: "#9e5353"}} href="https://blackberry.qnx.com/">QNX division</a>,
                    which develops a secure Unix-like RTOS and hypervisor (virtual machine) for safety-critical
                        applications such as driverless vehicles, aviation, and medical devices.
                    </span>
                    </Typography>
                </Fade>
                <br/>
                <Fade triggerOnce={true}>
                    <Typography>
                    <span  style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                        My job was to assist customers with integrating the QNX operating system and virtual machines
                        onto their embedded hardware platforms, as well as providing assistance to customers with regards to
                        developing software specifically for the QNX OS (API integration and best practices). In
                        addition, I conducted troubleshooting activities such as kernel tracing, memory analysis, and
                        problem re-creation.  I also spent some time with QNX's legal department and helped them manually classify
                        unknown open source licences for machine learning model training. I later created a presentation
                        on open source licenses to my team discussing types of licenses and their
                        legal ramifications for the company.
                    </span>
                    </Typography>
                </Fade>
                <br/>
                <Fade triggerOnce={true}>
                    <Typography >
                    <span  style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                        Overall, I learned a lot about operating systems and computer architecture, and
                        I really enjoyed my time with the team!
                    </span>
                    </Typography>
                </Fade>
                <br/>
            </Grid>
        </Grid>
    )
}
