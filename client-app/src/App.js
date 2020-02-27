import React, { useEffect, useRef } from 'react';
import ChatInput from './components/ChatInput';
import ChatMessage from './components/ChatMessage';
import ChatHeader from "./components/ChatHeader";
import { useConnect } from "./hooks";
import './Chat.css';

const URL = 'ws://localhost:3030';

function App() {
  const msgWrapRef = useRef(null);

  const {
    cahtData,
    addMessageToStore,
    setUserNameToStore,
    sendMessage
  } = useConnect(URL);

  useEffect(() => {
    if (msgWrapRef.current != null)
      msgWrapRef.current.scrollTop = msgWrapRef.current.scrollHeight;
  }, [cahtData])

  const submitMessage = messageString => {
    const message = {
      name: cahtData.name,
      message: messageString,
      date: new Date().toISOString()
    }
    sendMessage(JSON.stringify(message));
    addMessageToStore(message);
  }

  return (
    <div className="chat">
      <ChatHeader
        name={cahtData.name}
        setUserNameToStore={setUserNameToStore}
      />
      <div ref={msgWrapRef} className="chat-messages">
        {cahtData.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
            date={new Date(message.date)}
            myName={cahtData.name}
          />)
        }
      </div>
      <ChatInput
        onSubmitMessage={submitMessage}
      />
    </div>
  );
}

export default App;
