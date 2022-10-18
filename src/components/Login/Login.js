import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <h1 className='login-logo'>Login</h1>
            <form action="">
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" required />
                </div>
               <input className='btn-submit' type="submit" value="Login" />
            </form>
            <div className='someText'>
            <p>New to Ema-jon?<Link to="/signup">Create New Account</Link></p>
            </div>
            
        </div>
    );
};

export default Login;