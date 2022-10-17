import React from 'react';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import Main from '../components/home/Main'
/* import Vector from "../assets/img/background/Vector.png" */


function Home() {
  return (
    <>  
  <Header/>
  <Hero/>
  <Main/>


{/*   <div className='absolute  top-0 -right-4 w-60 h-60 bg-purple-300 opacity-50 z-1 filter blur-3xl rounded-full'></div>

<div className='absolute bottom-0 -left-4 w-60 h-60 bg-grisly2F5 opacity-50 z-1 filter blur-3xl rounded-full'></div>
  
  <img className="absolute content-center -right-10 top-2/4 z-1 w-60 h-60 fiter blur-3xl opacity-50" src={Vector} alt=""/>
 */}

    </>
  )
}

export default Home