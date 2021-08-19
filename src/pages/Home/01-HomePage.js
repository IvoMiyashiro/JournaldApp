import React from 'react';
import { ButtonPrimary } from '../../components/buttons/01-ButtonPrimary';

import {
    HomeScreen,
    HomeTitle,
    HomeSubtitle,
} from './styles';

export const HomePage = () => {
    return (
        <HomeScreen>
            <HomeTitle className="animate__animated animate__bounceIn">
                Another
                <br />
                JournaldApp
            </HomeTitle>
            <HomeSubtitle>
                React, Redux, Firebase and Styled Components App
            </HomeSubtitle>
            <ButtonPrimary 
                children="Let's Start"
                height="35px"
                to="/login"
                width="150px"
            />
        </HomeScreen>
    )
}


