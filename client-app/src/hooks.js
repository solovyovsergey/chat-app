import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSocketMessage, setUserName } from "./store/actions";

export const useConnect = (URL) => {
    const ws = useRef(new WebSocket(URL));
    const dispatch = useDispatch();

    const addMessageToStore = message => dispatch(addSocketMessage(message));
    const setUserNameToStore = name => dispatch(setUserName(name));
    const sendMessage = useCallback(message => ws.current.send(message), [ws.current]);
    const cahtData = useSelector(state => state.message);

    useEffect(() => {
        ws.current.onopen = () => console.log('connected');
        ws.current.onmessage = e => addMessageToStore(JSON.parse(e.data));
        ws.current.onclose = () => {
            console.log('disconnected');
            ws.current = new WebSocket(URL);
        }
    }, [URL])

    return {
        cahtData,
        addMessageToStore,
        setUserNameToStore,
        sendMessage
    }
}