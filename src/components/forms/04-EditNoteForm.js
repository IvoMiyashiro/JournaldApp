import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { startUpdatingNote, startUploading } from '../../redux/actions/02-notes';

import { ButtonPrimary } from '../buttons/01-ButtonPrimary';
import { Input, Label } from '../../components/inputs/styles';
import { ButtonAddImage } from '../buttons/04-ButtonAddImage';
import { Spinner } from '../spinners/01-spinner';

import defaultImage from '../../assets/images/JournaldImg.jpg';

import { 
    EntryCardStyled,
    EntryCardImg,
    EntryCardButtonSection,
    EntryCardInfoSection,
} from '../cards/styles';

import { 
    TextArea,
    InputContainer,
    ImageButtonSection,
    SpinnerSection,
} from './styles';

export const EditEntryForm = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes);
    const { title, body, url } = active;

    const [ inputValue, setInputValue ] = useState( title );
    const [ textAreaValue, setTextAreaValue ] = useState( body );
    const [ buttonChildren, setButtonChildren ] = useState( 'Confirm' );
    const [ imageURL, setImageURL ] = useState({ url: url, loader: false });

    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleTextAreaChange = ( e ) => {
        setTextAreaValue( e.target.value );
    }

    const hanldeEditNote = () => {
        const updatedNote = {
            title: inputValue,
            body: textAreaValue,
            url: imageURL.url,
            date: new Date().getTime(),
            lastEdit: new Date().getTime(),
        };
        setButtonChildren( <Spinner /> );

        setTimeout(() => {
            dispatch( startUpdatingNote( updatedNote ) );
            history.push('/dashboard');
        }, 1000);
    }

    const handleButtonImage = () => {
        document.querySelector( "#fileSelector" ).click();
    }

    const handleInputImageChange = ( e ) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploading( file, setImageURL ) );
        }
    }

    return (
        <EntryCardStyled onSubmit={ handleSubmit } className="animate__animated animate__fadeIn">
            <EntryCardImg src={ 
                url !== ''
                    ? imageURL.url
                    : defaultImage
                }
            />
            {
                imageURL.loader
                    ? 
                    <SpinnerSection>
                        <Spinner color="black" />
                    </SpinnerSection>
                    :
                    <ImageButtonSection>
                        <ButtonAddImage 
                            func={ handleButtonImage }
                        />
                        <input 
                            type="file"
                            style={{ display: 'none' }}
                            id="fileSelector"
                            name="file"
                            onChange={ handleInputImageChange }
                        />
                    </ImageButtonSection>
            }   
            <EntryCardInfoSection>
                <InputContainer>
                    <Label isValid={ 1 }> Title </Label>
                    <Input 
                        isValid={ 1 } 
                        onChange={ handleInputChange }   
                        value={ inputValue } 
                    />
                </InputContainer>
                <InputContainer>
                    <Label isValid={ 1 }> Text </Label>
                    <TextArea 
                        onChange={ handleTextAreaChange }
                        value={ textAreaValue }
                    ></TextArea>
                </InputContainer>
            </EntryCardInfoSection>
            <EntryCardButtonSection>
                <ButtonPrimary 
                    children={ buttonChildren }
                    width=""
                    height="30px"
                    func={ hanldeEditNote }
                /> 
            </EntryCardButtonSection>
        </EntryCardStyled>
    )
}
