import React, { useContext } from 'react'
import NoteContext from '../context/notesContext'

const Homme = () => {
    const {note}= useContext(NoteContext)
  return (
    <div>Homme{note}</div>
  )
}

export default Homme