import React from 'react';

import { ButtonPrimary } from '../buttons/01-ButtonPrimary';
import { Input, Label } from '../../components/inputs/styles';

import img from '../../assets/images/JournaldImg.jpg';

import { 
    EntryCardStyled,
    EntryCardImg,
    EntryCardButtonSection,
    EntryCardInfoSection
} from '../cards/styles';

import { 
    TextArea,
    InputContainer,
    ImageSection,
    ImageButtonSection
} from './styles';
import { ButtonAddImage } from '../buttons/04-ButtonAddImage';

export const AddEntryForm = () => {

    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    return (
        <EntryCardStyled onSubmit={ handleSubmit }>
            <ImageSection>
                <EntryCardImg src={ img } alt="journald" />
                <ImageButtonSection>
                    <ButtonAddImage />
                </ImageButtonSection>
            </ImageSection>
            <EntryCardInfoSection>
                <InputContainer>
                    <Label isValid={ 1 }> Title </Label>
                    <Input isValid={ 1 } />
                </InputContainer>
                <InputContainer>
                    <Label isValid={ 1 }> Text </Label>
                    <TextArea></TextArea>
                </InputContainer>
            </EntryCardInfoSection>
            <EntryCardButtonSection>
                <ButtonPrimary 
                    children="Confirm"
                    width=""
                    height="28px"
                /> 
            </EntryCardButtonSection>
        </EntryCardStyled>
    )
}
