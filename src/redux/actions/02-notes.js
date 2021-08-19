import { db } from "../../firebase/01-firebase-config";
import { types } from "../types/01-types";
import { loadNotes } from "../../helpers/01-loadNotes";
import { fileUpload } from "../../helpers/02-uploadImage";

export const startNewNote = ( newNote ) => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        const noteID = await db.collection(`${uid}/journald/notes`).add( newNote );
        const note = {
            id: noteID.id,
            ...newNote,
        }
        dispatch( addNewNote( note ));
    };
};

export const addNewNote = ( newNote ) => {
    return ({
        type: types.notesAddNew,
        payload: newNote
    })
}

export const startUpdatingNote = ( updatedNote ) => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { active } = getState().notes;
        await db.doc(`${ uid }/journald/notes/${ active.id }`).update({
            body: updatedNote.body,
            title: updatedNote.title,
            lastEdit: updatedNote.lastEdit,
        });

        dispatch( updateNote( active.id, updatedNote ) );
    };
}

export const updateNote = ( id, note ) => {
    return ({
        type: types.notesUpdated,
        payload: {
            id,
            note: {
                id,
                ...note,
            }
        }
    });
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

export const startDeletingNote = ( id ) => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        await db.doc(`${ uid }/journald/notes/${ id }`).delete();

        dispatch( deleteNote( id ) );
    }
}

export const deleteNote = ( id ) => {
    return ({
        type: types.notesDelete,
        payload: id,
    })
}

export const logOutCleaning = () => {
    return ({
        type: types.notesLogoutCleaning,
    })
}

export const startUploading = ( file, setImageURL, setFormError ) => {
    return async( dispatch, getState ) => {
        setImageURL({ loader: true });
        const fileUrl = await fileUpload( file )
            .catch( error => {
                console.log('hola')
            });
        setImageURL({ url: fileUrl, state: true, loader: false });
    }
}