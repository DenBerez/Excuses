import axios from 'axios';
import React from 'react';
import note from '../../dist/note2.png';
import rod from '../../dist/rod.png';
import sig from '../../dist/signature.png';

export default function Excuse({ thisExcuse, isSaved, setIsSaved }) {
  const [name, setName] = React.useState('');
  const [purpose, setPurpose] = React.useState('');
  const typing = (e) => {
    if (e.target.id === 'nameInput') {
      setName(e.target.value);
      setIsSaved(false);
    }
    if (e.target.id === 'occasionInput') {
      setPurpose(e.target.value);
      setIsSaved(false);
    }
  };
  const save = () => {
    if (isSaved === false) {
      axios.post('/excuses/previous', {
        name,
        purpose,
        category: thisExcuse.category,
        excuse: thisExcuse.excuse,
      })
        .then(setIsSaved(true));
    }
  };
  return (
    <div id="excuse" className="hidden">
      <div id="timeouts" className="hidden">
        {Object.keys(thisExcuse).length !== 0
        && setTimeout(() => { document.getElementById('excuse').className = ('visible'); }, 500)}
      </div>
      <img id="note" src={note} />
      <img id="rod" src={rod} />
      <img id="sig" src={sig} />
      <span id="noteTextWhom">
        To whom it may concern,
      </span>
      <span id="noteTextBody">
        I,
        {' '}
        <input id="nameInput" type="text" placeholder="Name..." onChange={(e) => typing(e)} />
        , am deeply sorry
        <br />
        for not being able to make it to
        <br />
        <input id="occasionInput" type="text" placeholder="Occasion..." onChange={(e) => typing(e)} />
        . Basically:
        <br />
      </span>
      <span id="noteTextEx"><b>{thisExcuse.excuse || 'The Excuser API is currently down :('}</b></span>
      <button onClick={() => save()}>Save</button>
    </div>
  );
}
