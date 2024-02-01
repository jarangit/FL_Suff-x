import React from 'react';
import { Route } from 'react-router';

export default (
    <Route>
        <Route path='/:lang?/' />
        <Route path='/works/:lang?' />
        <Route path='/works/:slug/:lang?' />
        <Route path='Thoughts/:lang?' />
        <Route path='/Thoughts/:slug/:lang?' />
        <Route path='culture/:lang?' />
        <Route path='careers/:lang?' />
        <Route path='/position/:slug/:lang?' />
        <Route path='contact/:lang?' />
        <Route path='services/:lang?' />
        <Route path='policy/:lang?' />
        <Route path='term/:lang?' />
    </Route>
);