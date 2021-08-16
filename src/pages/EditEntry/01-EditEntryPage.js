import React from 'react';

import { AddEntryForm } from '../../components/forms/03-AddEntryForm';

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
                <AddEntryForm />  
            </FormSection>
            <LinkR to="/dashboard">
                Go Back
                <ArrowIcon />
            </LinkR>
        </AddEntryScreen>
    )
}
