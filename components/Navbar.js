import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='logo'>
        <h1>Logo</h1>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/list"><a>To do List</a></Link>
    </div>
  )
}

export default Navbar