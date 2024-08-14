import React, { useEffect, useState } from 'react';
import Card from './Card';
import Sdata from './Sdata';
import axios from 'axios';


function App() {
  const [data,setData] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        // console.log(response.data);
        setData(response.data.slice(0,50));
      } catch (error) {
        console.error(error);
      }finally {
        console.log('Data fetching completed.');
      }
    }
    getUser();
  }, []);

  function ncard(val) {
    return (
      <Card
        key={val.id}
        title={val.title}
        // imgsrc={val.imgsrc}
        imgsrc={val.thumbnailUrl}
        // sname={val.sname}
        sname={val.albumId}
        tname={val.id}
        // link={val.link}
      />
    );
  }
  // console.log(data[1]);
  return (
    <div className="App">
      <h1 className='heading'>Color Cards</h1>
      <div className='container'>
        {data.map(ncard)}
      </div>
    </div>
  );
}

export default App;
