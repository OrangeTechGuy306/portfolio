import React from 'react'
import "./Front.css"
import resume_img from "../../assets/resume_img.png"

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