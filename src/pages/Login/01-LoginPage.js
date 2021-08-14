import React from 'react';

import { LoginForm } from '../../components/forms/01-LoginForm';

import { 
    LoginScreen, 
    LinkR,
    ArrowIcon,
} from './styles';

export const LoginPage = () => {
    return (
        <LoginScreen>
            <LoginForm />
            <LinkR to="/"> 
                Back Home 
                <ArrowIcon />
            </LinkR>
        </LoginScreen>
    )
}
