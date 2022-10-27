import React from 'react'
import BgMain from '../components/global/BgMain';
import Header from '../components/home/Header';
import NewEmployer from '../components/new-employer/NewEmployer'
import LogIn from '../components/login/LogIn';
import axios from 'axios';
import { useState } from 'react';

function NewEmploy() {

  return (
   <>
    <BgMain/>
    <Header/>
    <NewEmployer/>
   </>
  )
}

export default NewEmploy