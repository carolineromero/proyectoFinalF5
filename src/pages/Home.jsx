import React from 'react'
import Search from '../components/Search'
import Profile from '../components/Profile'
import SearchComponent from '../components/SearchComponent'


function Home() {
  return (
    <>
      <Search/>
      <SearchComponent/>
      <Profile/>
    </>
  )
}

export default Home