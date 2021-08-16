import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { startSignUp } from '../../redux/actions/01-auth';

import { InputForm } from '../inputs/01-InputForm';
import { ButtonPrimary } from '../buttons/01-ButtonPrimary';
import { Spinner } from '../spinners/01-spinner';

import { regEx } from './03-RegEx';
import { 
    Form,
    InputsSection,
    ButtonContainer,
} from './styles';

export const SignupForm = () => {

    const dispatch = useDispatch();
    const { name, email, password } = regEx;

    const [ fullNameState, setFullNameState ] = useState({ value: '', isValid: null });
    const [ emailState, setEmailState ] = useState({ value: '', isValid: null });
    const [ password_firstState, setPassword_firstState ] = useState({ value: '', isValid: null });
    const [ password_secondState, setPassword_secondState ] = useState({ value: '', isValid: null });

    const [ buttonState, setButtonState ] = useState( true );
    const [ buttonChildren, setButtonChildren ] = useState( 'Complete All Fields' );

    useEffect( () => {
        if ( fullNameState.isValid && emailState.isValid && password_firstState.isValid && password_secondState.isValid ) {
            setButtonState( false );
            setButtonChildren( "let's go" );
        } else {
            setButtonState( true );
            setButtonChildren( 'Complete All Fields' );
        }
    },[fullNameState, emailState, password_firstState, password_secondState]);

    const handleSubmit = ( e ) => {

        e.preventDefault();

        setButtonChildren( <Spinner /> );

        setTimeout( async() => {
            dispatch( startSignUp( fullNameState.value, emailState.value, password_firstState.value ) )
        },[1500]);
    }

    return (
        <Form onSubmit={ handleSubmit }>
                <InputsSection>
                    <InputForm 
                        label="Full Name"
                        type="text"
                        name="name"
                        state={ fullNameState }
                        set={ setFullNameState }
                        regEx={ name }
                    />
                    <InputForm 
                        label="Email"
                        type="text"
                        name="email"
                        state={ emailState }
                        set={ setEmailState }
                        regEx={ email }
                    />
                    <InputForm 
                        label="Password"
                        type="password"
                        name="password_1"
                        state={ password_firstState }
                        set={ setPassword_firstState }
                        regEx={ password }
                    />
                    <InputForm 
                        label="Repeat Password"
                        type="password"
                        name="password_2"
                        state={ password_secondState }
                        firstPassword={ password_firstState.value }
                        set={ setPassword_secondState }
                    />
                </InputsSection>
                <ButtonContainer>
                    <ButtonPrimary
                        children={ buttonState ? buttonChildren : buttonChildren}
                        width="100%"
                        height="32px"
                        disabled={ buttonState }
                    />
                </ButtonContainer>
        </Form>
    )
}
