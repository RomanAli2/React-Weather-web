
import '../App.css'
import React, { useEffect, useState } from 'react'
import {SearchContext} from '../Context.js'
import { useContext } from "react";

import {Link, NavLink} from 'react-router-dom'
function HeaderSection() {
    const [input ,setInput]=useState('')
 const {setCityName} =useContext(SearchContext)

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    console.log('Enter key pressed!');
    SerchWeather()
  }
};
  function SerchWeather(){
     setCityName(input)
    }
  return (
 <>
<header className='bg-white p-2 h-auto   shadow-xl fixed top-0 w-full text-sky-500 '>
    <nav className='flex justify-around m-3 flex-wrap'>
        <div>
            <h1 className='text-2xl font-bold'><i class="fa-solid fa-cloud"></i> SkyCast</h1>
        </div>
        <div className='text-center order-last m-2  md:m-0  flex justify-center gap-1 '>
      <input onKeyDown={handleKeyDown} type='text' placeholder='Enter City' className='shadow-md outline-1  outline-black/20 rounded-sm w-60  p-1.5 md:w-120 lg:w-140 py-2' onChange={(e)=>setInput(e.target.value)}  />
      <button onClick={SerchWeather}   className='bg-sky-500/85 hover:bg-sky-500 cursor-pointer  text-white border-2 border-sky-400 py-1.5 px-4 rounded-sm'><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
        <div className='flex text-lg gap-4 '>
        <NavLink  className={({isActive})=>isActive?"font-bold text-xl text-sky-500":"text-lg text-gray-400 "} to='/' ><i class="fa-solid fa-home"></i> Home </NavLink>
        <NavLink  className={({isActive})=>isActive?'font-bold text-xl   text-sky-500':'text-lg text-gray-400'} to='/About'><i class="fa-solid fa-circle-info"></i> About</NavLink>
        </div>
    </nav>
</header>
 </>
  )
}

export default HeaderSection