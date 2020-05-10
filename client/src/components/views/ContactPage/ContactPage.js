import React from 'react'
import {
    MailOutlined,
    LinkedinOutlined
  } from '@ant-design/icons';
import video from '../../../video/flower.mp4'

function ContactPage() {
    return (
        <div style={{ textAlign: 'center' }} className="fade-in" id="contact-page">
            <div>
                <h1 id="contact">ME CONTACTER</h1>
            </div>
            <br />
            <video className='contactVideo' autoPlay loop muted>
            <source src={video} type='video/mp4' />
            </video>
            <br />
            <div id="adress">
            <h2><MailOutlined /> PAR MAIL</h2>
            <p>mesic.canioni.jerome@gmail.com</p>
            <br />
            <h2>
            <LinkedinOutlined /> VIA LINKEDIN 
            </h2>
             <a href="https://www.linkedin.com/in/jerome-mesic/"> Par ici</a>
           </div>
        </div>
    )
}

export default ContactPage
