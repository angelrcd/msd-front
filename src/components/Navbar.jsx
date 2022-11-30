import '../css/MainPage.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center md:h-20 h-10 mx-auto px-4 text-black md:bg-transparent bg-white dark:bg-web-formBgDarkMode">
      <Link to='/'><div className='flex items-center gap-5 ml-4'>
        <img className='h-[40px] md:h-[70px]' src="/img/logo.png" alt="logo" />
        <h1 className="hidden md:hidden xl:block md:text-3xl w-full text-shadow-1 lg:text-shadow-2 text-white font-bluetea">MYSWEETDREAMS</h1>
      </div></Link>
      <ul className='hidden md:flex text-2xl text-shadow-1 font-semibold text-white'>
        <li className='pr-3 py-3 pl-0 hover:text-web-boton duration-300 ease-in-out'><Link to='/Login'>Iniciar sesión</Link></li>
        <li className='p-3 hover:text-web-boton duration-300 ease-in-out'><Link to='/Signup'>Registrate</Link></li>
        <li className='p-3 hover:text-web-boton duration-300 ease-in-out'><Link to='/Who'>Quienes somos</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        <img className='h-[30px] filter dark:invert' src="/icons/menu.svg" alt="menu button" />
      </div>
      <div className={!nav ? 'fixed right-0 top-0 w-[300px] h-screen flex flex-col  border-gray-700 dark:border-gray-200 bg-web-fondo dark:bg-web-formBgDarkMode ease-in-out duration-500 z-10' : 'fixed right-[-100%] top-0 w-[300px] h-screen flex flex-col ease-in-out duration-500 z-10'}>
        <div className='flex justify-between'>
          <p className='mt-3 ml-5 dark:text-white font-bluetea'>MYSWEETDREAMS</p>
          <img onClick={handleNav} className='h-5 mr-3 mt-3 filter dark:invert' src="/icons/cancel.svg" alt="close menu button" />
        </div>
        <ul className='p-4 dark:text-gray-100'>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='/Login'>Iniciar sesión</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='/Signup'>Registrate</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='/Who'>Quienes somos</Link></li>
        </ul>
        <div className="flex gap-5 px-6">
          <img className="filter dark:invert h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/instagram.svg" alt="" />
          <img className="filter dark:invert h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/twitter.svg" alt="" />
          <img className="filter dark:invert h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/facebook.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
