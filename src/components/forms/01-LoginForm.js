import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonPrimary } from '../buttons/01-ButtonPrimary';
import { GoogleButton } from '../buttons/03-GoogleButton';
import { InputForm } from '../inputs/01-InputForm';
import { Checkbox } from '../inputs/02-Checkbox';
import { Spinner } from '../spinners/01-spinner';

import { 
    Form,
    ForgetPassword,
    InputsSection,
    ButtonsSection,
    Error,
} from './styles';

export const LoginForm = () => {

    const history = useHistory();
    const [ emailState, setEmailState ] = useState({ value: '', isValid: null });
    const [ passwordState, setPasswordState ] = useState({ value: '', isValid: null });

    const [ buttonChildren, setButtonChildren ] = useState( "let's go" );
    
    const handleSubmit = (e) => {

        e.preventDefault();
        
        setButtonChildren( <Spinner /> );

        setTimeout( async() => {
            history.push('/dashboard');
        },[1500]);
    }

    return (
        <Form onSubmit={ handleSubmit }>
            {
                emailState.value === false || passwordState.value === false
                    ?
                        <Error> Email or password incorrect. </Error>
                    :
                        undefined
            }
            
            <InputsSection>
                <InputForm 
                    label="Email"
                    type="text"
                    state={ emailState }
                    set={ setEmailState }
                />
                <InputForm 
                    label="Password"
                    type="password"
                    state={ passwordState }
                    set={ setPasswordState }
                />
            </InputsSection>
            <Checkbox 
                children="Remember Me"
                name="remember"
            />
            <ForgetPassword to="/"> Forgot my password </ForgetPassword>
            <ButtonsSection>
                <ButtonPrimary
                    children={ buttonChildren }
                    width="100%"
                    height="32px"
                />
                <GoogleButton 
                    width="100%"
                    children="Sign in with Google"
                    height="32px"
                />
            </ButtonsSection>
        </Form>
    )
}
