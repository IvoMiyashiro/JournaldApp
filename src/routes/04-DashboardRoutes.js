import React from 'react';
import { 
    Switch,
    Route, 
    Redirect,
} from 'react-router-dom';

import { DashboardPage } from '../pages/Dashboard/01-DashboardPage';
import { AddEntryPage } from '../pages/AddEntry/01-AddEntryPage';
import { NotePage } from '../pages/Entry/01-NotePage';
import { EditEntryPage } from '../pages/EditEntry/01-EditEntryPage';
import { NotFoundPage } from '../pages/404/01-404';

export const DashboardRoutes = () => {
    return (
        <div>
            <Switch> 
                <Route exact path="/dashboard" component={ DashboardPage } />
                <Route exact path="/dashboard/add-entry" component={ AddEntryPage } />
                <Route exact path="/dashboard/note/edit/:note" component={ EditEntryPage } />
                <Route exact path="/dashboard/note/:note" component={ NotePage } />
                <Route exact path="/404" component={ NotFoundPage } />
                
                <Redirect to="/404" />
            </Switch>
        </div>
    )
}