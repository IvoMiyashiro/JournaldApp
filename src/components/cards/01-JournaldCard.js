import moment from 'moment';
import React from 'react';

import JournaldImg from '../../assets/images/JournaldImg.jpg';

import {
    JournaldCardStyled,
    JournaldCardImgSection,
    JournaldCardInfoSection,
    JournaldCardImg,
    JournaldCardDate,
    JournaldCardTitle,
    JournaldCardText
} from './styles';

export const JournaldCard = ({ 
    img = JournaldImg,
    date,
    title,
    text 
}) => {

    const noteDate = moment( date ).format('LL');;

    return (
            <JournaldCardStyled to="/dashboard/entry">
                <JournaldCardImgSection>
                    <JournaldCardImg loading="lazy" src={ img } />
                </JournaldCardImgSection>
                <JournaldCardInfoSection>
                    <JournaldCardDate> { noteDate } </JournaldCardDate>
                    <JournaldCardTitle> { title } </JournaldCardTitle>
                    <JournaldCardText> { text } </JournaldCardText>
                </JournaldCardInfoSection>
            </JournaldCardStyled>
    )
}