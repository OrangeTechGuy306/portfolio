import React from 'react'
import "./Resume.css"
import { FaLaptopCode} from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";

const Resume = () => {
  return (
    <div  className="resumeSection">
        <h1>Resumes</h1>

        <div className='resumeContainer'>
            <div className='resumeCard'>
                    <FaLaptopCode size={50} color='orange'/>
                    <p>WEB DEVELOPER</p>
                    <a href=''>View</a>
            </div>
            <div className='resumeCard'>
                    <AiOutlineMobile size={50} color='orange'/>
                    <p>MOBILE APP DEVELOPER</p>
                    <a href=''>View</a>
            </div>
            <div className='resumeCard'>
                    <FaLaptopCode size={50} color='orange'/>
                    <p>FULL STACK DEVELOPER</p>
                    <a href=''>View</a>
            </div>
        </div>

    </div>
  )
}

export default Resume