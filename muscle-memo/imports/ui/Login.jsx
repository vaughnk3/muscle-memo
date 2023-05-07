import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export const Login = () => {
    let navigate = useNavigate();
    const [errorState, setError] = useState('');
    const [formDataState, setFormData] = useState('');
    function submitForm(event){
        event.preventDefault();
        Meteor.loginWithPassword({email: formDataState.email}, formDataState.password, (errorCallBackObject) => {
            if (!!errorCallBackObject){
                console.log('Login callback error:', errorCallBackObject);
                setError(errorCallBackObject.reason);
            } else {
                console.log("User has been successfully logged in.")
                navigate("/home"); 
            }
        })
    } return (
        <>
            <h1>Sign in here</h1>
            {errorState ? <p>{errorState}</p> : undefined}
            <form onSubmit={submitForm}>
                <input type='email'
                value={formDataState.email}
                onChange={(e) => setFormData({...formDataState, email: e.target.value})}
                placeholder='Enter your email'/>
                <input type='password'
                value={formDataState.password}
                onChange={(e) => setFormData({...formDataState, password: e.target.value})}
                placeholder='Enter your password'/>
                <button>Login</button>
            </form>
            <Link to="/signup">Don't have an account? Make one here.</Link>
        </>
    )
}