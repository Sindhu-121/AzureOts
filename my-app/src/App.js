import './App.css'; 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from './apiConfig';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/data`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); 


  return (
    <div className="App">
      <h1>Your React App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Server Data: {data ? data.message : 'No data available.'}</p>
      )}
    </div>
  );
}

export default App;
