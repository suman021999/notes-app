import React from 'react'
import Card from './Card'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import Bond from "../../../public/main.png"


const Home = () => {
  return (
    <>
    <div className="wrapee">
    <Navbar/>
      <div className='main'>
        <div>
            {/* <Card/>:() */}
            <div className='box'>
              <img src={Bond} alt="" />
              <h3>Pocket Notes</h3>
              <p>Send and receive messages without keeping your phone online.
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>

              <p className='chenge'><i className="ri-lock-fill"></i>end-to-end encrypted</p>
            </div>

           
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Home
