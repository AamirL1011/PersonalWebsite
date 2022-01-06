import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineButton from "../TimelineButton/TimelineButton";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import React from "react";


function CustomizedTimeline(props) {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography variant={"body2"}>September 2018 - April 2019</Typography>
                    <Typography variant={"body2"}>(8 months)</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{backgroundColor: "#9e5353"}}>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <TimelineButton
                        job={"BlackBerry QNX"}
                        title={"Software Integration Intern"}
                        date={"September 2018 - April 2019"}
                        imagePath={"bbryLogo.jpeg"}
                    />
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography variant={"body2"}>May 2019 - August 2019</Typography>
                    <Typography variant={"body2"}>(4 months)</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator style={{color:"#53859e"}}>
                    <TimelineConnector />
                    <TimelineDot color="inherit" variant="outlined">
                        <LaptopMacIcon style={{color: "black"}} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <TimelineButton
                        job={"BlackBerry QNX"}
                        title={"Software Testing Intern"}
                        date={"May 2019 - August 2019"}
                        imagePath={"bbryLogo.jpeg"}
                    />
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography variant={"body2"}>September 2020 - December 2020</Typography>
                    <Typography variant={"body2"}>(4 months)</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{backgroundColor: "#9e5353"}}>
                        <FilterDramaIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <TimelineButton
                        job={"UBC-AWS Cloud Innovation Centre"}
                        title={"Software Developer Intern"}
                        date={"September 2020 - December 2020"}
                        imagePath={"ubcAws2.png"}
                    />
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography variant={"body2"}>January 2021 - August 2021</Typography>
                    <Typography variant={"body2"}>(8 months)</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator style={{color:"#53859e"}}>
                    <TimelineConnector />
                    <TimelineDot color="inherit" variant="outlined">
                        <FilterDramaIcon style={{color: "black"}} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <TimelineButton
                        job={"UBC-AWS Cloud Innovation Centre"}
                        title={"Software Developer (part time)"}
                        date={"January 2021 - August 2021"}
                        imagePath={"ubcAws2.png"}
                    />
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}


export default CustomizedTimeline;
