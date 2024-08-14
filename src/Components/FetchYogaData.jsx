import React from "react";
import UseFetch from "./UseFetch";
const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return(
        <>
 <ul className='list-data-main'>
      <h1 className= 'usefetch-heading'> use fetch custom hook</h1>
      {data && data.map((p)=>(
      <>
       <li className='list_data'>
            <h3>{p.name}</h3>
            <p><strong>Benefits: </strong>{p.benefits}</p>
            <p><strong>Time Duration: </strong>{p.time_duration}</p>
            </li>
      </>
      ))}
     </ul>
        </>
    )

}
export default FetchYogaData