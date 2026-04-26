import React,{useState} from 'react'
import HeaderSection from './HeaderSection'
import { Outlet } from 'react-router-dom'
import FooterSection from './FooterSection'
import {SearchContext} from '../Context.js'
 function Layout() {
  const [cityName,setCityName]=useState('')
  return (
  <SearchContext.Provider value={{ cityName, setCityName }}>
    <HeaderSection />
    <Outlet />
    <FooterSection/>
 </SearchContext.Provider>
  )
}
export default Layout