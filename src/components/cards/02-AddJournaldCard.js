import React from 'react';

import {
    AddJournaldCardStyled,
    AddJournaldTitle,
    AddJournaldIcon,
} from './styles';

export const AddJournaldCard = () => {
    return (
        <AddJournaldCardStyled to="/dashboard/add-entry">
            <AddJournaldIcon />
            <AddJournaldTitle> Add Entry </AddJournaldTitle>
        </AddJournaldCardStyled>
    )
}