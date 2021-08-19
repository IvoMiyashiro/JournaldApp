import React from 'react';

import { EditEntryForm } from '../../components/forms/04-EditNoteForm';

import { 
    AddEntryScreen,
    Title,
    FormSection,
    LinkR,
} from '../AddEntry/styles';

import {
    ArrowIcon,
} from '../../pages/Login/styles'

export const EditEntryPage = () => {
    return (
        <AddEntryScreen>
            <Title> Edit Entry </Title>
            <FormSection>
                <EditEntryForm />  
            </FormSection>
            <LinkR to="/dashboard">
                Go Back
                <ArrowIcon />
            </LinkR>
        </AddEntryScreen>
    )
}
