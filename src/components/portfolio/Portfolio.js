import React, { useEffect, useState } from 'react'
import "./Portfolio.css"
import img from "../../assets/front.jpg"
import { StackerSlide, StackerSlider } from "react-stacker-loaded";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";


const Portfolio = () => {


  return (
    <section class="portfolioSection" id="port">
        
    <h1>Portfolio</h1>
    <p>My Recent prjects</p>
    
    <div class="portfolioContainer">
    
        <Flicking circular={true} align={"center"}>

          <div class="card">
            <div class="cardImgContainer">
            <img src={img} alt="" class="cardImg"/>
            </div>
            <div class="cardTextContainer">
                <h1>Ecommerce Website</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim fugiat nihil, eos nostrum quas, harum ipsam, officiis quidem perferendis debitis eius aliquid! Similique, minus sed. Eos quo praesentium facere!</span>
            
                <div>
                    <button class="demoBtn">
                      <a href="" class="demoLink">Demo</a>
                    </button>
                </div>
            
            </div>
          </div>

          <div class="card">
            <div class="cardImgContainer">
            <img src={img} alt="" class="cardImg"/>
            </div>
            <div class="cardTextContainer">
                <h1>Ecommerce Website</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim fugiat nihil, eos nostrum quas, harum ipsam, officiis quidem perferendis debitis eius aliquid! Similique, minus sed. Eos quo praesentium facere!</span>
            
                <div>
                    <button class="demoBtn">
                      <a href="" class="demoLink">Demo</a>
                    </button>
                </div>
            
            </div>
          </div>

          <div class="card">
            <div class="cardImgContainer">
            <img src={img} alt="" class="cardImg"/>
            </div>
            <div class="cardTextContainer">
                <h1>Ecommerce Website</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim fugiat nihil, eos nostrum quas, harum ipsam, officiis quidem perferendis debitis eius aliquid! Similique, minus sed. Eos quo praesentium facere!</span>
            
                <div>
                    <button class="demoBtn">
                      <a href="" class="demoLink">Demo</a>
                    </button>
                </div>
            
            </div>
          </div>

          <div class="card">
            <div class="cardImgContainer">
            <img src={img} alt="" class="cardImg"/>
            </div>
            <div class="cardTextContainer">
                <h1>Ecommerce Website</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim fugiat nihil, eos nostrum quas, harum ipsam, officiis quidem perferendis debitis eius aliquid! Similique, minus sed. Eos quo praesentium facere!</span>
            
                <div>
                    <button class="demoBtn">
                      <a href="" class="demoLink">Demo</a>
                    </button>
                </div>
            
            </div>
          </div>
        </Flicking> 
    
    </div>

    </section>
  )
}


export default Portfolio