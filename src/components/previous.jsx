import React from 'react';
import axios from 'axios';

export default function Previous({ isSaved }) {
  let [prevExcuses, setPrevExcuses] = React.useState([]);
  React.useEffect(() => {
    axios.get('/excuses/previous')
      .then(response => {
        const prevs = response.data;
        setPrevExcuses(prevs);
      });
  }, [isSaved]);

  return (
    <div id='previous' className='hidden'>
      <fieldset id='pastField'>

      <legend><h1>Past Excuses</h1></legend>
        {prevExcuses.map((excuse) => {
          if (excuse.name !== "" && excuse.purpose !== "") {
            return (
            <div key={excuse.id}>{excuse.name} missed {excuse.purpose} and used {excuse.category} excuse: "{excuse.excuse}"<br /> <hr /></div>
            )
          } else {
            return (
            <div key={excuse.id}>Past {excuse.category} excuse: "{excuse.excuse}"<br /> <hr /></div>
            )
          }
        })}
      </fieldset>
    </div>
  )
}
