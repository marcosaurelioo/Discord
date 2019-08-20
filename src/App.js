import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Components/Login';
import ChatPage from './Components/Chat/index';
import ImageSelect from './Components/ImageSelect/index';

function App() {
  const [name, setname] = useState('');
  const [userIMG, setUserImg] = useState(null);
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={(props) => <Login {...props}
          name={name}
          setname={setname} />} />
      <Route
        path="/chat"
        render={(props) => <ChatPage {...props}
          userIMG={userIMG}
          name={name} />}
      />
      <Route
        path="/userImage"
        render={(props) => <ImageSelect {...props}
          name={name}
          setUserImg={setUserImg}
          userIMG={userIMG}
        />} />
    </BrowserRouter>
  );
}

export default App;
