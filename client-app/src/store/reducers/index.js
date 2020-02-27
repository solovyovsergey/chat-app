import { combineReducers } from "redux";
import { ADD_SOCKET_MESSAGE, SET_USERNAME } from "../constants";

const messageState = {
    name: 'Bob',
    messages: [],
}

const message = (state = messageState, action) => {
    switch (action.type) {
        case ADD_SOCKET_MESSAGE:
            const msg = state.messages;
            msg.push(action.payload);
            return {
                ...state, messages: msg
            };

        case SET_USERNAME:
            return {
                ...state,
                name: action.payload,
            };

        default:
            return state;
    }
}

export default combineReducers({
    message
});