import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {

        navigate('/inventory')

    }

    const handleCreateuser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password did not match')
            return
        }

        if (password.length < 6) {
            setError('Password must be 6 characters or more');
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div >
                <h4 className='form-title'>Signup please ..</h4>
                <Form onSubmit={handleCreateuser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control className='input-group' onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control className='input-group' onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Confirm Password</Form.Label> */}
                        <Form.Control className='input-group' onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <p style={{ color: 'red' }}>{error}</p>

                    <Button className='form-submit' variant="primary" type="Signup">
                        SignUp
                    </Button>
                </Form>
                Already Have an account?  <Link className='form-link' to='/login'>Plz Login</Link>




            </div>



        </div>
    );
};

export default Signup;