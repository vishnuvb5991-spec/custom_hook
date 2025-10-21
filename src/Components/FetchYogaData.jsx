       /* import React from 'react'
        import UseFetch from './UseFetch';
        import './FetchData.css';
         
        const FetchYogaData = () => {
            const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
            console.log(data) 
          return (
           
            <ul className="list_data_main">
                <h1 className="usefetch_heading">Yoga Benefits</h1>
    {data && data.map((e, index) => (
      <li className="list_data" key={index}>
      <h3>{e.name}</h3>
      <p><strong>Benefits: </strong>{e.benefits}</p>
      <p><strong>Duration: </strong>{e.time_duration}</p>
    </li>
    ))}
  </ul>

           
          );
        };
        export default FetchYogaData*/

        import React from 'react';
import useFetch from './UseFetch';
import './FetchData.css';

const FetchYogaData = () => {
  const [data] = useFetch('https://api.npoint.io/4459a9a10e43812e1152');

  console.log(data);

  return (
    <ul className="list_data_main">
      <h1 className="usefetch_heading">Yoga Benefits</h1>
      {data && data.map((e, index) => (
        <li className="list_data" key={index}>
          <h3>{e.name}</h3>
          <p><strong>Benefits: </strong>{e.benefits}</p>
          <p><strong>Duration: </strong>{e.time_duration}</p>
        </li>
      ))}
    </ul>
  );
};

export default FetchYogaData;
