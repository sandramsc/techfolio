/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
import NavBar from '../components/NavBar';
import Promotion from '../components/PromotionBanner';
import Slider from '../components/Slider';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';
import CopyRightText from '../components/CopyrightText';

const Home = () => {
  return (
     <div className="App">
    <Promotion />
     <NavBar />
     <div className="main">
     <Slider />
     <Newsletter />
     <Footer />
     <CopyRightText />
     </div>
     </div>
  )
}

export default Home;