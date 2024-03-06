import React, { useContext, useState } from 'react'
import { Button, Modal } from 'flowbite-react';
import { Box } from '@mui/joy';
import { v4 as uuid } from "uuid"
import Textarea from '@mui/joy/Textarea';
import NoteContext from '../context/notesContext';
const EditNote = ({note,handleEditClick,handleModalUpdate}) => {
    const [openModal, setOpenModal] = useState(true);
    const {notes, setNotes} = useContext(NoteContext);
    const [noteValue, setNoteValue] = useState({
        title: note.title,
        body: note.body,
        folder: note.folder
      });
    const handleModalSubmit = () => { 
            
    setOpenModal(false);
    setNoteValue({title:'',body:'',folder:''})
    handleEditClick()
    handleModalUpdate(noteValue);
    
    }
  return (
    <>
      
      <Modal dismissible show={openModal} onClose={() => {setOpenModal(false);handleEditClick()}}>
        <Modal.Header >
        <Box sx={{ p: 2 }} >
          <div className='flex justify-between'>

      <Textarea
     onInput={(e)=> setNoteValue({...noteValue,title:e.target.value})}
        className="w-full mr-20"
        placeholder="Type in here title"
        defaultValue={note.title}
        minRows={2}
        maxRows={4}
      />
      
      </div>
    </Box>
        </Modal.Header>
        <Modal.Body>
        <Textarea 
        onInput={(e)=> setNoteValue({...noteValue,body:e.target.value})}
        placeholder="Type in here your note"
        defaultValue={note.body}
        minRows={2}
        maxRows={4}
      />
       

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleModalSubmit()}>I accept</Button>
          <Button color="gray" onClick={() => {setOpenModal(false);handleEditClick()}}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditNote