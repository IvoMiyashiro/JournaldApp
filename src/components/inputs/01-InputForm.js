import React, { useState } from 'react';

import {
    InputContainer,
    Label,
    Input,
    Error,
} from './styles';

export const InputForm = ({
    label,
    type,
    name,
    state,
    set,
    regEx,
    firstPassword,
}) => {

    const { value, isValid } = state;
    const [ error, setError ] = useState( '' );

    const handleInputChange = ( e ) => {
        set({
            ...state, 
            value: e.target.value,
        })
    }

    const handleInputOnKeyUp = () => {

        if ( regEx ) {

            if ( regEx.test( value ) ) {
                set({ 
                    ...state,
                    isValid: 1,
                })
                setError( '' );
            } else {
                set({ 
                    ...state,
                    isValid: 0,
                })
                if ( name === 'name' ) {
                    setError( '*Name is not valid' );
                } else if ( name === 'email' ) {
                    setError( '*Email is not valid.' );
                } else if ( name === 'password_1' ) {
                    setError( '*At least 4 characters' );
                }
            }
        }
        if ( name === 'password_2' ) {
            if ( firstPassword !== value ) {
                setError( '*Passwords must be equals.' );
                set({ 
                    ...state,
                    isValid: 0,
                });
            } else {
                setError( '' );
                set({ 
                    ...state,
                    isValid: 1,
                })
            }
        }
    }

    const handleOnBlur = () => {

        if ( regEx ) {

            if ( regEx.test( value ) ) {
                set({ 
                    ...state,
                    isValid: 1,
                })
                setError( '' );
            } else {
                set({ 
                    ...state,
                    isValid: 0,
                })
                if ( name === 'name' ) {
                    setError( '*Name is not valid' );
                } else if ( name === 'email' ) {
                    setError( '*Email is not valid.' );
                } else if ( name === 'password_1' ) {
                    setError( '*At least 4 characters' );
                }
            }
        }
        if ( name === 'password_2' ) {
            if ( firstPassword !== value || value.length === 0 ) {
                setError( '*Passwords must be equals.' );
                set({ 
                    ...state,
                    isValid: 0,
                });
            } else {
                setError( '' );
                set({ 
                    ...state,
                    isValid: 1,
                })
            }
        }
    }

    return (
        <InputContainer>
            <Label isValid={ isValid }> { label } </Label>
            <Input 
                name={ name }
                onChange={ handleInputChange }
                onKeyUp={ handleInputOnKeyUp }
                onBlur={ handleOnBlur }
                type={ type }
                value={ value }
                isValid={ isValid }
            />
            {
                error
                    &&
                        <Error> { error } </Error>
            }
        </InputContainer>
    )
}
