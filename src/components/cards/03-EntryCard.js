import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { ButtonPrimary } from '../buttons/01-ButtonPrimary';

import defaultImage from '../../assets/images/JournaldImg.jpg';

import { 
    EntryCardStyled,
    EntryCardImg,
    EntryCardDate,
    EntryCardTitle,
    EntryCardText,
    EntryCardButtonSection,
    EntryCardInfoSection
} from './styles';

export const EntryCard = () => {

    const { active } = useSelector( state => state.notes );
    const { id, date, title, body, url } = active;

    const noteDate = moment( date ).format('LL');

    return (
        <EntryCardStyled className="animate__animated animate__fadeIn">
            <EntryCardImg src={
                url !== ''
                    ?   url
                    :   defaultImage
            } alt="journald" />
            <EntryCardInfoSection>
                <EntryCardDate> { noteDate } </EntryCardDate>
                <EntryCardTitle> { title } </EntryCardTitle>
                <EntryCardText> { body } </EntryCardText>
            </EntryCardInfoSection>
            <EntryCardButtonSection>
                <ButtonPrimary 
                    children="Edit"
                    width=""
                    height="26px"   
                    to={`/dashboard/note/edit/${ id }`}
                />
            </EntryCardButtonSection>
        </EntryCardStyled>
    )
};