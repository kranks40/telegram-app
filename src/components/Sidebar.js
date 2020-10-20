import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import Thread from '../components/Thread';
import { PhoneOutlined, QuestionAnswerOutlined, Settings } from '@material-ui/icons';
import db, { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser)
    const [ threads, setThreads ] = useState([]);

    useEffect(() => {
        db.collection('threads').onSnapshot((snapshot) => setThreads(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))))
    }, []);

    const addThread =() => {
        const threadName = prompt('Enter a thread name?');
        if(threadName) {
            db.collection('threads').add({
                threadName: threadName,
            })
        }
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className='sidebarSearchIcon' />
                    <input placeholder='Search' className='sidebar__input'></input>
                </div>
                <IconButton variant='outlined' id='sidebar__button'>
                <BorderColorOutlinedIcon  onClick={addThread}/>
                </IconButton>
            </div>

            <div className="sidebar__thread">
                {threads.map(({id, data: {threadName}}) => (
                    <Thread key={id} id={id} threadName={threadName}/>
                ))}
            </div>
            <div className="sidebar__bottom">
                <Avatar className='sidebar__bottom__avatar' onClick={() => auth.signOut()} />
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
