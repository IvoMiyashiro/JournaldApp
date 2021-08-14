import React, { lazy } from 'react';

import JournaldImg from '../../assets/images/JournaldImg.jpg';

import {
    JournaldCard_,
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

    return (
            <JournaldCard_ to="/dashboard">
                <JournaldCardImgSection>
                    <JournaldCardImg loading="lazy" src={ img } />
                </JournaldCardImgSection>
                <JournaldCardInfoSection>
                    <JournaldCardDate> { date } </JournaldCardDate>
                    <JournaldCardTitle> { title } </JournaldCardTitle>
                    <JournaldCardText> { text } </JournaldCardText>
                </JournaldCardInfoSection>
            </JournaldCard_>
    )
}