import { Avatar, IconButton } from '@material-ui/core';

import  MoreHoriz  from '@material-ui/icons/MoreHoriz';
import React, { useState } from 'react';
import './MainThread.css';

function MainThread() {
    const [ input, setInput ] = useState('')
    const sendMessage = (event) => {
        event.preventDefault();

        setInput('')
    }
    return (
        <div className='mainthread'>
           <div className="mainthread__header">
               <div className="mainthread__header__contents">
                   <Avatar/>
                   <div className="mainthread__header__contents__info">
                       <h4>Thread Name</h4>
                       <h5>Last Seen</h5>
                   </div>
               </div>
               <IconButton>
                <MoreHoriz className='mainthread__header__details'/>
            </IconButton>
            </div> 
            <div className="mainthread__messages"></div>
            <div className="mainthread__input">
                <input placeholder='Write a message...' type='test' value={input} onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    );
}

export default MainThread;
