import React, { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import NoteContext from './context/notesContext'

const App = () => {

  const [notes, setNotes] = useState([])
 
  return (
    <NoteContext.Provider value={{notes, setNotes}}>
    <BrowserRouter>
    <AppRoutes />
  </BrowserRouter> 
  </NoteContext.Provider>
  )
}
export default App
