const initialState = {
    showMain: false,
    showSideBar: false,
    showWorkDialog: false,
    workDialogType: "",
    showProjectDialog: false,
    projectDialogType: "",
};


const appStateReducer = (currentState = initialState, action) => {
    let newState = currentState;
    switch(action.type) {
        case "SET_MAIN_STATE": {
            return {
                ...newState,
                showMain: action.payload,
            }
        }
        case "SET_MENU_STATE": {
            return {
                ...newState,
                showSideBar: action.payload,
            }
        }
        case "SET_WORK_DIALOG_STATE": {
            return {
                ...newState,
                showWorkDialog: action.payload,
            }
        }
        case "SET_WORK_DIALOG_TYPE_STATE": {
            return {
                ...newState,
                workDialogType: action.payload,
            }
        }
        case "SET_PROJECT_DIALOG_STATE": {
            return {
                ...newState,
                showProjectDialog: action.payload,
            }
        }
        case "SET_PROJECT_DIALOG_TYPE_STATE": {
            return {
                ...newState,
                projectDialogType: action.payload,
            }
        }
        default:
            return newState
    }
}

export default appStateReducer;
