import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {
    const {signIn}=useContext(AuthContext);

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>console.error(error))

    }
    return (
        <div className='form-container'>
            <h1 className='login-logo'>Login</h1>
            <form onSubmit={handleSubmit}>
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