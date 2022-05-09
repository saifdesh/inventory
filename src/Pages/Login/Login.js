import React, { useState } from 'react';
import app from '../../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';
import img from '../../google.png';
import './Login.css';
import { Link } from 'react-router-dom';


const auth = getAuth(app);

const Login = () => {
    const [user, setUser] = useState({})
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;

                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='form-container'>

            <div>
                <div >
                    <h4 className='form-title'>Login please ..</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control className='input-group' type="email" placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control className='input-group' type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button className='form-submit' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    For New user <Link className='form-link' to='/signup'>Plz create an account</Link>




                </div>
                {/* <h1> OR</h1>

                <div>
                    <Button className='form-submit' onClick={handleGoogleSignIn}>
                        <img src={img} /> Google sign in</Button>
                </div> */}

            </div>




        </div>
    );
};

export default Login;