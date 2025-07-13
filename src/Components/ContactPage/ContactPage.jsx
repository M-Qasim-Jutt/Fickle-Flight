import React from 'react'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className='contact-page-main'>
        <img src="/src/assets/Images/Subscribe-section-background.png" alt="" />
      <div className="contact-page-container">
      <div className="contact-page-container-text">
        <span>subscribe to our newsletter</span>
        <p>Get weekly updates</p>
      </div>
      <div className="contact-page-container-contact">
        <div className="contact-page-container-contact-data">
            <div className="contact-page-container-contact-data-one">
                <p>Fill in your details to join the party!</p>
            </div>
            <div className="contact-page-container-contact-data-two">
                <input type="text" placeholder='Your Name' id='name-input'/>
                <input type="email" placeholder='Email address' id='email-input'/>
            </div>
            <div className="contact-page-container-contact-data-three">
              <button>SUBMIT</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactPage
