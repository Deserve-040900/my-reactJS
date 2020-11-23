import logo from './logo.svg';
import './App.css';

import TopBanner from './modules/Topbanner/topbanner';
import Slider from './modules/Slider/slider';
import Content from './modules/Content/content';
import Lastest from './modules/Lastest/lastest';
import Poster from './modules/Poster/poster';
import Xbox from './modules/Xbox/xbox';
import Footer from './modules/Footer/footer';
import Contact from './modules/Contact/contact';
import { useState } from 'react';

function App() {
  let xyz = 'ahihi';
  const[load_top_banner, SetLoadTopBanner] = useState(true);

  const handleUnMountTopBanner = () => {
    SetLoadTopBanner(false);
  }
  return (
    <>
    {
      (load_top_banner) ? <TopBanner title_page = {"Boylove "+"Store "+Math.round(Math.random()*100)} delete_me={handleUnMountTopBanner}/> : null
    }
    
    <Slider/>

    <Content/>

    <Lastest/>

    <Poster/>

    <Xbox/>

    <Contact/>

    <Footer/>

    </>
  );
}

export default App;