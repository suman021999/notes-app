import React from 'react'
import "../index.css"
import Home from '../components/Home/Home'
import Side from '../components/Sidebar/Side'
import Dialog from '../components/Dialog/Dialog'

const MainPage = () => {
  return (
    <>
      <div className='mainpage'>
          
         <Side/>
          <Home/>
          {/* <Dialog/> */}
      </div>
    </>
  )
}

export default MainPage
