import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


export default function BlackBerryOne(props) {

    return(
        <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={11} style={{textAlign: "center"}}>
                <img src={process.env.PUBLIC_URL + './Assets/Images/blackberry.jpg'} width="430px" height="270px" style={{maxWidth: "100%", borderRadius: "10px"}} alt={"..."} />
            </Grid>
            <Grid item xs={11} style={{paddingTop: "10px"}}>
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
                <br/>
                <Typography>
                    <span  style={{fontFamily: "Inter", fontWeight: 300, fontSize: "1.1em"}}>
                        My job was to assist customers with integrating the QNX operating system and virtual machines
                        onto their hardware platforms, as well as providing assistance to customers with regards to
                        developing software specifically for the QNX OS. I learned a lot about operating systems and
                        computer architecture, and I really enjoyed my time with the team.
                    </span>
                </Typography>
            </Grid>
        </Grid>
    )
}
