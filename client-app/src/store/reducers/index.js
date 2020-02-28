import { combineReducers } from 'redux';
import { ADD_SOCKET_MESSAGE, SET_USERNAME } from '../constants';

const defaultMessageState = {
    name: 'Bob',
    messages: [],
}

const chat = (state = defaultMessageState, action) => {
    switch (action.type) {
        case ADD_SOCKET_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
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

export default combineReducers({ chat });