import React from 'react';

import '../SASS/login.scss';
import { FluxComponent, FluxInput, InputContainer, } from './style';

export default function Login({ history, name, setname }) {
  async function handleSubmit(e) {
    e.preventDefault();

    if(!name.length) return;

    history.push('/userImage')
  };
  return (
    <div className="first-div-container">
      <div className="title-container">
        <h1 className="h1-tlt">Board the rocket!</h1>
      </div>
      <div className="img-container">
        <img src="https://i.ibb.co/KFRLWL1/download.png" className="img1" alt="loginImg" />
      </div>
      <div>
      </div>
      <FluxComponent>
        <InputContainer >
          <FluxInput
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Name"
            type="text"
            maxLength="15"
          />
          <button onClick={handleSubmit} className="btn-1">Sign-in</button>
        </InputContainer>
      </FluxComponent>
    </div>
  );
};



