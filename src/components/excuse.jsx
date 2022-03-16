import React from 'react';
import note from '../../dist/note2.png';
import rod from '../../dist/rod.png';
import sig from '../../dist/signature.png';

export default function Excuse( {thisExcuse} ) {
  let [name, setName] = React.useState("");
  let [purpose, setPurpose] = React.useState("");
  let typing = (e) => {
    if (e.target.id === 'nameInput') {
      setName(e.target.value);
    }
    if (e.target.id === 'occasionInput') {
      setPurpose(e.target.value);
    }
  }
  return (
    <div id='excuse' className='hidden'>
      <div id='timeouts' className='hidden'>
        {Object.keys(thisExcuse).length !== 0
        && setTimeout(() => {document.getElementById('excuse').className = ('visible')}, 500)}
      </div>
      <img id='note' src={note}></img>
      <img id='rod' src={rod}></img>
      <img id='sig' src={sig}></img>
      <span id='noteTextWhom'>
        To whom it may concern,
      </span>
      <span id='noteTextBody'>
        I, <input id='nameInput' type='text' placeholder='Name...' onChange={(e) => typing(e)}></input>, am deeply sorry<br/>
        for not being able to make it to<br />
        <input id='occasionInput' type='text' placeholder='Occasion...' onChange={(e) => typing(e)}></input>. Basically:<br />
      </span>
      <span id='noteTextEx'>{thisExcuse.excuse}</span>
      <button>Save</button>
    </div>
  )
}
