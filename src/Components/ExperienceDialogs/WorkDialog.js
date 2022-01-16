import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {updateWorkDialogState} from "../../Actions/mainActions";
import {connect} from "react-redux";
import BlackBerryOne from "./Content/BlackBerry/BlackBerryOne";
import BlackBerryTwo from "./Content/BlackBerry/BlackBerryTwo";
import CICOne from "./Content/CIC/CICOne";
import CICTwo from "./Content/CIC/CICTwo";
import {useEffect, useState} from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function WorkDialog(props) {
    const { showWorkDialog, dialogType } = props;

    const [job, setJob] = useState("Experience");
    const [content, setContent] = useState(<BlackBerryOne />);


    useEffect(() => {
        switch (dialogType) {
            case "September 2018 - April 2019": {
                setContent(<BlackBerryOne />);
                setJob("BlackBerry QNX");
                break;
            }
            case "May 2019 - August 2019": {
                setContent(<BlackBerryTwo />);
                setJob("BlackBerry QNX");
                break;
            }
            case "September 2020 - December 2020": {
                setContent(<CICOne />);
                setJob("UBC-AWS Cloud Innovation Centre");
                break;
            }
            case "January 2021 - August 2021": {
                setContent(<CICTwo />);
                setJob("UBC-AWS Cloud Innovation Centre");
                break;
            }
            default: {
                break;
            }
        }
    }, [dialogType, showWorkDialog]);


    const handleClose = () => {
        const {updateWorkDialogState} = props;
        updateWorkDialogState(false);
    };

    return (
            <Dialog
                fullScreen
                open={showWorkDialog}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'fixed', backgroundColor: "rgba(227, 207, 161, 0.9)", backdropFilter: "blur(8px)" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon style={{color: "rgba(0, 0, 0, 0.7)"}} />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            <span style={{fontFamily: "Inter", fontWeight: "500", color: "rgba(0, 0, 0, 0.7)"}}>{job}</span>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br/>
                <br/>
                <br/>
                <br/>
                {content}
            </Dialog>
    );
}

const mapStateToProps = (state) => {
    return {
        showWorkDialog: state.appState.showWorkDialog,
        dialogType: state.appState.workDialogType,
    };
};

const mapDispatchToProps = {
    updateWorkDialogState,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkDialog);
