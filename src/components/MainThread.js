import { Avatar, IconButton } from '@material-ui/core';
import  MoreHoriz  from '@material-ui/icons/MoreHoriz';
import React from 'react';
import './MainThread.css';

function MainThread() {
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
            </div> 
            <IconButton>
                <MoreHoriz classname='mainthread__header__details'/>
            </IconButton>
        </div>
    );
}

export default MainThread;
