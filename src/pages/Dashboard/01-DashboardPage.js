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

export const DashboardPage = () => {

    const data = true;

    return (
        <DashboardScreen>
            <Title> Journald </Title>
            <SearchbarSection>
                <Searchbar />
            </SearchbarSection>
            {
                data
                    ?
                        <JournaldCardsSection>
                            <JournaldCard 
                                date="13 Ago. 2021" 
                                title="Journald Title" 
                                text="Texto de prueba muy largo porque nose que poner asi que pongo cualuqier cosa para completar est camp ahre que ya me faltan mas letras" 
                            />
                            <JournaldCard 
                                date="13 Ago. 2021" 
                                title="Journald Title" 
                                text="Texto de prueba muy largo porque nose que poner asi que pongo cualuqier cosa para completar est camp ahre que ya me faltan mas letras" 
                            />
                            <JournaldCard 
                                date="13 Ago. 2021" 
                                title="Journald Title" 
                                text="Texto de prueba muy largo porque nose que poner asi que pongo cualuqier cosa para completar est camp ahre que ya me faltan mas letras" 
                            />
                            <JournaldCard 
                                date="13 Ago. 2021" 
                                title="Journald Title" 
                                text="Texto de prueba muy largo porque nose que poner asi que pongo cualuqier cosa para completar est camp ahre que ya me faltan mas letras" 
                            />
                            <JournaldCard 
                                date="13 Ago. 2021" 
                                title="Journald Title" 
                                text="Texto de prueba muy largo porque nose que poner asi que pongo cualuqier cosa para completar est camp ahre que ya me faltan mas letras" 
                            />
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
