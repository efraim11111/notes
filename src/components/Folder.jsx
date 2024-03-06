import React, { useContext } from 'react'
import NoteContext from '../context/notesContext';
import { useNavigate } from 'react-router-dom';

const Folder = () => {
    const { notes, setNotes } = useContext(NoteContext);
    const nav = useNavigate();
    const uniqueFolders = [...new Set(notes.map((note) => note.folder))].filter((folder) => folder !== "");

  return (
    <div className="flex flex-wrap">
        {uniqueFolders.map((note)=>{
            if(note !== ""){
         return(
                <div className="bg-white rounded-lg shadow-md p-4 mb-4 w-1/3 mx-5" onClick={()=>nav(`/notes/folder/${note}`)}>
                    <h3 className="text-lg font-semibold mb-2 ">FOLDER: {note}</h3>
                 
                </div>
            )}
            
        })}
    </div>
  )
}

export default Folder