import React, { useState } from 'react'
import "./Nav.css"
import harm from "../../assets/harm.webp"


const Nav = () => {

    const [showNav, setShowNav] = useState(false)

    const handleBurger=()=>{
        setShowNav(!showNav)
    }

    
  return (
    <div class="fixNavContainer">
        <div class="navContainer">
    
            <div class="portNameContainer">
                <h1>HANAFI TAOFIQ</h1>
            </div>
            <div class="harmContainer">
                <img src={harm} alt='' class={showNav ? "harmBtnRotate" : "harmBtn"} onClick={handleBurger}/>
            </div>
    
            <nav class={showNav ?  "navItemsShow" : "navItems"}>
                <ul>
                    <li><a href="#front">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#serv">Services</a></li>
                    <li><a href="#port">Portfolio</a></li>
                    <li><a href="">Github</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
    
        </div>
    </div>
  )
}

export default Nav