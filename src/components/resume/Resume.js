import React from 'react'
import "./Resume.css"
import { FaLaptopCode, FaFilePdf} from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";

// import graphics from "../../assets/pdf/hanafi_taofiq_GD.pdf"
// import mern from "../../assets/pdf/HANAFI_TAOFIQ_MERN.pdf"
// import rcn from "../../assets/pdf/hanafi_taofiq_RN.pdf"
// import web from "../../assets/pdf/HANAFI_TAOFIQ_WD.pdf"

const Resume = () => {
  return (
    <div  className="resumeSection">
        <h1>Resumes</h1>

        <div className='resumeContainer'>

            <div className='resumeCard'>
                    <FaLaptopCode size={50} color='orange'/>
                    <p>WEB DEVELOPER</p>
                    <a href={`/pdf/web_dev.pdf`} className='resumeLink'><FaFilePdf/> View Resume</a>
            </div>

            <div className='resumeCard'>
                    <AiOutlineMobile size={50} color='orange'/>
                    <p>REACT NATIVE DEVELOPER</p>
                    <a href={`/pdf/hanafi_toafiq_RN.pdf`} className='resumeLink'><FaFilePdf/> View Resume</a>
            </div>

            <div className='resumeCard'>
                    <AiOutlineMobile size={50} color='orange'/>
                    <p>FLUTTER DEVELOPER</p>
                    <a href={`/pdf/flutter.pdf`} className='resumeLink'><FaFilePdf/> View Resume</a>
            </div>

            <div className='resumeCard'>
                    <FaLaptopCode size={50} color='orange'/>
                    <p>FULL STACK DEVELOPER</p>
                    <a href={`/pdf/fullstack.pdf`} className='resumeLink'><FaFilePdf/> View Resume</a>
            </div>

            <div className='resumeCard'>
                    <FaLaptopCode size={50} color='orange'/>
                    <p>FULL STACK DEVELOPER (IOS, Android & Desktop)</p>
                    <a href={`/pdf/hanafi_taofiq_cp.pdf`} className='resumeLink'><FaFilePdf/> View Resume</a>
            </div>

            <div className='resumeCard'>
                    <FaLaptopCode size={50} color='orange'/>
                    <p>FULL STACK DEVELOPER (web & mobile)</p>
                    <a href={`/pdf/hanafi_taofiq_cp.pdf`} className='resumeLink'><FaFilePdf/> View Resume</a>
            </div>

        </div>

    </div>
  )
}

export default Resume