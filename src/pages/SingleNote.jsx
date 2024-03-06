import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import NoteContext from '../context/notesContext';

const SingleNote = () => {
    const { notes } = useContext(NoteContext);
    const { id } = useParams();

    const note = notes.find((note) => note.id === id);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                {note ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
                        <p className="text-gray-600">{note.body}</p>
                    </>
                ) : (
                    <p className="text-red-500">Note not found</p>
                )}
            </div>
        </div>
    );
}

export default SingleNote;
