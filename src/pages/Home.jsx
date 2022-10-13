import React from 'react';
import BtnRegistroEntrada from '../components/home/BtnRegistroEntrada';
import Header from '../components/home/Header';
import Name from '../components/home/Name'
import ProgressBar from '../components/home/ProgressBar';
import WeeksDays from '../components/home/WeeksDays';


function Home() {
  return (
    <>  
  <Header/>
  <Name/>
  <div className="flex justify-center flex-col md">
  <WeeksDays/>
  {/* <ProgressBar/>  */}
  <BtnRegistroEntrada/>
  </div>
    </>
  )
}

export default Home