import React, { useEffect, useRef } from 'react';
import { useConnect } from './hooks';
import ChatInput from './components/ChatInput';
import ChatMessage from './components/ChatMessage';
import ChatHeader from './components/ChatHeader';
import './Chat.css';

const URL = 'ws://localhost:3030';
const CLASS_CHAT = 'chat';
const CLASS_CHAT_MESSAGES = 'chat-messages';

function App() {
  const msgWrapRef = useRef(null);

  const {
    chatData,
    addSocketMessage,
    setUserName,
    sendMessage
  } = useConnect(URL);

  useEffect(() => {
    if (msgWrapRef.current != null)
      msgWrapRef.current.scrollTop = msgWrapRef.current.scrollHeight;
  }, [chatData])

  const submitMessage = messageString => {
    const message = {
      name: chatData.name,
      message: messageString,
      date: new Date().toISOString()
    }
    sendMessage(message);
    addSocketMessage(message);
  }

  return (
    <div className={CLASS_CHAT}>
      <ChatHeader
        name={chatData.name}
        setUserNameToStore={setUserName}
      />
      <div ref={msgWrapRef} className={CLASS_CHAT_MESSAGES}>
        {chatData.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
            date={new Date(message.date)}
            myName={chatData.name}
          />
        )}
      </div>
      <ChatInput
        onSubmitMessage={submitMessage}
      />
    </div>
  );
}

export default App;
