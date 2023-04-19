import React from 'react'
import "./Contact.css"
import phone from "../../assets/phonecall.jpg"
import email from "../../assets/email.png"
import location from "../../assets/location.webp"
const Contact = () => {
  return (
    <section class="contactSection" id="contact">

<div class="contactInfo">
<div class="addressContainer">

    <div>
        <img src={phone} alt="" class="contactIcon"/>
    </div>

    <div>
        <h1>Give me a Call</h1>
        <span>+23490 3233 9903</span>
        <span>+23481 5983 2838</span>
    </div>

</div>

<div class="addressContainer">
    <div>
        <img src={email}alt="" class="contactIcon"/>
    </div>

    <div>
        <h1>Email me</h1>
        <span>ayodejiokoh@gmail.com</span>
    </div>
</div>


<div class="addressContainer">
    <div>
        <img src={location} alt="" class="contactIcon"/>
    </div>

    <div>
        <h1>Get in touch</h1>
        <span>Ilorin, Kwara state, Nigeria</span>
    </div>
</div>

</div>

    <div class="contactContainer">
            <h1>CONTACT ME</h1>
    <form>

        <div class="formInputContainer">
        <input type="text" class="input" placeholder="Enter your Email..."/>
    </div>

    <div class="formInputContainer">
        <input type="text" class="input" placeholder="Enter your Full Name..."/>
    </div>

    <div class="formInputContainer">
        <textarea class="inputDesc" cols="30" rows="10" placeholder='write your message here'></textarea>
    </div>

    <div class="formInputContainer">
        <input type="submit" class="inputBtn" value="Send message..."/>
    </div>

</form>
</div>

    </section>

  )
}

export default Contact