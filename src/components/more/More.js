import React from 'react'
import "./More.css"
import more from "../../assets/morevector.png"

const More = () => {

    

  return (
    <section>
        <div className='moreContainer'>
    
            <div className="moreAboutTextContainer">
                <h1>MORE ABOUT ME...</h1>
                <p>With a strong background in MERN stack development and a genuine passion for creating innovative solutions, I am confident in my ability to contribute to your company’s success and growth.</p>

                <p> hold a Bachelor’s degree (not in a related field) and have over 09+ years of experience in the field. In my previous role at ASYNC TECHNOLOGY, I successfully work with a team of developers in designing and implementing web applications for various clients, ensuring timely deliveries and exceeding expectations. My expertise lies in working with JavaScript, React Native, Dart and Flutter, as well as utilizing cutting-edge frameworks like React and Node.js.</p>I
                
                <p>I am particularly skilled in responsive design, API integration, and implementing robust security measures. I am dedicated to staying up-to-date with industry trends and advancements, ensuring that my work stays flexible and relevant in a constantly evolving landscape. Furthermore, I have experience working in Agile environments, enabling me to efficiently adapt to changing requirements, as well as collaborating effectively within cross-functional teams.
                </p>
                
                <p>I am excited about the opportunity to bring my skills and experience to your dynamic team and contribute to the ongoing success of your projects. Thank you for considering my application. I look forward to the opportunity to discuss further how my expertise can benefit your organization.</p>
                <p>
                    Sincerely,
                </p>
            </div>

            <div className=''>
                <img src={more} alt="" className='moreImg'/>
            </div>
          
        </div>
    </section>
  )
}

export default More