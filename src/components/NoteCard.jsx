import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import NoteContext from '../context/notesContext';
import EditNote from './EditNote';
import { getRandomColor } from '../utils/gerRandomColor';

const NoteCard = ({note}) => {
    const { notes, setNotes } = useContext(NoteContext);
    const [bgColor, setBgColor] = useState(getRandomColor());
    const [editMode, setEditMode] = useState(true)

    const nav = useNavigate();
    const handleEditClick = () => {
        setEditMode(!editMode); 
      };
    
      const handleDeleteClick = (e, noteId) => {
        setNotes(notes.filter((item) => item.id !== noteId)); 
      };

      const handleModalUpdate = (noteValue) => { 
       
        console.log(note,"run nnnnmn");
        const notescopy = [...notes];
        notescopy.forEach(notec => {
        if (notec.id == note.id) {
          notec.folder = note.folder;
          notec.body = noteValue.body;
          notec.title = noteValue.title;
        }
      })
       setNotes(notescopy)
    }

  return (
    <>
    {
      editMode ?   
      <div key={note.id} className="bg-white rounded-lg shadow-md p-4 mb-4 w-1/3 mx-5" onClick={()=>{nav(`/notes/${note.id}`)}} style={{background:bgColor}}>
        <div onClick={(e) =>  e.stopPropagation()}>
      <Dropdown label="" inline >
          <Dropdown.Item onClick={() => handleEditClick()}>edit</Dropdown.Item>
        <Dropdown.Item onClick={(e) => handleDeleteClick(e, note.id)}>delete</Dropdown.Item>
      </Dropdown>
      </div>
      <h3 className="text-lg font-semibold mb-2 ">{note.title}</h3>
      <p className="text-gray-600 overflow-hidden whitespace-no-wrap overflow-ellipsis">{note.body}</p>
    </div>
    :
   <EditNote
   note={note}
   handleModalUpdate={(noteValue)=>handleModalUpdate(noteValue)}
   handleEditClick={(()=>handleEditClick())}
   />
    }
    
    </>
  )
}

export default NoteCard