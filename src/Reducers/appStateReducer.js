const initialState = {
    showMain: false,
    showSideBar: false,
};


const appStateReducer = (currentState = initialState, action) => {
    let newState = currentState;
    switch(action.type) {
        case "SET_MAIN_STATE": {
            return {
                showMain: action.payload,
                ...newState
            }
        }
        case "SET_MENU_STATE": {
            return {
                showSideBar: action.payload,
                ...newState
            }
        }
        default:
            return newState
    }
}

export default appStateReducer;
