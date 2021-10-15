import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from "../firebase/01-firebase-config";
import { login } from '../redux/actions/01-auth';
import { startLoadingNotes } from '../redux/actions/02-notes';

import { Navbar } from '../components/navbar/01-Navbar';
import { PublicRoutes } from './02-PublicRoutes';
import { PrivateRoutes } from './03-PrivateRoutes';
import { DashboardRoutes } from './04-DashboardRoutes';
import { HomeRoutes } from './05-HomeRoutes';

import { PublicSection } from './styles';
import { dark, light } from '../styles/02-theme';
import { ThemeProvider } from 'styled-components';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const [ theme, setTheme ] = useState( true );
    const [ isLoggedIn, setIsLoggedIn ] = useState( false );

    useEffect( ()=> {
        firebase.auth().onAuthStateChanged( async(user) => {
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ));
                setIsLoggedIn( true );
                dispatch( startLoadingNotes( user.uid ) );
            }
        })
    }, [ dispatch ]);
    
    return (
        <ThemeProvider theme={ theme ? dark : light}>
            <Router>
                <PublicSection>
                    <Navbar setTheme={ setTheme } isAuth={ isLoggedIn } setIsLoggedIn={ setIsLoggedIn }/>
                    <Switch>
                        <PrivateRoutes
                            path="/dashboard"
                            component={ DashboardRoutes }
                            isAuth={ isLoggedIn }
                        />
                        <PublicRoutes
                            path="/"
                            component={ HomeRoutes }
                            isAuth={ isLoggedIn }
                        />
                    </Switch>
                </PublicSection>
            </Router>
        </ThemeProvider>
    )
}