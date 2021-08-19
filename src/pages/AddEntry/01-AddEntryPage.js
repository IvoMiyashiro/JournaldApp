import React from 'react'

import { AddEntryForm } from '../../components/forms/03-AddEntryForm';

import { 
    AddEntryScreen,
    Title,
    FormSection,
    LinkR,
} from './styles';

import {
    ArrowIcon,
} from '../../pages/Login/styles';

export const AddEntryPage = () => {
    return (
        <AddEntryScreen>
            <Title> Add New Note </Title>
            <FormSection>
                <AddEntryForm />
            </FormSection>
            <LinkR to="/dashboard">
                Dashboard
                <ArrowIcon />
            </LinkR>
        </AddEntryScreen>

    )
}
