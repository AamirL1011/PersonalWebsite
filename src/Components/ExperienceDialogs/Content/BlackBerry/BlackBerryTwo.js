import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Fade, Slide } from "react-awesome-reveal";




export default function BlackBerryTwo(props) {

    const imgLink = process.env.PUBLIC_URL + './Assets/Images/blackberry_graphic.png';
    return(
        <Grid container alignItems={"center"} justifyContent={"center"} style={{backgroundColor: "rgb(255, 249, 235)"}}>
            <Grid item xs={11} style={{textAlign: "center"}}>
                <Slide triggerOnce={true} direction={"up"}>
                    <img src={imgLink} width="400px" height="350px" style={{maxWidth: "100%", borderRadius: "2px"}} alt={"..."} />
                </Slide>
            </Grid>
            <Grid item xs={11} style={{textAlign: "left"}}>
                <Fade triggerOnce={true}>
                    <Typography variant={"h5"}>
                        <span style={{fontFamily: "Inter", fontWeight: 500, fontSize: "1.0em"}}>
                           Core OS - Software Testing Intern
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
                        <Chip label="QNX Hypervisor" />
                        <Chip label="PyTest" />
                        <Chip label="Python" />
                        <Chip label="JIRA" />
                        <Chip label="Linux" />
                        <Chip label="Embedded Systems" />
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
                        <Chip label="Test Automation" variant="outlined" />
                        <Chip label="Bash Scripting" variant="outlined" />
                        <Chip label="Benchmark Testing" variant="outlined" />
                        <Chip label="Documentation Creation" variant="outlined" />
                        <Chip label="Agile Methodologies" variant="outlined" />
                    </Stack>
                </Fade>
            </Grid>
            <Grid item xs={11} style={{paddingTop: "10px"}}>
                <Fade triggerOnce={true}>
                    <Typography>
                    <span style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                        <a style={{color: "#9e5353"}} href="https://www.blackberry.com/">BlackBerry</a> is a software company that
                        specializes in enterprise security, offering solutions such as the <a style={{color: "#9e5353"}} href="https://en.wikipedia.org/wiki/Cylance">world's first</a> endpoint
                        security system to apply AI and Machine Learning for virus and malware detection.

                        My second internship was also at BlackBerry's <a style={{color: "#9e5353"}} href="https://blackberry.qnx.com/">QNX division</a>,
                    which develops a secure Unix-like RTOS and hypervisor (virtual machine) for safety-critical
                        applications such as driverless vehicles, aviation, and medical devices.
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
                        As part of the Core OS Test team, my job was to create automated stress tests for QNX's
                        Hypervisor (virtual machine) that were compatible with multiple hardware platforms.
                        These tests used to be performed manually. Additionally, I ran performance benchmarks on new
                        Hypervisor builds and documented performance comparisons against older builds to find potential
                        areas of defficiency. Overall, it was a great learning experience diving into an OS and learning
                        more about virtual machine implementation!
                    </span>
                    </Typography>
                </Fade>
                <br/>
            </Grid>
        </Grid>
    )
}
