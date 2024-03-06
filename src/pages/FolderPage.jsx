import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NoteContext from '../context/notesContext';
import Note from '../components/Note';
import ModalNote from '../components/ModalNote';

const FolderPage = () => {
    const { notes } = useContext(NoteContext);
    const { folderId } = useParams();
    const nav = useNavigate();
   
    
    return (
        <div className="container mx-auto p-4">
            <button onClick={()=>  nav("/notes")}>back</button>
            <h2 className="text-2xl font-bold mb-4">Your Notes {folderId}</h2>
            <ModalNote 
            folderId={folderId}
            />
            <Note 
            folderId={folderId} 
            />
        </div>
    );
}

export default FolderPage;
