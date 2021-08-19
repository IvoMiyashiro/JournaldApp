import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { getNotesByTitle } from '../../helpers/04-getNotesByTitle';

import { Searchbar } from '../../components/searchbar/01-Searchbar';
import { JournaldCard } from '../../components/cards/01-JournaldCard';
import { AddJournaldCard } from '../../components/cards/02-AddJournaldCard';
import { InputSelect } from '../../components/inputs/03-InputSelect';


import { 
    DashboardScreen,
    InputSelectSection,
    JournaldCardsSection,
    Label,
    LeftButton,
    RightButton,
    SearchbarSection,
    Title,
} from './styles';
import './pagination.css';

export const DashboardPage = () => {

    const { notes } = useSelector( state => state.notes );
    const [ searchValue, setSearchValue ] = useState('');
    const [ pageNumber, setPageNumber ] = useState( 0 );
    const [ notesPerPageState, setNotesPerPage ] = useState( 5 );
    const notesFiltered = getNotesByTitle( searchValue, notes );

    const notesPerPage = notesPerPageState;
    const pagesVisited = pageNumber * notesPerPage;

    const displayNotes = notesFiltered
        .slice( pagesVisited, notesPerPage + pagesVisited )
        .map( note => (
            <JournaldCard 
                key={ note.id }
                data={ note }
            />
        )
    );

    const pageCount = Math.ceil( notesFiltered.length / notesPerPage );
    
    const handleChangePage = ({ selected }) => {
        setPageNumber( selected );
    };

    return (
        <DashboardScreen className="animate__animated animate__fadeIn">
            <Title> Journald </Title>
            {
                notes.length !== 0
                    &&
                    <SearchbarSection>
                        <Searchbar state={ searchValue } setValue={ setSearchValue } />
                    </SearchbarSection>
            }
            {
                notes.length > 0
                    ?
                        <JournaldCardsSection>
                            <InputSelectSection>
                                <Label> 
                                    Show notes: 
                                    <InputSelect 
                                        notesPerPage={ notesPerPageState } 
                                        setNotesPerPage={ setNotesPerPage } 
                                    />
                                </Label>
                                
                            </InputSelectSection>
                            { displayNotes }
                            {
                                pageCount > 1    
                                    ?                             
                                        <ReactPaginate 
                                            activeClassName={"activePageLink"}
                                            breakLabel={'...'}
                                            containerClassName={"pagination"}
                                            disabledClassName={'disabledBtn'}
                                            disableInitialCallback={ true }
                                            marginPagesDisplayed={1}
                                            nextLabel={ <RightButton /> }
                                            onPageChange={ handleChangePage }
                                            pageClassName={'links'}
                                            pageCount={ pageCount }
                                            pageLinkClassName={"link"}
                                            pageRangeDisplayed={2}
                                            previousLabel={ <LeftButton /> }
                                        />
                                    : undefined
                            }
                        </JournaldCardsSection>
                    :
                        <AddJournaldCard />
            }

        </DashboardScreen>
    )
}
