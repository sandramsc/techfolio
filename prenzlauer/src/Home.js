/* Designed & coded by Sandra Ashipala 20.03.2022 <https://github.com/sandramsc> */
import React from 'react';
import './Home.css';
import headerBanner from './images/header_banner.jpg';
import Product from './Product';
import imgOne from './images/img1.jpg';
import imgTwo from './images/img2.jpg';
import imgThree from './images/img3.jpg';
import imgFour from './images/img4.jpg';
import imgFive from './images/img5.jpg';
import imgSix from './images/img6.jpg';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src={headerBanner} alt='' />
            <div className='home_row'>
            <Product 
                    id='1617'
                    title="Samsung LC49RG90SSUXEN 24' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
                    price={1105.99} 
                    image={imgSix}
                    rating={5}                        
                        /> 
            </div>
            <div className='home_row'>
            <Product 
                    id='9101'
                    title="Samsung Note 49' Curved LED Gaming Monitor" 
                    price={299.99} 
                    image={imgThree}
                    rating={4}                        
                        /> 
                 <Product 
                    id='1213'
                    title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' 
                    price={102.98} 
                    image={imgFour}
                    rating={2}                        
                        /> 
                 <Product 
                    id='1415'
                    title='Apple iPad Pro (12.9-inch, Wi-Fi, 32GB) - Silver (6th Generation)' 
                    price={629.59} 
                    image={imgFive}
                    rating={4}                        
                        /> 
            </div>
            <div className='home_row'>
                <Product 
                    id='1234'
                    title='The Lean Startup: How Constant Innovation 
                        Creates Radically Successful Businesses PaperBack' 
                    price={11.99} 
                    image={imgOne}
                    rating={3}                        
                        />   
                 <Product 
                    id='5678'
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                    price={356.59} 
                    image={imgTwo}
                    rating={5}                        
                        /> 
            </div>
        </div>
    </div>
  )
}

export default Home;
