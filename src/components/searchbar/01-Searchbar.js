import React from 'react';

import {
    SearchbarStyled,
    SearchInput,
    SearchButton,
    SearchIcon,
} from './styles';


export const Searchbar = ({ state, setValue }) => {

    const handleSubmit = ( e ) => {
        e.preventDefault();

        
    }

    const handleInputChange = ( e ) => {
        setValue( e.target.value )  
    }

    return (
        <SearchbarStyled onSubmit={ handleSubmit }>
            <SearchInput 
                type="text" 
                name="searchbar"
                placeholder="Search note by title..."
                value={ state }
                onChange={ handleInputChange }
            />
            <SearchButton>
                <SearchIcon />
            </SearchButton>
        </SearchbarStyled>
    )
}
