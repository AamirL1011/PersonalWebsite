// ===================================---CHANGE APP STATE---=======================================
// Updates the state of the application
export const updateMainState = (payload) => {
    return (dispatch) => {
        dispatch({ type: "SET_MAIN_STATE", payload: payload });
    }
}

// Open or close work dialog
export const updateWorkDialogState = (payload) => {
    return (dispatch) => {
        dispatch({ type: "SET_WORK_DIALOG_STATE", payload: payload });
    }
}

// Update work dialog type
export const updateWorkDialogTypeState = (payload) => {
    return (dispatch) => {
        dispatch({ type: "SET_WORK_DIALOG_TYPE_STATE", payload: payload });
    }
}

// ===================================---CHANGE SIDE MENU STATE---=======================================
// Updates the sidebar menu state of the application
export const updateMenuState = (payload) => {
    return (dispatch) => {
        dispatch({ type: "SET_MENU_STATE", payload: payload });
    }
}
