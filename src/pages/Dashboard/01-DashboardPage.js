import React from 'react';

import { Searchbar } from '../../components/searchbar/01-Searchbar';
import { JournaldCard } from '../../components/cards/01-JournaldCard';
import { AddJournaldCard } from '../../components/cards/02-AddJournaldCard';

import { 
    DashboardScreen,
    Title,
    SearchbarSection,
    JournaldCardsSection,
} from './styles';
import { useSelector } from 'react-redux';

export const DashboardPage = () => {

    const { notes } = useSelector( state => state.notes );

    return (
        <DashboardScreen>
            <Title> Journald </Title>
            <SearchbarSection>
                <Searchbar />
            </SearchbarSection>
            {
                notes.length > 0
                    ?
                        <JournaldCardsSection>
                            {
                                notes.map( note => (
                                    <JournaldCard 
                                        key={ note.id }
                                        date={ note.date }
                                        title={ note.title }
                                        text={ note.body }
                                    />
                                ))
                            }
                            <section>
                                paginación
                            </section>
                        </JournaldCardsSection>
                    :
                        <AddJournaldCard />
            }
        </DashboardScreen>
    )
}
