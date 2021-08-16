import { db } from "../../firebase/01-firebase-config";
import { types } from "../types/01-types";
import { loadNotes } from "../../helpers/01-loadNotes";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };
        const doc = await db.collection(`${uid}/journald/notes`).add( newNote );

        dispatch( activeNote( doc.id, newNote ));
    };
};

export const activeNote = ( id, note ) => {
    return ({
        type: types.notesActive,
        payload: {
            id,
            ...note,
        }
    });
};

export const startLoadingNotes = ( uid ) => {
    return async( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ));
    }
}

export const setNotes = ( notes ) => {
    return ({
        type: types.notesLoad,
        payload: notes,
    });
};