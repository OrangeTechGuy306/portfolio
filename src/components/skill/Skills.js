import React from 'react'
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5, AiFillApi } from 'react-icons/ai';
import { TbBrandTailwind  } from 'react-icons/tb';
import { FaReact  } from 'react-icons/fa';
import { DiMongodb, DiNodejsSmall } from 'react-icons/di';
import { SiDevexpress, SiDart, SiFlutter, SiAdobephotoshop, SiGraphql, SiFirebase, SiMysql,SiTypescript } from 'react-icons/si';
import "./Skill.css"



const Skills = () => {

  return (
    <section>

        <div id='skills'>
            <h1 className='skillHeader'>SKILLS</h1>
            <div className='flex-display-center-no-reverse'>
                <div className='skillsCard flex-display-center'>
                    <AiFillHtml5 color='orange' size={20}/> 
                    <p>HTML5</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <FaCss3Alt color='orange' size={20}/> 
                    <p>CSS3</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <IoLogoJavascript color='orange' size={20}/> 
                    <p>Javascript</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <FaReact color='orange' size={20}/> 
                    <p>React</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <FaReact color='orange' size={20}/> 
                    <p>React Native</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <DiMongodb color='orange' size={20}/> 
                    <p>MongoDB</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <SiDevexpress color='orange' size={20}/> 
                    <p>Express JS</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <DiNodejsSmall color='orange' size={20}/> 
                    <p>Node js</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <SiDart color='orange' size={20}/> 
                    <p>Dart</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <SiFlutter color='orange' size={20}/> 
                    <p>Flutter</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <AiFillApi color='orange' size={20}/> 
                    <p>REST API</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <SiGraphql color='orange' size={20}/> 
                    <p>GraphQL</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <SiFirebase color='orange' size={20}/> 
                    <p>Firebase</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <SiMysql color='orange' size={20}/> 
                    <p>SQL</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <SiTypescript color='orange' size={20}/> 
                    <p>Typescript</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <SiAdobephotoshop color='orange' size={20}/> 
                    <p>Photoshop</p>
                </div>
                <div className='skillsCard flex-display-center'>
                    <TbBrandTailwind color='orange' size={20}/> 
                    <p>tailwindCSS</p>
                </div>
            </div>
        </div>

    </section>
  )

}

export default Skills