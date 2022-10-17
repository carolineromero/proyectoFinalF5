import React from 'react';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import Main from '../components/home/Main'
import BgMain from '../components/global/BgMain';



function Home() {
  return (
  <>
        <BgMain/>
        <Header/>
        <Hero/>
        <Main/>
  </> 
  )
}

export default Home