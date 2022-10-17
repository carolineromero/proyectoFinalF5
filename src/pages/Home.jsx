import React, { useState, useEffect } from 'react';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import Main from '../components/home/Main'

import logoSomosF5 from '../assets/img/header/somosF5-logoMorado.svg'
import BgMain from '../components/global/BgMain';


function Home(props) {




  return (


    <>
      <BgMain />
      <Header />
      <Hero />
      <Main />

    </>
    /*  <div className= 'relative'>
        <BgMain/>
         <header className='flex justify-between'>
           <img src={logoSomosF5} alt="" srcset="" />
           <button>--8</button>
         </header>
 
         <section>
           <h2>
             Hola Isabel
           </h2>
         
         </section>
 
         <main>
           <input type="text" />
         </main>
 
     </div> */
  )
}

export default Home