import React from 'react';

import { SignupForm } from '../../components/forms/02-SignupForm';

import { 
    LinkR,
    ArrowIcon,
} from '../Login/styles';
import { SignupScreen } from './styles';

export const SignupPage = () => {
    return (
        <SignupScreen>
            <SignupForm />
            <LinkR to="/">
                Back Home 
                <ArrowIcon />
            </LinkR>
        </SignupScreen>
    )
}
