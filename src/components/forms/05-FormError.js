import React from 'react';

import {
    FormErrorStyled,
    FormErrorBody
} from './styles';

export const FormError = ({ children }) => {
    return (
        <FormErrorStyled>
            <FormErrorBody> { children } </FormErrorBody>
        </FormErrorStyled>
    )
}
