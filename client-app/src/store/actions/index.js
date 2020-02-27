import {
    ADD_SOCKET_MESSAGE,
    SET_USERNAME
} from "../constants";

export function addSocketMessage(message) {
    return {
        type: ADD_SOCKET_MESSAGE,
        payload: message
    }
}

export function setUserName(name) {
    return {
        type: SET_USERNAME,
        payload: name
    }
}

