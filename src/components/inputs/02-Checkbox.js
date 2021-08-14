import React from 'react';

import {
    CheckboxContainer,
    InputCheckbox,
    CheckboxText,
} from './styles';

export const Checkbox = ({ 
    children = '',
    name = '',
}) => {
    return (
        <CheckboxContainer>
            <InputCheckbox type="checkbox" name={ name } id="remember" />
            <CheckboxText htmlFor="remember"> { children } </CheckboxText>
        </CheckboxContainer>
    )
}
