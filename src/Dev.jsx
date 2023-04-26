import React from 'react'
import pic from "./assets/1.jpg"
const Dev = () => {
  return (
    <>
     <div className="container2">
            <img src={pic} alt= 'dev'  />
            <div class="content">
            Passionate front-end web developer dedicated to crafting beautiful and intuitive digital experiences through mastery of HTML, CSS, JavaScript and react js.
             
            </div>
          </div>
          <button
            className="home-btn"
            onClick={() => {
              nav("/") }} >back to home
          </button>
    </>
  )
}
export default Dev