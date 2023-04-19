import React from 'react'
import "./Services.css"
import imgOne from "../../assets/front.jpg"
import imgTwo from "../../assets/secon.jpg"
import imgThree from "../../assets/back.avif"
import imgFour from "../../assets/destk_app.webp"
import imgFive from "../../assets/MOB_APP.webp"
import { StackerSlide, StackerSlider } from "react-stacker-loaded";

const Services = () => {

  return (
    <section class="services" id="serv">
    <h1>My Services</h1>

    <div class="servicesContainer">

    <StackerSlider 
    infiniteLoop={true} 
    dots={true}  
    slideHeight={"600px"}
    >
                <StackerSlide>
                    <div class="serviceBox">
                        <div class="serviceImgContainer">
                            <img src={imgOne} alt="" class="serviceImg"/>
                        </div>
                        <div class="serviceText">
                            <h3>GRAPHICS DESIGN</h3>
                            <h4>My Design Process</h4>
                            <ul>
                                <li>Research</li>
                                <li>Design</li>
                                <li>Implementation</li>
                                <li>Evaluation</li>
                            </ul>
                            <div class="boxFooter"></div>
                        </div>
                    </div>
                </StackerSlide>

                <StackerSlide>
                    <div class="serviceBox">
                        <div class="serviceImgContainer">
                            <img src={imgTwo} alt="" class="serviceImg"/>
                        </div>
                        <div class="serviceText">
                            <h3>WEB DESIGNER</h3>
                            <h4>This includes:</h4>
                            <ul>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Other CSS/JS libraries</li>
                            </ul>
                            <div class="boxFooter"></div>
                        </div>
                    </div>
                </StackerSlide>

                <StackerSlide>
                    <div class="serviceBox">
                        <div class="serviceImgContainer">
                            <img src={imgThree} alt="" class="serviceImg"/>
                        </div>
                        <div class="serviceText">
                            <h3>BACKEND DEVELOPER</h3>
                            <h4>This includes:</h4>
                            <ul>
                                <li>NodeJs</li>
                                <li>Firebase</li>
                                <li>SQL</li>
                                <li>MongoDb</li>
                            </ul>
                            <div class="boxFooter"></div>
                        </div>
                    </div>
                </StackerSlide>

                <StackerSlide>
                    <div class="serviceBox">
                        <div class="serviceImgContainer">
                            <img src={imgFour} alt="" class="serviceImg"/>
                        </div>
                        <div class="serviceText">
                            <h3>MOBILE APP DEV</h3>
                            <h4>This includes:</h4>
                            <ul>
                                <li>React Native</li>
                                <li>Flutter</li>
                                <li>Firebase</li>
                                <li>NodeJs</li>
                            </ul>
                            <div class="boxFooter"></div>
                        </div>
                    </div>
                </StackerSlide>

                <StackerSlide>
                    <div class="serviceBox">
                        <div class="serviceImgContainer">
                            <img src={imgFive} alt="" class="serviceImg"/>
                        </div>
                        <div class="serviceText">
                            <h3>DESKTOP APP DEV</h3>
                            <h4>This includes:</h4>
                            <ul>
                                <li>Electron</li>
                                <li>Flutter</li>
                                <li>Firebase</li>
                                <li>NodeJs</li>
                            </ul>
                            <div class="boxFooter"></div>
                        </div>
                    </div>
                </StackerSlide>

    </StackerSlider>
        
        </div>

    </section>

  )
}

export default Services