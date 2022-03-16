import React from 'react'
import axios from 'axios';

export default function Quote() {
  let [thisQuote, setThisQuote] = React.useState({});
  if (Object.keys(thisQuote).length === 0) {
    axios.get(`/quote`)
      .then(response => {
        const quo = response.data[0];
        setThisQuote(quo);
      });
  }
  return (
    <div id='quote' className='hidden'>
      <fieldset id='mainField'>

      <legend><h1>Inspiration</h1></legend>
        <span id='quoteText'>"{thisQuote.q}" <br />~ <i>{thisQuote.a}</i></span>
        <br />

      </fieldset>
    </div>
  )
}
