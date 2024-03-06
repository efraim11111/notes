
'use client';

import { Button, Navbar } from 'flowbite-react';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = ()=> {
  return (
    <>
    <Navbar className='bg-gray-900 flex justify-center'>
      <Navbar.Collapse className='flex justify-center text-white text-2xl'>
        <Link to="/" className='hover:underline text-gray-600 text-2xl'>Home</Link>
        <Link to="/notes" className='hover:underline text-gray-600 text-2xl'>Notes</Link>
      </Navbar.Collapse>
    </Navbar>

  </>
  
  
  );
}
export default NavBar;