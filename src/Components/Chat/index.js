import React, { useState } from 'react';

import '../SASS/chat.scss';

export default function ChatPage({ name, userIMG }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('')

  const hour = new Date().getHours();
  const minutes = new Date().getMinutes()
  
  function messageSend(e) {
    if (e.keyCode !== 13) return;

  }
  return (
    <div className="mainAll">
      <div className="container">
        <div className="nav">
          <div className="second-nav">
            <div className="initial-circle"></div>
            <div className="initial-circle"></div>
            <div className="initial-circle"></div>
            <div className="initial-circle"></div>
          </div>
        </div>
        <div className="user-nav">
          <div className="nav-name">
            <h1 className="h1-container">Server</h1>
          </div>
          <div className="channel-group">
            <h1 className="channel-tlt1">Text channels</h1>
            <div className="groups">
              <span className="span">General</span>
              <span className="span">Games</span>
              <span className="span">Away</span>
            </div>
            <h1 className="channel-tlt2">Voice channels</h1>
            <div className="groups">
              <span className="span">General</span>
              <span className="span">Games</span>
              <span className="span">Away</span>
            </div>
          </div>
          <div className="user-container">
            <div className="name-circle" />
            <div className="name-circle2" />
            <div className="name-circle3" />
            <img src={userIMG} className="server-status" alt="first-img" />
            <div className="green-circle2" />
            <span className="user-name">{name}</span>
          </div>
        </div>
        <div className="general-nav">
          <span className="general-span">General
          <div className="little-circles">
              <div className="circles0" />
              <div className="circles1" />
              <div className="circles2" />
              <input className="inputView" />
            </div>
          </span>
          <div className="chat">
            {messages.map(chat => {
              return <ul className="ul-div">
                <img src={userIMG} className="chat-image" alt="userImage/" />
                <span className="span-chat">
                  {name}
                  <span className="chat-hour"> today {hour}:{minutes}</span>
                </span>
                <span className="conversation"></span>
                <div>
                </div>
              </ul>
            })}
            <div className="input-div">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={ e => setMessages([...messages, {id: Math.floor(Math.random() * 1000),  text: input}])}
                className="input" 
                placeholder="Oque esta acontecendo?"
                maxLength="100"
              />
            </div>
          </div>
          <div className="online">
            <img src={userIMG} className="last-circle" alt="last" />
            <span className="online-span">Online</span>
            <div className="users">
              <span className="online-username">{name}</span>
              <div className="green-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}