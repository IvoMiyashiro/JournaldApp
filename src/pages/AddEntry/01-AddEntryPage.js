import React from 'react'

import { AddEntryForm } from '../../components/forms/03-AddEntryForm';

import { 
    AddEntryScreen,
    Title,
    FormSection,
} from './styles';

export const AddEntryPage = () => {
    return (
        <AddEntryScreen>
            <Title> Add New Entry </Title>
            <FormSection>
                <AddEntryForm />  
            </FormSection>
        </AddEntryScreen>

    )
}
