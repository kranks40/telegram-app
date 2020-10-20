import { Avatar, IconButton } from '@material-ui/core';
import { SendRounded, TimerOutlined } from '@material-ui/icons';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import  MoreHoriz  from '@material-ui/icons/MoreHoriz';
import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import './MainThread.css';
import firebase from 'firebase'
import db from '../utils/firebase'
import { useSelector } from 'react-redux';
import { selectThreadId, selectThreadName } from '../features/threadSlices';
import { selectUser } from '../features/userSlice';
import Message from './Message';

function MainThread() {
    const [ input, setInput ] = useState('');
    const [messages, setMessages ] = useState([])
    const threadName = useSelector(selectThreadName);
    const threadId = useSelector(selectThreadId);
    const user = useSelector(selectUser);

    useEffect(() => {
        if(threadId) {
            db.collection('threads')
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
            setMessages(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
            );
        }
               
    }, [threadId]);

    const sendMessage = (event) => {
        event.preventDefault();
        db.collection('threads').doc(threadId).collection('messages').add({
        timestamp: firebase.firstore.FieldValue.serverTimestamp(),
        message: input,
        uid: userEvent.uid,
        photo: userEvent.photo,
        email: userEvent.email,
        displayName: user.displayName,
    })

        setInput('')
    };
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
                <form>
                <input placeholder='Write a message...' type='test' value={input} onChange={(e) => setInput(e.target.value)}></input>
                <IconButton>
                    <TimerOutlined/>
                </IconButton>
                <IconButton onClick={sendMessage}>
                    <SendRounded/>
                </IconButton>
                <IconButton>
                    <MicNoneOutlinedIcon/>
                </IconButton>
                </form>
               
            </div>
        </div>
    );
}

export default MainThread;
