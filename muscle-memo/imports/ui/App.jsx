import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Logout } from './Logout.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
    <Logout />
  </div>
);
