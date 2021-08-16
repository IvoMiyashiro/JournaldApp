import React from 'react';
import { 
    Switch,
    Route, 
    Redirect } from 'react-router-dom';

import { HomePage } from '../pages/Home/01-HomePage';
import { LoginPage } from '../pages/Login/01-LoginPage';
import { SignupPage } from '../pages/Signup/01-SignupPage';
import { NotFoundPage } from '../pages/404/01-404';

export const HomeRoutes = () => {
    return (
        <div>
            <Switch> 
                <Route exact path="/" component={ HomePage } />
                <Route exact path="/signup" component={ SignupPage } />
                <Route exact path="/login" component={ LoginPage } />
                <Route exact path="/404" component={ NotFoundPage } />
                
                <Redirect to="/404" />
            </Switch>
        </div>
    )
}
