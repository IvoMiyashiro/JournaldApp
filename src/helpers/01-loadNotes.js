import { db } from "../firebase/01-firebase-config";

export const loadNotes = async( uid ) => {

    const notesSnap = await db.collection(`${ uid }/journald/notes`).get();
    const notes = [];

    notesSnap.forEach( snapChildren => {
        notes.push({
            id: snapChildren.id,
            ...snapChildren.data()
        })
    })

    return notes;
}