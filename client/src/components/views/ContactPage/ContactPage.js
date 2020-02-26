import React from 'react'
import { Icon } from 'antd';

function ContactPage() {
    return (
        <div className="contactpage">
            <div className="title" 
                style={{
                height: '80px', display: 'flex',
                flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', fontSize:'1rem'
            }}>
                <h1>Nous Contacter</h1>
           </div>
           <br />
           <br />
           <div className="Postal-adress"
           style={{
            display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center'
        }}>
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
