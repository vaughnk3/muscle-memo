import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from '../imports/ui/Login';
import { NotFound } from '../imports/ui/NotFound';
import { Signup } from '../imports/ui/Signup';
import { PrivateRoute, PublicRoute } from '../imports/ui/RouteDecisions';
//double check pathing


const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<PublicRoute><Login/></PublicRoute>}/>
      <Route path="/home" element={<PrivateRoute><App/></PrivateRoute>}/>
      <Route path="/signup" element={<PublicRoute><Signup/></PublicRoute>}/>
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
)


Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(routes);
});
