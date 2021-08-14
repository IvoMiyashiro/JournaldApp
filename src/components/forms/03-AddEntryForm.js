import React from 'react';

import { ButtonPrimary } from '../buttons/01-ButtonPrimary';

import { Input, Label } from '../../components/inputs/styles';
import {
    AddEntryForm_,
    TextArea,
    InputContainer,
    InputsSection,
    ImageSection,
    AddImageButton,
    AddIcon,
    AddImageText,
} from './styles';

export const AddEntryForm = () => {
    return (
        <AddEntryForm_>
            <ImageSection>
                <AddImageButton >
                    <AddIcon />
                </AddImageButton>
                <AddImageText> Add Image </AddImageText>
            </ImageSection>
            <InputsSection>
                <InputContainer>
                    <Label children="Title" isValid={ 1 } />
                    <Input isValid={ 1 } width="10px" />
                </InputContainer>
                <InputContainer>
                    <Label children="Text" isValid={ 1 } />
                    <TextArea></TextArea>
                </InputContainer>
                <ButtonPrimary
                    width="100%"
                    children="Confirm"
                />
            </InputsSection>
        </AddEntryForm_>
    )
}
