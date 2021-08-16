import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoutes = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route 
            { ...rest }
            component={ ( props ) => ( 
                ( !isAuth )
                    ? <Component { ...props } isAuthenticated={ isAuth }/>
                    : <Redirect to="/dashboard" />
            )}
        />
    )
}
