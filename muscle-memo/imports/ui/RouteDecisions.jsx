import React from 'react';
import { Navigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export const PublicRoute=({children}) => {
    if(!!Accounts.userId()){
        return <Navigate to="/home" replace/>
    }
    return children;
}

export const PrivateRoute=({children}) => {
    if(!Accounts.userId()) {
        return <Navigate to="/login" replace/>
    }
    return children; 
}