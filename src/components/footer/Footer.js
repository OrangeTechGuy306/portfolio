import React from 'react'
import "./Footer.css"

import { BsFacebook, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <section class="footerSection">

        <footer>

            <div class="footerPortName">
                <h1>Hanafi Taofiq</h1>
                <h4>Software Developer</h4>
            </div>

            <div class="footerPortIcons">
                <ul>
                    <li >
                        <a href="https://web.facebook.com/muhammed.taofiq.16" target='_blank'>
                            <BsFacebook color='orange' size={20}/> 
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/OrangeTechguy" target='_blank'>
                            <FaTwitter color='orange' size={20}/>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.linkedin.com/in/hanafi-taofiq-b6345a229
                        " target='_blank'>
                            <AiFillLinkedin color='orange' size={20}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+2349032339903"><img src="" alt=""/>
                            <BsWhatsapp color='orange' size={20}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/orangetechguy306" target='_blank'><img src="" alt=""/>
                            <BsGithub color='orange' size={20}/>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footercv">
                <a href="">Download my CV</a>
            </div>
            
        </footer>

    </section>
  )
}

export default Footer