import React from 'react'
import BgMain from '../components/global/BgMain';
import Header from '../components/home/Header';
import NewEmployer from '../components/new-employer/NewEmployer'
import LogIn from '../components/login/LogIn';
import axios from 'axios';
import { useState } from 'react';

function NewEmploy() {
  const [success, setSuccess] = useState(false);
  const userLoggedIn = () => {
    axios
      .get(
        "https://fichajefactoria-default-rtdb.europe-west1.firebasedatabase.app/empleados.json"
      )
      .then((res) => {
        const test = Object.keys(res.data);
        const diffears = test.map((a) => {
          if (a.length > 10) {
            setSuccess(true);
          }
          return a;
        });
      });
  };

  userLoggedIn();

  if (success) {
  return (
   <>
    <BgMain/>
    <Header/>
    <NewEmployer/>
   </>
  )
  
  }else{ return (<LogIn />);
}
}

export default NewEmploy