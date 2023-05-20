import {useState} from 'react';
import {navLinks} from '../constants'



const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ul className='font-thirsty font-medium text-white cursor-pointer text-[25px]'>
        Hashan M. Hemachandra
      </ul>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>{navLinks.map((nav, index) =>(
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}</ul>
    </nav>
  )
}

export default Navbar