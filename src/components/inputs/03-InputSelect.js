import React from 'react';
import {
    Select,
    Option,
} from './styles';

export const InputSelect = ({ notesPerPage, setNotesPerPage }) => {

    const handleSelectChange = (e) => {
        setNotesPerPage( e.target.options.selectedIndex + 1 );
    };

    return (
        <Select name="pagination" id="#" value={ notesPerPage} onChange={ handleSelectChange }>
            <Option value={ 1 } > 1 </Option>
            <Option value={ 2 } > 2 </Option>
            <Option value={ 3 } > 3 </Option>
            <Option value={ 4 } > 4 </Option>
            <Option value={ 5 } > 5 </Option>
        </Select>
    )
}
