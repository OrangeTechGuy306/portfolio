import React from 'react'
import "./Resume.css"
import { FaLaptopCode} from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import {Link} from "react-router-dom"

import graphics from "../../assets/pdf/hanafi_taofiq_GD.pdf"
import mern from "../../assets/pdf/HANAFI_TAOFIQ_MERN.pdf"
import rcn from "../../assets/pdf/hanafi_taofiq_RN.pdf"
import web from "../../assets/pdf/HANAFI_TAOFIQ_WD.pdf"

const Resume = () => {
  return (
    <div  className="resumeSection">
        <h1>Resumes</h1>

        <div className='resumeContainer'>

            <div className='resumeCard'>
                    <FaLaptopCode size={50} color='orange'/>
                    <p>WEB DEVELOPER</p>
                    <a href={`${web}`}>View</a>
            </div>

            <div className='resumeCard'>
                    <AiOutlineMobile size={50} color='orange'/>
                    <p>MOBILE APP DEVELOPER</p>
                    <a href={`${rcn}`}>View</a>
            </div>

            <div className='resumeCard'>
                    <FaLaptopCode size={50} color='orange'/>
                    <p>FULL STACK DEVELOPER</p>
                    <a href={`${mern}`}>View</a>
            </div>

            <div className='resumeCard'>
                    <FaLaptopCode size={50} color='orange'/>
                    <p>GRAPHICS DESIGN</p>
                    <a href={`${graphics}`}>View</a>
            </div>

        </div>

    </div>
  )
}

export default Resume