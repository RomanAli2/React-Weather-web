import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Layout from '../components/Layout'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>}>
<Route index element={<HomePage/>}/>
<Route element={<AboutPage/>} path='/About' />
        </Route>
        </Routes>
    </BrowserRouter>
  )
}


export default Router