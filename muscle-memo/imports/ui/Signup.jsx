import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export const Signup = () => {
    let navigate = useNavigate();
    const [errorState, setError] = useState('');
    const [formDataState, setFormData] = useState({
        email: "",
        password: ""
    })
    function submitForm(event){
        event.preventDefault();
        Accounts.createUser({email:formDataState.email, password:formDataState.password}, (errorCallBackObject) => {
            if (!!errorCallBackObject){
                console.log("Signup callback error:", errorCallBackObject);
                setError(errorCallBackObject.reason);
            } else {
                console.log("User has been successfully signed up.")
                navigate("/home"); 
            }
        });
    } return (
        <>
            <h1>Make an account</h1>
            {errorState ? <p>{errorState}</p> : undefined}
            <form onSubmit={submitForm}>
                <input 
                type='email'
                value={formDataState.email}
                onChange={(e) => setFormData({...formDataState, email: e.target.value})}
                placeholder='Enter your email address'/>
                <input
                type='password'
                value={formDataState.password}
                onChange={(e) => setFormData({...formDataState, password: e.target.value})}
                placeholder='Enter a password'/>
                <button>Create Account</button>
            </form>
            <Link to="/login">Already have an account? Sign in here.</Link>
        </>
    )

}