import React from 'react'
import { Icon } from 'antd';

function ContactPage() {
    return (
        <div style={{ textAlign: 'center' }} className="fade-in">
            <div>
                <h1 id="contact">Nous Contacter</h1>
           </div>
           <br />
           <div id="adress">
            <h2>Notre adresse</h2>
            <p>20 rue du Cheval blanc</p>
            <p>95 100</p>
            <p>Argenteuil</p>
            <br />
            <h2>Notre email</h2>
            <p>Profumi-Store@gmail.com</p>
            <br />
            <h2>
                Joindre un conseiller
                <Icon type="phone" />
            </h2>
            <p>0815 77 78 30</p>
           </div>
        </div>
    )
}

export default ContactPage
