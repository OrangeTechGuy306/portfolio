import React from 'react'
import "./Intouch.css"
import resume_img from "../../assets/resume_img.png"
import { FiPhoneCall } from 'react-icons/fi';


const Intouch = () => {
  return (
    <section class="getInTouchSection">

            <div class="intouchContainer">

                <div class="intouchTxtContainer">
                   <h1>Have a new project?</h1>
                   <p>Contact me now and get 5% discount</p>
                   <div  className='display-flex-center dialBtn'>
                        <FiPhoneCall/>
                      <a href="tel:+2349032339903">
                          give me a call now!
                       </a>
                   </div>
                </div>

                <div class="intouchImgContainer">
                    <img src={resume_img} alt="" class="intouchImg"/>
                </div>

            </div>

    </section>
  )
}

export default Intouch