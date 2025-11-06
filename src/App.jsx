import {Routes, Route } from 'react-router'

import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Courses } from './pages/Courses'
import { CourseDetail } from './pages/CourseDetail'
import { MainLayout } from './layouts/MainLayout'
import { CourseAdmin } from './pages/CourseAdmin'

import './App.css'
import Login from './pages/Login'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  
  return (
    <Routes>
        {/* RUTAS ANIDADAS */}
        <Route element={<MainLayout />}>
          <Route index element={<Home/>}/> {/* es lo mismo que to='/' */}
          <Route path='cursos' element={<Courses />}/>
          <Route path='cursos/:courseId' element={<CourseDetail />}/>
          <Route path='contacto' element={<Contact />}/>
          {/** Proteccion de ruta por medio de componente ProtectedRoute */}
          <Route path='admin/courses' element={
            <ProtectedRoute>
              <CourseAdmin />
            </ProtectedRoute>
          }/>
        </Route>   
        <Route path='/login' element={<Login/>}/>

        {/*         
        RUTAS SIN ANIDACION
        <Route path='/' element={<Home/>}/>
        <Route path='/cursos' element={<Courses />}/>
        <Route path='/contacto' element={<Contact />}/>
        */}

        <Route path='*' element={<h1 className='text-white text-8xl'>404 Not Found</h1>}/>
      {/* <div className='flex flex-col min-h-screen'>
        <Home/>
        <Courses/> 
         <Contact/> 
      </div> */}
    </Routes>    
  )
}

export default App
