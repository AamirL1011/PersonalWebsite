import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardMedia} from "@material-ui/core";
import {updateWorkDialogState} from "../../Actions/mainActions";
import {connect} from "react-redux";



const TimeButton = styled(ButtonBase)(({ theme }) => ({
    '&:hover, &.Mui-focusVisible': {
        transform: "translateX(2px)",
    },
}));



function TimelineButton(props) {
    const {job, title, imagePath, updateWorkDialogState} = props;

    return (
        <Box>
            <TimeButton
                    focusRipple={true}
                    key={job}
                    onClick={() => updateWorkDialogState(true)}
            >
                    <Card style={{display: 'flex', backgroundColor: "rgba(235, 215, 171, 1.00)"}} elevation={1}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                style={{ width: 50, height: "100%", maxHeight: 150 }}
                                image={process.env.PUBLIC_URL + "/Assets/Images/" + imagePath}
                                alt="..."
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent style={{padding: "5px"}}>
                                <Typography variant="h6" style={{fontSize: "1.0em"}} component="span">
                                    {job}
                                </Typography>
                                <Typography style={{fontSize: "0.9em"}}>
                                    {title}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </TimeButton>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        showWorkDialog: state.appState.showWorkDialog,
    };
};

const mapDispatchToProps = {
    updateWorkDialogState,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimelineButton);
