import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeResult } from '../actions/resultActions';

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  async function searchPlace() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + search + '&APPID=5bd8bd252d7393971f6c429efda14ce9');
    const data = await response.json();

    dispatch(changeResult(data));
  }

  return (
    <>
      <input type="text" placeholder="Sök stad..." onChange={(event) => setSearch(event.target.value)} />
      <button onClick={searchPlace}>Vad är det för väder</button>
    </>
  );
}

export default Search;
