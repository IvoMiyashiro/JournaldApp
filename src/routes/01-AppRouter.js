import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import { dark, light } from '../styles/02-theme';

import { Navbar } from '../components/navbar/01-Navbar';
import { HomePage } from '../pages/Home/01-HomePage';
import { LoginPage } from '../pages/Login/01-LoginPage';
import { SignupPage } from '../pages/Signup/01-SignupPage';
import { DashboardPage } from '../pages/Dashboard/01-DashboardPage';
import { AddEntryPage } from '../pages/AddEntry/01-AddEntryPage';
import { EntryPage } from '../pages/Entry/01-EntryPage';
import { ThemeProvider } from 'styled-components';

import { PublicSection } from './styles';

export const AppRouter = () => {

    const [ theme, setTheme ] = useState( true );
    
    return (
        <ThemeProvider theme={ theme ? dark : light}>
            <Router>
                <div>
                    <Switch>
                        <PublicSection>
                            <Navbar setTheme={ setTheme } />
                            <Route exact path="/" component={ HomePage } />
                            <Route exact path="/signup" component={ SignupPage } />
                            <Route exact path="/login" component={ LoginPage } />
                            <Route exact path="/dashboard" component={ DashboardPage } />
                            <Route exact path="/dashboard/add-entry" component={ AddEntryPage } />
                            <Route exact path="/dashboard/:entry" component={ EntryPage } />
                        </PublicSection>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    )
}