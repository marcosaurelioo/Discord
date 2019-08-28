import React, { useState, useEffect } from 'react';
import socket from 'socket.io-client';
import api from '../../Services/index';

import {
  Main,
  VerticalBar,
  ChannelsBar,
  Channels,
  UserSettingsContainer,
  ChatBar,
  Conversation
} from './styles';
import '../SASS/chats.scss';

export default function ChatPage({ name, userIMG }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('')

  const hour = new Date().getHours();
  const minutes = new Date().getMinutes()

  const messagesEndRef = React.createRef(null);

  useEffect(() => {
    scrollToBottom();
  });

  useEffect(() => {
    loadRealTime();
  }, [])

  async function loadAllMessages() {
    try {
      const response = await api.get('/mensagens');
   
      setMessages(response.data);
    } catch (e)
     {
      alert("Conexao com a API mal sucedida.")
    }
  };

  useEffect(() => {
    loadAllMessages();
  }, [])


  function scrollToBottom() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    };
  };

  function messageSend(e) {
    e.preventDefault()

    if (!input) return;

    api.post(`/message`, { nickname: name, msg: input, img: userIMG });

    setInput('');
  };

  function loadRealTime() {
    const io = socket('https://real-time-chat007.herokuapp.com/');

    io.on('newMessage', data =>
      setMessages(data)
    )
  };


  return (
    <Main>
      <VerticalBar>
        <div className="blueCircles" />
        <div className="blueCircles" />
        <div className="blueCircles" />
        <div className="blueCircles" />
      </VerticalBar>
      <ChannelsBar>
        <h1 className="titles">General</h1>
        <div>
          <h1 className="channelTitle">Text channels</h1>
        </div>
        <Channels>
          <span className="channels">General</span>
          <span className="channels">Off-topic</span>
          <span className="channels">Tech</span>
        </Channels>
        <div>
          <h1 className="channelTitle">Voice channels</h1>
        </div>
        <Channels>
          <span className="channels">General</span>
          <span className="channels">Gaming</span>
          <span className="channels">Musics</span>
        </Channels>
        <UserSettingsContainer>
          <img src={userIMG} className="userSettingsImage" alt="" />
          <div className="greenCircle" />
          <span className="userName">{name}</span>
        </UserSettingsContainer>
      </ChannelsBar>
      <ChatBar>
        <ChatBar>
          <span className="chatTitle">Chat</span>
        </ChatBar>
        <Conversation>
          {messages.map((chat, index) => (
            <ul className="chatDiv" key={index}>
              <img className="chatImage" src={chat.img} alt="" />
              <div id="div.chat" ref={messagesEndRef} className="divConversation">
                <span className="hour">Today at {hour}:{minutes}</span>
                <span className="chatName">{chat.nickname}</span>
                <span className="messages">{chat.msg}</span>
              </div>
            </ul>
          ))}
        </Conversation>
        <form onSubmit={messageSend} className="inputDiv">
          <input
            placeholder="What happening?"
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength="50"
          />
        </form>
      </ChatBar>
    </Main >
  );
}