import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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
        <Link href="#" className='text-black font-medium'>
          Home
        </Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
      </div>

      <div className='md:hidden'>
        <button onClick={toggleDrawer}>
          {/* Replace with your icon */}
          ☰
        </button>
      </div>

      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg p-4'
          >
            <button onClick={toggleDrawer} className='mb-4'>
              {/* Replace with your close icon */}
              ✖
            </button>
            <div className='flex flex-col gap-4'>
              <Link href="#" className='text-black font-medium'>
                Home
              </Link>
              <Link href="#">Projects</Link>
              <Link href="#">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
