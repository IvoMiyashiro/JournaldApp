import React from 'react';

import {
    AddJournald_,
    AddJournaldTitle,
    AddJournaldIcon,
} from './styles';

export const AddJournaldCard = () => {
    return (
        <AddJournald_ to="/dashboard/add-entry">
            <AddJournaldIcon />
            <AddJournaldTitle> Add Entry </AddJournaldTitle>
        </AddJournald_>
    )
}
