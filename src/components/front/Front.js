import React from 'react'
import resume_img from "../../assets/orange.png"
import Fade from 'react-reveal';

import "./Front.css"


const Front = () => {
    
  return (
    
    <div class="frontpageContainer flex-display-center" id="front">


      <div class="frontTextContainer">
          <h1>Hi! I am Hanafi Taofiq</h1>
          <h5>SOFTWARE DEVELOPER</h5>
          <p>High level experience in web, mobile and desktop app develpment. producing quality work</p>
              <div class="contactMeBtn">
                  <button>Contact me</button>
              </div>
      </div>



      <div class="frontImgContainer">
          <img src={resume_img} alt="" class="frontImg"/>
      </div>

    </div>

  )
}

export default Front