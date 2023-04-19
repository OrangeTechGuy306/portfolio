import React from 'react'
import "./Footer.css"
import rtw from "../../assets/rtw.png"
import rfb from "../../assets/rfb.png"
import rin from "../../assets/rin.png"

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
                    <li ><a href=""><img src={rfb} alt="" class="iconImg"/></a></li>
                    <li><a href=""><img src={rtw} alt="" class="iconImg"/></a></li>
                    <li><a href=""><img src={rin} alt="" class="iconImg"/></a></li>
                    <li><a href=""><img src="" alt=""/></a></li>
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