import { v4 as uuid } from "uuid"
import { Button, Modal, Textarea } from 'flowbite-react';
import { useContext, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import NoteContext from '../context/notesContext';

const ModalFolder = () => {
    const {notes, setNotes} = useContext(NoteContext);
  const [openModal, setOpenModal] = useState(false);
    const [noteValue, setNoteValue] = useState({
        title:'',
        body:'',
        folder: '',
    });
    const submitHndale = () => {
        setNotes([...notes,{folder:noteValue.folder,body:noteValue.body,title:noteValue.title,id: uuid()}])
        setOpenModal(false);
       
    
          
      }
  return (
    <div className='ml-5'>
      <Button onClick={() => setOpenModal(true)}>add folder</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
          <Textarea 
        onInput={(e)=> setNoteValue({...noteValue,folder:e.target.value})}
        placeholder="Type in here FOLDER"
        defaultValue=""
        minRows={2}
        maxRows={4}
      />
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => submitHndale()}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default ModalFolder;
