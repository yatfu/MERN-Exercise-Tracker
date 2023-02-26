import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ExercisesList from './exercises-list.component'
import CreateExercise from './create-exercise.component'
import EditExercise from './edit-exercise.component'
import CreateUser from './create-user.component'

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' exact element={<ExercisesList />} />
      <Route path='/create' element={<CreateExercise />} />
      <Route path='/edit:id' element={<EditExercise />} />
      <Route path='/signup' element={<CreateUser />} />
    </Routes>
  )
}

export default MyRoutes