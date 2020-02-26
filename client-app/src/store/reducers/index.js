import { combineReducers } from "redux";

const message = (state = [], action) => {
    switch (action.type) {
        case "TEST":
            return [...state, action.pyload]

        default:
            return state;
    }
}

export default combineReducers({
    message
});