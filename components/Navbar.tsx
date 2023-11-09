import React, { useState } from 'react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleScroll = (sectionId) => {
    // Close the drawer if open
    setIsDrawerOpen(false);
    // Scroll to the given section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className='flex justify-between items-center py-4 px-2'>
      <div className='flex items-center gap-[1ch]'>
        <div className='w-5 h-5 bg-yellow-400 rounded-full' />
        <span className='text-sm font-semibold tracking-widest text-white'>
          PORTFOLIO
        </span>
      </div>

      <div className='hidden md:flex gap-12 text-md text-zinc-400'>
        {/* Use a tags with onClick handlers instead of Link for smooth scroll */}
        <a onClick={() => handleScroll('home')} className='cursor-pointer text-black font-medium'>
          Home
        </a>
        <a onClick={() => handleScroll('projects')} className='cursor-pointer'>
          Projects
        </a>
        <a onClick={() => handleScroll('skills')} className='cursor-pointer'>
          Skills
        </a>
        <a onClick={() => handleScroll('contact')} className='cursor-pointer'>
          Contact
        </a>
      </div>

      <div className='md:hidden'>
        <button onClick={toggleDrawer}>
          {/* Replace with your icon */}
          ☰
        </button>
      </div>

      {/* Drawer for mobile view */}
      {isDrawerOpen && (
        <div
          className='fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg p-4'
          style={{ transition: 'transform 0.3s ease-in-out', transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)' }}
        >
          <button onClick={toggleDrawer} className='mb-4'>
            {/* Replace with your close icon */}
            ✖
          </button>
          <div className='flex flex-col gap-4'>
            <a onClick={() => handleScroll('home')} className='cursor-pointer text-black font-medium'>
              Home
            </a>
            <a onClick={() => handleScroll('projects')} className='cursor-pointer'>
              Projects
            </a>
            <a onClick={() => handleScroll('skills')} className='cursor-pointer'>
              Skills
            </a>
            <a onClick={() => handleScroll('contact')} className='cursor-pointer'>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;