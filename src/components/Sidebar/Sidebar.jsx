import React, { useState } from 'react'
import './Sidebar.css'
import {assets as sidebarAssets } from '../../assets/assets'

const Sidebar = () => {
  
    const [extended,setExtended]  = useState(false)



  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={sidebarAssets.menu_icon} alt=''/>
            <div className="new-chat">
                <img src={sidebarAssets.plus_icon} alt=''/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={sidebarAssets.message_icon} alt="" />
                    <p>What is react...</p>
                </div>
            </div>
            :null}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={sidebarAssets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={sidebarAssets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={sidebarAssets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar