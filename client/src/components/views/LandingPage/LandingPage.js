import React from 'react'

import { Icon } from 'antd';

function LandingPage() {


    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>Bienvenue sur Profumi <Icon type="heart" /></h2>
                <p>Decouvrez des parfums de niche ou de designer souvent méconnus du grand public</p>
                <br/>
                <br/>
                <br/>
                <h3>Visitez notre <a href="/shop" >boutique en ligne</a></h3>
            </div>

        </div>
        
    )
}

export default LandingPage
