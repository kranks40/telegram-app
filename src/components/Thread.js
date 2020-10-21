import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setThread } from '../features/threadSlices';
import db from '../utils/firebase';
import './Thread.css';

function Thread({ id, threadName, message }) {
    const dispatch = useDispatch();
    const [ threadInfo, setThreadInfo ] = useState([]);

    useEffect(() => {
        db.collection('threads')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
        setThreadInfo(snapshot.docs.map((doc) => doc.data()))
        );
    }, [id]);


    return (
        <div className='thread' onClick={() =>
        dispatch(
            setThread({
                threadId: id,
                threadName: threadName,
             })
        )}>
            <Avatar src={threadInfo[0]?.photo}/>
            <div className='thread__details'>
                 <h3>{threadName}</h3>
                <p>{message}</p>
                <small className='thread__timestamp'>
                     {new Date(threadInfo[0]?.timestamp?.toDate()).toLocaleString()}                
                </small>
            </div>
        </div>
    );
}

export default Thread;
