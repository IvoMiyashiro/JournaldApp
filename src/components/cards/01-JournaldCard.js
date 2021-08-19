import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { activeNote, startDeletingNote } from '../../redux/actions/02-notes';

import { Modal } from '../modal/01-modal';
import { Spinner } from '../spinners/01-spinner';

import defaultImage from '../../assets/images/JournaldImg.jpg';

import {
    JournaldCardStyled,
    JournaldCardImgSection,
    JournaldCardInfoSection,
    JournaldCardImg,
    JournaldCardDate,
    JournaldCardTitle,
    JournaldCardText,
    DeleteIcon,
    EditIcon,
    JournaldCardSection,
} from './styles';

export const JournaldCard = ({ data }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { title, date, id, body, lastEdit, url } = data;
    const noteDate = moment( date ).format( 'LL' );
    const [ deleteModal, setDeleteModal ] = useState( false );
    const [ modalButtonContent, setModalButtonContent ] = useState( 'Delete' );
    const [ fadeOut, setFadeOut ] = useState( "" );

    const handleActiveNote = ( note ) => {
        dispatch( activeNote( id, note ) );
        history.push(`dashboard/note/${ id }`);
    }

    const handleDeleteMenu = () => {
        setDeleteModal( prev => !prev );
    }

    const handleDeleteNote = () => {
        setModalButtonContent( <Spinner /> );
        dispatch( startDeletingNote( id ) );
        setFadeOut("animate__zoomOut");
        setDeleteModal( prev => !prev );
    }

    const handleEditNote = ( note ) => {
        dispatch( activeNote( id, note ) );
        history.push(`dashboard/note/edit/${ id }`);
    }

    return (
            <>
                <JournaldCardStyled className={ "animate__animated animate__zoomIn " + fadeOut } >
                    <JournaldCardSection onClick={ () => handleActiveNote( data ) }>
                        <JournaldCardImgSection>
                            <JournaldCardImg loading="lazy" src={
                                url !== ''
                                    ?   url
                                    :   defaultImage
                            }/>
                        </JournaldCardImgSection>
                        <JournaldCardInfoSection>
                            <JournaldCardDate> 
                                { noteDate }
                            </JournaldCardDate>
                            <JournaldCardTitle > { title } </JournaldCardTitle>
                            <JournaldCardText> { body } </JournaldCardText>
                        </JournaldCardInfoSection>
                    </JournaldCardSection>
                    <EditIcon onClick={ () => handleEditNote( data ) } />
                    <DeleteIcon onClick={ handleDeleteMenu } />
                </JournaldCardStyled>
                <Modal 
                    isOpen={ deleteModal }
                    setIsOpen={ setDeleteModal }
                    setFadeOut={ setFadeOut }
                    func={ handleDeleteNote }
                    title={ 'Delete Note' }
                    children ={ 'Are you sure you want to delete the selected note?'}
                    buttonSecondary={'Cancel'}
                    buttonPrimary={ modalButtonContent }
                />
            </>
    )
}