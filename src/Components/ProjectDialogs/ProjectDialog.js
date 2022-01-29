import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {useEffect, useState} from "react";
import {updateProjectDialogState} from "../../Actions/mainActions";
import {connect} from "react-redux";
import WeChatterDialog from "./Content/WeChatterDialog";


/*const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});*/

function ProjectDialog(props) {
    const {dialogType, showProjectDialog} = props;

    const [content, setContent] = useState(<WeChatterDialog/>);
    const [title, setTitle] = useState("");

    const handleClose = () => {
        const {updateProjectDialogState} = props;
        updateProjectDialogState(false);
    };

    useEffect(() => {
        switch (dialogType) {
            case "wechatter": {
                setContent(<WeChatterDialog />);
                setTitle("WeChatter Video Chat App (beta)")
                break;
            }
            case "dogether": {
                break;
            }
            case "campus": {
                break;
            }
            case "personal": {
                break;
            }
            case "database": {
                break;
            }
            case "bus": {
                break;
            }
            case "smtp": {
                break;
            }
            case "dns": {
                break;
            }
            default: {
                break;
            }
        }
    }, [dialogType, showProjectDialog])



    return(

        <Dialog open={showProjectDialog}
                onClose={handleClose}
        >
            <DialogTitle >
                {title}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            {content}
    </Dialog>)

}

const mapStateToProps = (state) => {
    return {
        showProjectDialog: state.appState.showProjectDialog,
        dialogType: state.appState.projectDialogType,
    };
};

const mapDispatchToProps = {
    updateProjectDialogState,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDialog);
