import React from 'react'
import '../App.css'
export default function FooterSection() {
  return (
 <>
    <footer className='flex text-md gap-4  h-17 bg-sky-500 font-bold justify-around items-center text-white flex-wrap'>
 <div className='m-1'>
            <h1 className=''><i class="fa-solid fa-cloud"></i> SkyCast</h1>
        </div>
        <div className=''>
        <h1>
         &copy;2026 All reseverd 
        </h1>
        </div>
        <div className='flex gap-3'>
          <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
        </div>

    </footer>
 </>
  )
}
