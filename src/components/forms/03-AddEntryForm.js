import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { 
    startNewNote, 
    startUploading,
} from '../../redux/actions/02-notes';

import { validateFile } from '../../helpers/03-imageValidator';

import { ButtonPrimary } from '../buttons/01-ButtonPrimary';
import { Input, Label } from '../../components/inputs/styles';
import { ButtonAddImage } from '../buttons/04-ButtonAddImage';
import { Spinner } from '../spinners/01-spinner';

import defaultImage from '../../assets/images/JournaldImg.jpg';

import { 
    EntryCardStyled,
    EntryCardButtonSection,
    EntryCardImg,
    EntryCardInfoSection,
} from '../cards/styles';

import { 
    TextArea,
    InputContainer,
    ImageButtonSection,
    SpinnerSection,
    SmallError,
    ImageSection
} from './styles';


export const AddEntryForm = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [ inputValue, setInputValue ] = useState( '' );
    const [ textAreaValue, setTextAreaValue ] = useState( '' );
    const [ buttonChildren, setButtonChildren ] = useState( 'Confirm' );
    const [ formError, setFormError ] = useState( false );
    const [ imageURL, setImageURL ] = useState({ url: '', state: false, loader: false });

    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleTextAreaChange = ( e ) => {
        setTextAreaValue( e.target.value );
    }

    const hanldeAddNotes = () => {
        const newNote = {
            title: inputValue,
            body: textAreaValue,
            url: imageURL.url,
            date: new Date().getTime(),
            lastEdit: new Date().getTime(),
        };
        setButtonChildren( <Spinner /> );

        setTimeout(() => {
            dispatch( startNewNote( newNote ) );
            history.push('/dashboard');
        }, 1000);
    }

    const handleButtonImage = () => {
        document.querySelector( "#fileSelector" ).click();
    }

    const handleInputImageChange = ( e ) => {
        const file = e.target.files[0];
        if ( file !== undefined ) {
            if ( validateFile( file ) ) {
                dispatch( startUploading( file, setImageURL, setFormError ) );
                setFormError( false );
            } else {
                setFormError( true );
            }
        }
    }


    return (
        <EntryCardStyled onSubmit={ handleSubmit } className="animate__animated animate__fadeIn">
            <ImageSection >
                <EntryCardImg src={ 
                    imageURL.state
                        ? imageURL.url
                        : defaultImage
                    } alt="journald" 
                />
                    {
                        imageURL.loader
                            ? 
                            <SpinnerSection>
                                <Spinner />
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
            </ImageSection>
            {
                formError 
                    ? <SmallError> *The image is not valid. </SmallError>
                    : undefined
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
                    func={ hanldeAddNotes }
                /> 
            </EntryCardButtonSection>
        </EntryCardStyled>
    )
}
