import React from 'react';
import axios from 'axios';

export default function Quote() {
  const [thisQuote, setThisQuote] = React.useState({});
  const [thisJoke, setThisJoke] = React.useState({});
  const newQuote = () => {
    axios.get('/quote')
      .then((response) => {
        const quo = response.data[0];
        setThisQuote(quo);
      });
  };
  const newJoke = () => {
    axios.get('/joke')
      .then((response) => {
        const quo = response.data;
        setThisJoke(quo);
      });
  };
  if (Object.keys(thisQuote).length === 0) {
    newQuote();
  }
  if (Object.keys(thisJoke).length === 0) {
    newJoke();
  }
  return (
    <div id="quote" className="hidden">
      <fieldset id="mainField">

        <legend><h1>Inspiration</h1></legend>
        <span id="quoteText">
          "
          {thisQuote.q}
          "
          {' '}
          <br />
          <h3>
            ~
            {thisQuote.a}
          </h3>
        </span>
        <button type="button" onClick={() => newQuote()}>New Quote</button>
        <hr />
        <br />
        {thisJoke.joke ? (
          <div>{thisJoke.joke}</div>
        )
          : (
            <div>
              {thisJoke.setup}
              <br />
              <span id="punchline">{thisJoke.delivery}</span>
            </div>
          )}
        <br />
        <button type="button" onClick={() => newJoke()}>New Joke</button>
      </fieldset>
    </div>
  );
}
