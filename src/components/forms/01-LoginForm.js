import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { startGoogleLogin, startLogin } from '../../redux/actions/01-auth';

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

    const dispatch = useDispatch();
    const [ emailState, setEmailState ] = useState({ value: '', isValid: null });
    const [ passwordState, setPasswordState ] = useState({ value: '', isValid: null });
    const [ loginError, setLoginError ] = useState( false );

    const [ buttonChildren, setButtonChildren ] = useState( "let's go" );
    
    const handleSubmit = (e) => {

        e.preventDefault();
        
        setButtonChildren( <Spinner /> );
        

        setTimeout( async() => {
            dispatch( startLogin( emailState.value, passwordState.value, setLoginError, setButtonChildren ));
        },[1000]);
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <Form onSubmit={ handleSubmit } className="animate__animated animate__fadeIn">
            {
                loginError
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
                children="Remember me"
                name="remember"
            />
            <ForgetPassword to="/signup"> Create new account </ForgetPassword>
            <ButtonsSection>
                <ButtonPrimary
                    children={ buttonChildren }
                    width="100%"
                    height="30px"
                />
                <GoogleButton 
                    width="100%"
                    children="Sign in with Google"
                    height="32px"
                    type="button"
                    func={ handleGoogleLogin }
                />
            </ButtonsSection>
        </Form>
    )
}
