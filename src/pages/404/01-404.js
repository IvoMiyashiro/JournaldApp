import React from 'react';

import svg from '../../assets/svgs/404.svg';
import { ButtonPrimary } from '../../components/buttons/01-ButtonPrimary';

import {
    NotFoundScreen,
    Title,
    SubTitle,
    NotFoundSvg,
} from './styles';

export const NotFoundPage = () => {
    return (
        <NotFoundScreen>
            <Title> 404 </Title>
            <br />
            <SubTitle> Page not found </SubTitle>
            <NotFoundSvg src={ svg } alt="Error-404" />
            <ButtonPrimary 
                children="Go Back"
                to="/"
            />
        </NotFoundScreen>
    )
}
