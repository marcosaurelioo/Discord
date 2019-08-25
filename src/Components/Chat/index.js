import React, { useState, useEffect } from 'react';
import socket from 'socket.io-client';
import api from '../../Services/index';

import {
  Main,
  VerticalBar,
  BlueCircles,
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

  function messageSend(e) {
    e.preventDefault()
    const nickname = name;

    const data = { msg: input, nickname: name };

    if (!input) return;

    setMessages([...messages, { id: Math.floor(Math.random() * 1000), text: input }]);

    api.post(`message/${nickname}`, data);

    setInput('');
  };

  function loadRealTime() {
    const io = socket('http://localhost:3333/');

    io.on('newMessage', data => {
      setMessages(data)
    });
  };

  useEffect(() => {
    loadRealTime();
  });
  return (
    <Main>
      <VerticalBar>
        <BlueCircles />
        <BlueCircles />
        <BlueCircles />
        <BlueCircles />
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
          {messages.map(chat => (
            <ul className="chatDiv">
              <img className="chatImage" src={userIMG} alt="" />
              <span className="hour">Today at {hour}:{minutes}</span>
              <span className="chatName">Marcos Aurelio</span>
              <div className="divConversation">
                <span className="messages">{chat.text}</span>
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