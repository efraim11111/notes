import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homme from '../pages/Homme'
import Notes from '../pages/Notes'
import Layout from '../pages/Layout'
import FolderPage from '../pages/FolderPage'
import SingleNote from '../pages/SingleNote'


const AppRoutes = () => {
  return (
<Routes>
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Homme />} />
    <Route path="/notes" element={<Notes />} />
    <Route path="/notes/:id" element={<SingleNote />} />
    <Route path="/notes/folder/:folderId" element={<FolderPage />} />

    </Route>
</Routes>
  )
}

export default AppRoutes