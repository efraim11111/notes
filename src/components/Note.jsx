import React, { useContext, useState } from 'react';
import NoteContext from '../context/notesContext';
import NoteCard from './NoteCard';

const Note = ({ folderId }) => {
  const { notes, setNotes } = useContext(NoteContext);


  return (
    <div className="flex flex-wrap">
      {notes.map((note) => {
        if (note.folder === folderId && note.title !== '') {
          return (
            <NoteCard
              key={note.id}
              folderId={folderId}
              note={note}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Note;
