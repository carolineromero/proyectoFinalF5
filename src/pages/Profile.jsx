import React from 'react'
import image from '../assets/img/perfil.png'
import Header from '../components/home/Header';
import ProfileForm from '../components/profiles/ProfileForm'



function Profile() {
  return (
    <>
    <Header/> 
<div className='ProfileForm md:container md:mx-auto box-border place-content-center '>
    
<div className="containerImg m-80-auto, py-30-20,pl-0,rounded-none object-cover place-items-center bg-violet-300">
 <img className="h-48 w-full object-cover md:h-full md:w-48 flex items-center rounded-l" src={image} alt=""/>
</div>
    <ProfileForm>
    </ProfileForm>
    </div>
    </>
  )
  
  
}


export default Profile