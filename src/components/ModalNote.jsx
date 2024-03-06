import { Box } from '@mui/joy';
import Textarea from '@mui/joy/Textarea';
import { v4 as uuid } from "uuid"
import { Button, Modal } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import NoteContext from '../context/notesContext';
import { useNavigate } from 'react-router-dom';

function ModalNote({folderId}) {
  const {notes, setNotes} = useContext(NoteContext);
  const [noteValue, setNoteValue] = useState({
    title: '',
    body: '',
    folder: ''
  });
  // useEffect(() => {
  //   console.log(notes);
  //   console.log(noteValue);
  // }, [noteValue]);
  const [openModal, setOpenModal] = useState(false);
  const submitHndale = () => {
    if(folderId){
      setNotes([...notes,{folder:folderId,body:noteValue.body,title:noteValue.title,id: uuid()}])
    }else{
      setNotes([...notes,{folder:noteValue.folder,body:noteValue.body,title:noteValue.title,id: uuid()}])

    }
    setOpenModal(false);
    setNoteValue({title:'',body:'',folder:''})

      
  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Add Note</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header >
        <Box sx={{ p: 2 }} >
          <div className='flex justify-between'>

      <Textarea
     onInput={(e)=> setNoteValue({...noteValue,title:e.target.value})}
        className="w-full mr-20"
        placeholder="Type in here title"
        defaultValue=""
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
        defaultValue=""
        minRows={2}
        maxRows={4}
      />
       

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => submitHndale()}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNote;

