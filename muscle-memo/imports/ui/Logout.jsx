import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export const Logout = () => {
    let navigate = useNavigate();
    function logoutCallback() {
        navigate("/login"); //TODO: Set up signin route for BrowserRouter
    }

    function onLogout () {
        Accounts.logout(logoutCallback);
        console.log('User has been successfully logged out.')
    } return (
        <>
            <button onClick={onLogout}>Logout</button>
        </>
    )
}