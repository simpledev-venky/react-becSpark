import React from "react";
import {Link} from "react-router-dom"
import stdData from "./data";

const Bec = () => {


  return (
    <>
    {/* to access environment variables */}
    {/* <h2>{import.meta.env.VITE_URL}</h2> */}
    
    
      <ul className="char-container">
      {
        stdData.map((eachStd) => {
          const { regNo,name,img } = eachStd;
          return (
            <li key={regNo} className="each-char">
            <Link to={`/${regNo}`}>

              <img src={img} alt={name} />
              <h2>{name}</h2>
              <h2>{regNo}</h2>
            </Link>
            </li>
          );
        })}
      </ul>
      
    </>
  );
};
export default Bec


