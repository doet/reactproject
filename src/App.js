import React, { useState } from 'react';

import { fetchWeather } from './Api/fetchWeather'
// import './App.css';

const App = () => {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState('');

  const search = async (e) => {
    if(e.key === 'Enter'){
      const data = await fetchWeather(query);
      setWeather(data)
      setQuery('')
      console.log(data[0].nama)
    }
  }
  return (
    <div className='main-container'>
      <p>Anda mengetik = {query}</p>

      <input
        type="text"
        className="search"
        placeholder="Search ..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        onKeyPress={search}
      />

    {weather[0] && (
        <div>
          <h2>{weather[0].nama }</h2>
        </div>
      )}
    </div>
  );
}
export default App;
// <p>enter {weather[0].nama}</p>
