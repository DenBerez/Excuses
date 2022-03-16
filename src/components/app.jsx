import React from 'react'
import axios from 'axios';
import Excuse from './excuse';
import Previous from './previous';
import Quote from './quote';

export default function App() {
  let [thisExcuse, setThisExcuse] = React.useState({});
  let [isSaved, setIsSaved] = React.useState(false);

  let officeE = () => {
    axios.get(`/excuses/office`)
      .then(response => {
        const thisEx = response.data[0];
        setThisExcuse(thisEx);
        setIsSaved(false);
      });
  }

  let familyE = () => {
    axios.get(`/excuses/family`)
      .then(response => {
        const thisEx = response.data[0];
        setThisExcuse(thisEx);
        setIsSaved(false);
      });
  }

  let childrenE = () => {
    axios.get(`/excuses/children`)
      .then(response => {
        const thisEx = response.data[0];
        setThisExcuse(thisEx);
        setIsSaved(false);
      });
  }

  let partyE = () => {
    axios.get(`/excuses/party`)
      .then(response => {
        const thisEx = response.data[0];
        setThisExcuse(thisEx);
        setIsSaved(false);
      });
  }

  let collegeE = () => {
    axios.get(`/excuses/college`)
      .then(response => {
        const thisEx = response.data[0];
        setThisExcuse(thisEx);
        setIsSaved(false);
      });
  }

  return (
    <div id='mainCont'>
    <div id='main'>
      <div id='timeouts' className='hidden'>
        {setTimeout(() => {document.getElementById('flavor').className = ('visible')}, 500)}
        {setTimeout(() => {document.getElementById('choicesProm').className = ('visible')}, 3500)}
        {setTimeout(() => {document.getElementById('c1').className = ('visible')}, 4000)}
        {setTimeout(() => {document.getElementById('c2').className = ('visible')}, 4200)}
        {setTimeout(() => {document.getElementById('c3').className = ('visible')}, 4400)}
        {setTimeout(() => {document.getElementById('c4').className = ('visible')}, 4600)}
        {setTimeout(() => {document.getElementById('c5').className = ('visible')}, 4800)}
        {setTimeout(() => {document.getElementById('previous').className = ('visible')}, 5000)}
        {setTimeout(() => {document.getElementById('quote').className = ('visible')}, 5000)}
      </div>

    <fieldset id='topField'>

    <legend><h1>Excuses²</h1></legend>
      <h5 id='flavor' className='hidden'>
        Excuses, excuses...<br />
        Everyone needs a good excuse once in a while...<br />
        Let me take care of making and saving some for you!
      </h5>

      <div id='choicesCont'>
        <h3 id='choicesProm' className='hidden'>What's this excuse for?</h3>
        <button id='c1' className='hidden' onClick={() => familyE()}>Family</button>
        <button id='c2' className='hidden' onClick={() => childrenE()}>Children</button>
        <button id='c3' className='hidden' onClick={() => partyE()}>Party</button>
        <button id='c4' className='hidden' onClick={() => officeE()}>Office</button>
        <button id='c5' className='hidden' onClick={() => collegeE()}>College</button>
        <br />
        <br />
      </div>

      </fieldset>

      <div id='bottomCont'>
        <Previous isSaved={isSaved} />
        <Excuse thisExcuse={thisExcuse} isSaved={isSaved} setIsSaved={setIsSaved} />
        <Quote />
      </div>

    </div>
    </div>
  )
}