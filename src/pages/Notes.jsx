import React, { useContext, useState } from 'react';
import ModalNote from '../components/ModalNote';
import Note from '../components/Note';
import Folder from '../components/Folder';
import NoteContext from '../context/notesContext';
import ModalFolder from '../components/ModleFolder';


const Notes = () => { 
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Notes</h2>
      <div className='flex'>
      <ModalNote/>
      <ModalFolder/>

      </div>
      
     <Folder/>
     
     <Note 
     folderId={""}/>
    </div>
  );
};

export default Notes;
