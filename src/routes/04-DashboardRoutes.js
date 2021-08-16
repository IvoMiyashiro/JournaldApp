import React from 'react';
import { 
    Switch,
    Route, 
    Redirect } from 'react-router-dom';

import { DashboardPage } from '../pages/Dashboard/01-DashboardPage';
import { AddEntryPage } from '../pages/AddEntry/01-AddEntryPage';
import { EntryPage } from '../pages/Entry/01-EntryPage';
import { EditEntryPage } from '../pages/EditEntry/01-EditEntryPage';
import { NotFoundPage } from '../pages/404/01-404';

export const DashboardRoutes = () => {
    return (
        <div>
            <Switch> 
                <Route exact path="/dashboard" component={ DashboardPage } />
                <Route exact path="/dashboard/add-entry" component={ AddEntryPage } />
                <Route exact path="/dashboard/edit" component={ EditEntryPage } />
                <Route exact path="/dashboard/entry" component={ EntryPage } />
                <Route exact path="/404" component={ NotFoundPage } />
                
                <Redirect to="/404" />
            </Switch>
        </div>
    )
}
