import React, { useEffect, useState } from 'react'
import "./Portfolio.css"
import img from "../../assets/front.jpg"
// import { Carousel } from "react-configurable-carousel";
import { StackerSlide, StackerSlider } from "react-stacker-loaded";
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";


const Portfolio = () => {

  const [width, setWidth] = useState(false)

  const makeResponsive = ()=>{
    window.addEventListener("scroll",()=>{
      if( window.pageXOffset > 500) {
        setWidth(true)
      } else{
        setWidth(false)
      } 
    })
  }

  useEffect(()=>{
    makeResponsive()
  },[])

  return (
    <section class="portfolioSection" id="port">
        
    <div class="portfolioContainer">
    <h1>Portfolio</h1>
    <p>My Recent Works</p>

       <StackerSlider
       infiniteLoop={true}
       slideWidth= {"500px"}
       slideHeight={"500px"}
       dots={true}
      >

  
        <StackerSlide>
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
        </StackerSlide>

        <StackerSlide>
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
        </StackerSlide>

        <StackerSlide>
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
        </StackerSlide>

      </StackerSlider> 
    
  </div>

    </section>
  )
}


export default Portfolio