import React from 'react';

import { ButtonPrimary } from '../buttons/01-ButtonPrimary';

import img from '../../assets/images/JournaldImg.jpg';

import { 
    EntryCardStyled,
    EntryCardImg,
    EntryCardDate,
    EntryCardTitle,
    EntryCardText,
    EntryCardButtonSection,
    EntryCardInfoSection
} from './styles';

export const EntryCard = ({ data }) => {
    return (
        <EntryCardStyled>
            <EntryCardImg src={ img } alt="journald" />
            <EntryCardInfoSection>
                <EntryCardDate> 14 Ago. 2021 </EntryCardDate>
                <EntryCardTitle> Journald Title </EntryCardTitle>
                <EntryCardText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit ipsum magni sequi, reiciendis amet aspernatur ab architecto iure adipisci eius nesciunt esse alias eaque illo molestiae. Vel, quasi voluptatibus!</EntryCardText>
            </EntryCardInfoSection>
            <EntryCardButtonSection>
                <ButtonPrimary 
                    children="Edit"
                    width=""
                    height="28px"
                    to="/dashboard/edit"
                />
            </EntryCardButtonSection>
        </EntryCardStyled>
    )
};