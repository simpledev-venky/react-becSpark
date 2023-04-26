import React ,{useRef,useEffect}from "react";
import { useNavigate, useParams } from "react-router-dom";
import stdData from "./data";
 

const Stddetails = () => {
  const { id } = useParams();
  const nav = useNavigate();
const a = useRef()

useEffect(()=>{
a.current.play()
})
// console.log(a.current);
  // console.log(stdData);
  const obj = stdData.find((eachChar) => {
    return eachChar.regNo == id;
  });
  // console.log(obj);
  const { name,
    nickName,
    contNo,
    email ,
    dob ,
    achievements ,
    goal ,
    bestFrds ,
    msg ,
    img ,
    aud  } = obj;

  // console.log(obj);

  return (
    <>
      {stdData && (
        <>
          <div className="container2">
            <img src={img} alt={name}  />
            <div className ="content">
              <h3> <b>NickName</b> :{nickName}</h3>
              <h3> <b>Contact no</b> :{contNo}</h3>
              <h3> <b>Email</b> :{email}</h3>
              <h3> <b>D.O.B</b> :{dob}</h3>
              <h3> <b>Achievements</b> :{achievements}</h3>
              <h3> <b>Goals</b> :{goal}</h3>
              <h3> <b>Best Friends</b> :{bestFrds}</h3>
              <h3> <b>Message</b> :{msg}</h3>
             <audio src={aud} controls ref={a}></audio>
            </div>
          </div>

          <button
            className="home-btn"
            onClick={() => {
              nav("/") }} >back to home
          </button>
        </>
      )}
    </>
  );
};

export default Stddetails;
