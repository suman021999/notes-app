import React, { useState } from 'react'
import "./Diglog.css"
const Dialog = () => {

  const [cpiker,setCpiker]=useState("")
  return (
    <>
      
      <div className="diglog">
        <h3 className='crp'>Create New group</h3>
        <div className='fbox'>
        <label id='grp' className='gname'>Group Name</label>
        <input type="text" id='grp' className='input' />
        </div>

        <div className='wrap'>
        <h4 className='colorbox'>Choose colour</h4>
        <div className='flb'>
            <div className="cl1" onClick={()=>cpiker()}></div>
            <div className="cl2" onClick={()=>cpiker()}></div>
            <div className="cl3" onClick={()=>cpiker()}></div>
            <div className="cl4" onClick={()=>cpiker()}></div>
            <div className="cl5" onClick={()=>cpiker()}></div>
            <div className="cl6" onClick={()=>cpiker()}></div>
        </div>
        </div>
        <button className='create'>Create</button>

      </div>
      
    </>
  )
}

export default Dialog
