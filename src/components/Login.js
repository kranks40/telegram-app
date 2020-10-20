import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from '../utils/firebase';

function Login() {
    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
        
    }
    return (
        <div className='login'>
            <div className="login__telegram">
                <img 
                    src='' alt=''
                />
                <h1>Telegram</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
