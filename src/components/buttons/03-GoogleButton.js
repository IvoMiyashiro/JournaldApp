import React from 'react';

import google from '../../assets/images/logo-google.png';

import {
    GoogleBtn,
    GoogleLogo,
    GoogleText,
} from './styles';

export const GoogleButton = ({ 
    children,
    width,
    height,
}) => {
    return (
        <GoogleBtn
            height={ height }
            width={ width}
        >
            <GoogleLogo src={ google } alt="google" />
            <GoogleText> { children } </GoogleText>
        </GoogleBtn>
    )
}
