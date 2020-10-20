import React from 'react';
import './Telegram.css';
import Sidebar from '../components/Sidebar';
import MainThread from '../components/MainThread';



function Telegram() {
    return (
        <div className='telegram'>
            <Sidebar />
            <MainThread/>
            
        </div>
    );
}

export default Telegram;
