import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return <nav className='flex justify-between items-center py-4 px-2'>

    <div>
        <div>
            <span>PORTFOLIO</span>
        </div>
    </div>

    <div>
        <Link href="#">Home</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
    </div>

  </nav>
}

export default Navbar