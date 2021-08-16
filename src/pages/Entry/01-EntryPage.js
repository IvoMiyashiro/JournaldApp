import React from 'react';

import { EntryCard } from '../../components/cards/03-EntryCard';

import { 
    AddEntryScreen,
    Title,
    LinkR,
} from '../AddEntry/styles';
import {
    EntrySection
} from './styles';
import {
    ArrowIcon
} from '../Login/styles';

export const EntryPage = () => {
    return (
        <AddEntryScreen>
            <Title> ENTRY </Title>
            <EntrySection>
                <EntryCard />  
            </EntrySection>
            <LinkR to="/dashboard">
                Go Back
                <ArrowIcon />
            </LinkR>
        </AddEntryScreen>
    )
}