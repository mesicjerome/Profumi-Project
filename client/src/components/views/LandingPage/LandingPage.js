import React from 'react';
import video from '../../../video/flower1.mp4'


function LandingPage() {

   
    return (
        <div>
            <div style={{ textAlign: 'center' }} className="fade-in">
            <br/>
                <br/>
                <h2 id="begining">Bienvenue sur</h2>
                <h1 id="title">PROFUMI</h1>
                <div className="banner">
                    <video className='videoTag' autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                    </video>
                </div>
                <br/>
                <br/>
                <div id="wrapper">
                    <h3 id="discover">
                        <span id="span-landingPage"></span>
                    </h3>
                    
                </div>
                <br/>
                <h3 id="path" style={{ textAlign: 'center' }} > 
                Decouvrez notre <a href="/shop" > boutique en ligne</a>
                </h3>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <p style={{ textAlign: 'center' }} id="history">
                <h3 style={{ textAlign: 'center' }} id="subtitle">Un peu d'histoire</h3>
                <br/>
                Au départ, le parfum de niche décrivait principalement de jeunes Maisons de parfumerie qui tentaient l’aventure et qui, par définition étaient de taille modeste. Pour se démarquer des Maisons traditionnelles, celles-ci se devaient de proposer des fragrances signées, distinctives. Rapidement, un style « parfum de niche » ou « niche fragrance » s’est détaché : des parfums de caractère, proches de la matière première. On a vu apparaître de nombreux vétiver, ambres, cuirs, fleur d’oranger etc. Ce lien avec les ingrédients naturels donna aux Maisons de niche une image d’expertise très positive.
                <br/>
                <br/>
                Sur cette image positive, le marché du parfum de niche s’est développé. Les « niche fragrances » ont remis en cause la légitimité des Maisons traditionnelles, même les plus historiques, auxquelles l’amateur de parfum reconnaissait une véritable expertise. Par réaction, les grandes marques ont décidé de proposer elles-mêmes des parfums de niche, afin de rétablir leur appétence émoussée. Il faut dire qu’on était en pleine mondialisation de la parfumerie avec des « produits » pensés pour plaire à tous, à toutes, à la terre entière ! Les collections privées, exclusives, séries spéciales ont donc fleuri chez les grandes Maisons, concurrençant le parfum de niche, mimant même ses attributs : des parfums proposés sous forme de collections, un seul flacon pour toutes les fragrances, un caractère olfactif affirmé, des noms évocateurs de matières premières. Une manière habile de retrouver ce vernis altéré par la mondialisation qui eut cependant un effet inattendu : légitimer dans le sens inverse les créateurs de parfums de niche en tant que véritables Maisons de parfumerie.
                </p>
                <br/>  
            </div>
           
            
        </div>
         
    )
}

export default LandingPage
