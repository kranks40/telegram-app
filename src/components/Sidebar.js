import React from 'react';
import './Sidebar.css'
import SearchIcon from '@material-ui/icons/Search'
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import Thread from '../components/Thread';
import { PhoneOutlined, QuestionAnswerOutlined, Settings } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className='sidebarSearchIcon' />
                    <input placeholder='Search' className='sidebar__input'></input>
                </div>
                <IconButton variant='outlined' id='sidebar__button'>
                <BorderColorOutlinedIcon />
                </IconButton>
            </div>

            <div className="sidebar__thread">
                <Thread />
                <Thread />
                <Thread />
            </div>
            <div className="sidebar__bottom">
                <Avatar className='sidebar__bottom__avatar'/>
                <IconButton>
                    <PhoneOutlined/>
                </IconButton>
                <IconButton>
                    <QuestionAnswerOutlined/>
                </IconButton>
                <IconButton>
                    <Settings/>
                </IconButton>
            </div>
        </div>
    );
}

export default Sidebar;
