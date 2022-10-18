import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import "./Signup.css";

const Signup = () => {
    const [error,setError]=useState(null);
    const {createUserEmailAndPassword}=useContext(AuthContext);
    console.log(createUserEmailAndPassword);
    const handleSubmit=(event)=>{ 
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        if(password.length <6){
            setError("Password Should be 6 character or more then");
            return;
        }
        if(password !==confirm){
            setError('Password did not match');
            return;
        }
        createUserEmailAndPassword(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error("error",error)
        })

    }
    return (
        <div className='form-container'>
            <h1 className='login-logo'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
               <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <span className='error-text'>{error}</span>
            <div className='someText'>
            <p>Already Have an account?<Link to="/login">Login</Link></p>
            </div>
            
        </div>
    );
};

export default Signup;