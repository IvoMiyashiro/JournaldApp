import React from 'react';

import {
    ButtonAddImageStyled,
    AddImageIcon,
} from './styles'

export const ButtonAddImage = ({ func }) => {
    return (
        <ButtonAddImageStyled onClick={ func }>
            <AddImageIcon />
        </ButtonAddImageStyled>
    )
}
