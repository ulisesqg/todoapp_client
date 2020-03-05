import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}`);
        const jsonRes = await response.json();
        console.log(response);
        setData(jsonRes);
      };
      getData();
    } catch (error) {
      console.log('Error: ');
    }
  }, []);

  return (
    <div className="App">
      <h1>{`${data.message}`}</h1>
    </div>
  );
}

export default App;
