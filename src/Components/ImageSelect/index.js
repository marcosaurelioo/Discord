import React, { useState } from 'react';

import '../SASS/login.scss';

export default function ImageSelect({ history, name, setUserImg }) {
  const [chosenImage, setChosenImage] = useState(null);
  function handleSubmit() {
    if (!chosenImage) return;

    setUserImg(chosenImage);

    history.push('/chat')
  };
  return (
    <>
      <div className="ImageSelect-container">
        <div className="ImageSelectTLT">
          <h1 className="ImageSelect-container-Title">Welcome, {name} select your picture</h1>
        </div>
        <div className="appearImage">
          <img
            onClick={() => setChosenImage('https://i.pinimg.com/originals/b7/4a/cd/b74acd489a754d949d24a279bc1a44e6.jpg')}
            className={`grow selectImageAppear ${chosenImage === 'https://i.pinimg.com/originals/b7/4a/cd/b74acd489a754d949d24a279bc1a44e6.jpg' && 'active'}`}
            height={100}
            src="https://i.pinimg.com/originals/b7/4a/cd/b74acd489a754d949d24a279bc1a44e6.jpg"
            alt="img1"
          />
          <img
            onClick={() => setChosenImage('https://i.pinimg.com/originals/87/a4/83/87a483c35fba11eeaacd5c85dd13458d.jpg')}
            className={`grow selectImageAppear ${chosenImage === 'https://i.pinimg.com/originals/87/a4/83/87a483c35fba11eeaacd5c85dd13458d.jpg' && 'active'}`}
            height={100}
            src="https://i.pinimg.com/originals/87/a4/83/87a483c35fba11eeaacd5c85dd13458d.jpg"
            alt="img2"
          />
          <img
            onClick={() => setChosenImage('https://i.pinimg.com/originals/88/cc/ec/88ccecc2e34aa7f704d71282cc6ced5c.jpg')}
            className={`grow selectImageAppear ${chosenImage === 'https://i.pinimg.com/originals/88/cc/ec/88ccecc2e34aa7f704d71282cc6ced5c.jpg' && 'active'}`}
            height={100}
            src="https://i.pinimg.com/originals/88/cc/ec/88ccecc2e34aa7f704d71282cc6ced5c.jpg"
            alt="img3"
          />
          <img
            onClick={() => setChosenImage('https://pbs.twimg.com/media/Du6-TLLU0AEbIx6.jpg')}
            height={100}
            className={`grow selectImageAppear ${chosenImage === 'https://pbs.twimg.com/media/Du6-TLLU0AEbIx6.jpg' && 'active'}`}
            src="https://pbs.twimg.com/media/Du6-TLLU0AEbIx6.jpg"
            alt="img4"
          />
          <div className="btn-containerImage">
            <button onClick={handleSubmit} className="btn-1">GO!</button>
          </div>
        </div>
      </div>
    </>
  );
}