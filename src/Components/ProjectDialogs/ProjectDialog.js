import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import {updateProjectDialogState} from "../../Actions/mainActions";
import {connect} from "react-redux";
import WeChatterDialog from "./Content/WeChatterDialog";
import DoGetherDialog from "./Content/DoGetherDialog";
import PersonalPageDialog from "./Content/PersonalPageDialog";
import CampusExplorerDialog from "./Content/CampusExplorerDialog";
import DatabaseAdminDialog from "./Content/DatabaseAdminDialog";
import BusTransitDialog from "./Content/BusTransitDialog";
import SMTPDialog from "./Content/SMTPDialog";
import DNSDialog from "./Content/DNSDialog";

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
                setTitle("WeChatter Video Chat App (beta)");
                break;
            }
            case "dogether": {
                setContent(<DoGetherDialog />);
                setTitle("DoGether Social Todo App");
                break;
            }
            case "campus": {
                setContent(<CampusExplorerDialog />);
                setTitle("Campus Course Explorer App");
                break;
            }
            case "personal": {
                setContent(<PersonalPageDialog />);
                setTitle("Personal Portfolio Site");
                break;
            }
            case "database": {
                setContent(<DatabaseAdminDialog />);
                setTitle("SQL Database Admin Console");
                break;
            }
            case "bus": {
                setContent(<BusTransitDialog />);
                setTitle("Bus Transit Android App");
                break;
            }
            case "smtp": {
                setContent(<SMTPDialog />);
                setTitle("SMTP Email Server");
                break;
            }
            case "dns": {
                setContent(<DNSDialog />);
                setTitle("DNS Resolver");
                break;
            }
            default: {
                setTitle("App");
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
