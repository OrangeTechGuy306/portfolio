import React from 'react'
import "./About.css"
import resume_img from "../../assets/avector.png"
import Fade from 'react-reveal';

const About = () => {
    
  return (

    <section class="aboutSection" id="about">
           
        <div class="aboutContainer">

                <Fade left>
                    <div class="aboutImg">
                            <img src={resume_img} alt="" class="frontImg"/>
                    </div>
                </Fade>
                
                    <div class="aboutTextContainer">
                    <h1>ABOUT ME</h1>
                    <p>Dynamic and innovative professional with 4+ years of invaluable hands-on experience in handling several simulteneous creative design projects, concept creation, graphics design, motion graphics and web design. Equipped with the ability to escalate brand awareness by utilizing skills gained in the creative industry, being able to identify opportunities, overcome objections, build long-term mutually beneficial relationships with vendors, workforce and clients. establishing a successful and lucrative company</p>

                            <div class="otherAboutInfo">
                                <div class="expContainer">
                                    <h2>04+</h2>
                                    <span>Years of experience</span>
                                </div>

                                <div class="expContainer">
                                    <h2>4+</h2>
                                    <span>Completed Projects</span>
                                </div>

                                <div class="expContainer">
                                    <h2>2+</h2>
                                    <span>Companies worked</span>
                                </div>

                            </div>
                            <div class="downloadCvContainer">
                                <a href="">Download my CV</a>
                            </div>
                
                    </div>
              

        </div>
    </section>

  )
}

export default About