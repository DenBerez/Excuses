/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import axios from 'axios';

export default function Previous({ isSaved }) {
  const [prevExcuses, setPrevExcuses] = React.useState([]);
  const [searchName, setSearchName] = React.useState('');

  const searchTyping = (e) => {
    setSearchName(e.target.value);
  };

  const getByName = () => {
    axios.get(`/excuses/previous/${searchName}`)
      .then((response) => {
        const prevs = response.data;
        setPrevExcuses(prevs);
      });
  };

  React.useEffect(() => {
    getByName();
  }, [isSaved]);

  return (
    <div id="previous" className="hidden">
      <fieldset id="pastField">

        <legend><h1>Past Excuses</h1></legend>
        {prevExcuses.map((excuse) => {
          if (excuse.name !== '' && excuse.purpose !== '') {
            return (
              <div key={excuse.id}>
                (
                {excuse.used.slice(0, 10)}
                )
                {' '}
                {excuse.name}
                {' '}
                missed
                {' '}
                {excuse.purpose}
                {' '}
                and used following excuse on
                {' '}
                {excuse.category}
                : "{excuse.excuse}"
                <br />
                {' '}
                <hr />
              </div>
            );
          }
          return (
            <div key={excuse.id}>
              (
              {excuse.used.slice(0, 10)}
              ) A past
              {' '}
              {excuse.category}
              {' '}
              excuse: "
              {excuse.excuse}
              "
              <br />
              {' '}
              <hr />
            </div>
          );
        })}
        <br />
        <input id="inputSearch" type="text" placeholder="Search name..." onChange={(e) => searchTyping(e)} />
        <button onClick={() => getByName()}>Search</button>
      </fieldset>
    </div>
  );
}
