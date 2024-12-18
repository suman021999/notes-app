import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css"
import Dialog from '../Dialog/Dialog'
const Side = () => {
  const [isPopupVisible, setIsPopupVisible]=useState(false)
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  }

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupVisible(false)
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <>
      <div className='sidebar'>
          <div className='header'><p className='sip'>pocket notes</p></div>
          <div className='context'>
            {
              
            }
          </div>
          <div className='footer' onClick={()=>togglePopup()}>
         {/* {attached?<Dialog/>: null} */}
         {isPopupVisible ? <Dialog/> : " "}
         {isPopupVisible && <Dialog  ref={popupRef}/>}
        
            <i className="ri-add-line"></i></div>
      </div>
      
    </>
  )
}



export default Side
