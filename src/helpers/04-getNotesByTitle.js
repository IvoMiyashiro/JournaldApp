export const getNotesByTitle = ( searchValue, notes ) => {

    const value = searchValue.toLocaleLowerCase();

    return notes.filter( note => note.title.toLocaleLowerCase().includes( value ));
}