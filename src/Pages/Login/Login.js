import React, { useState } from 'react';
import app from '../../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import img from '../../google.png';


const auth = getAuth(app);

const Login = () => {
    const [user, setUser] = useState({})
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <h2>this login</h2>

            <Button onClick={handleGoogleSignIn}>
                <img src={img} /> Google sign in</Button>
            <p>Name: {user.displayName}</p>
            <img src={user.photoURL} height="30" width="30" />


        </div>
    );
};

export default Login;