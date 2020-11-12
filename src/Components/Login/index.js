import React from "react";

import "../SASS/login.scss";
import { FluxComponent, FluxInput } from "./style";

export default function Login({ history, name, setname }) {
  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.length) {
      return alert("Type your username!");
    }

    history.push("/userImage");
  }
  return (
    <div className="home">
      <div className="content">
        <div className="img-container">
          <img
            src="https://i.ibb.co/KFRLWL1/download.png"
            className="img1"
            alt="loginImg"
          />
        </div>
        <div className="LoginForms">
          <FluxComponent>
            <FluxInput
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
              type="text"
              maxLength="15"
            />
            <button onClick={handleSubmit} className="btn-1">
              Sign-in
            </button>
          </FluxComponent>
        </div>
      </div>
    </div>
  );
}
