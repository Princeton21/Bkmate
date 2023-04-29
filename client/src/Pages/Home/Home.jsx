import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const Home = (props) => {
  return (
    <>
        <Navbar onShowCart={ShowCartHandler}/>
    </>
  )
}

export default Home