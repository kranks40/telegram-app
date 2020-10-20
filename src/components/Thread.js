import { Avatar } from '@material-ui/core';
import React from 'react';
import './Thread.css';

function Thread() {
    return (
        <div className='thread'>
            <Avatar/>
            <div className='thread__details'>
                <h3>Message</h3>
                <p>This is the Info</p>
                <small className='thread__timestamp'>timestamp</small>
            </div>
        </div>
    );
}

export default Thread;
