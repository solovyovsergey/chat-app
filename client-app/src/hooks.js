import { useEffect, useRef, useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/actions';

export const useConnect = (URL) => {
    const ws = useRef(new WebSocket(URL));
    const dispatch = useDispatch();

    const { addSocketMessage, setUserName } = useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
    const sendMessage = useCallback(message => ws.current.send(JSON.stringify(message)), []);
    const chatData = useSelector(state => state.chat);

    useEffect(() => {
        ws.current.onopen = () => console.log('connected');
        ws.current.onmessage = e => addSocketMessage(JSON.parse(e.data));
        ws.current.onclose = () => {
            console.log('disconnected');
            ws.current = new WebSocket(URL);
        }
    }, [URL, addSocketMessage])

    return {
        chatData,
        addSocketMessage,
        setUserName,
        sendMessage
    }
}