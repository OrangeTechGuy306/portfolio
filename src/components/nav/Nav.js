import React, { useState } from 'react'
import "./Nav.css"
import harm from "../../assets/harm.webp"
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen } from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaBorderStyle } from 'react-icons/fa';
import {RiServiceLine } from 'react-icons/ri';
import { FiPhoneCall } from 'react-icons/fi';


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
                    <li><a href="#front"><AiOutlineHome/> Home</a></li>
                    <li><a href="#about"><AiOutlineUser/> About</a></li>
                    <li><a href="#skill"><FaBorderStyle/> Skills</a></li>
                    <li><a href="#serv"><RiServiceLine/> Services</a></li>
                    <li><a href="#port"><AiOutlineFolderOpen/> Portfolio</a></li>
                    <li>
                        <div className='navLinkContainer'>
                            <a href="https://github.com/orangetechguy306" target='_blank'>
                               <BsGithub/> Github
                            </a>
                        </div>
                    </li>
                    <div className='navLinkContainer'>
                        <li>
                            <a href="#contact">
                            <FiPhoneCall/>  Contact
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
    
        </div>
    </div>
  )
}

export default Nav