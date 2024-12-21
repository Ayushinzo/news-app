import React from 'react'
import './Navbar.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar({ dropMenu, setDropMenu }) {
    const pathname = usePathname()
    return (
        <div className={`navbar-section ${dropMenu ? 'active' : ''}`}>
            <li>
                <Link href='/world' onClick={() => setDropMenu(false)} className={pathname == '/world' && 'active'}>World</Link>

                <Link href='/business' onClick={() => setDropMenu(false)} className={pathname == '/business' && 'active'}>Business</Link>

                <Link href='/science' onClick={() => setDropMenu(false)} className={pathname == '/science' && 'active'}>Science</Link>

                <Link href='/health' onClick={() => setDropMenu(false)} className={pathname == '/health' && 'active'}>Health</Link>

                <Link href='/sports' onClick={() => setDropMenu(false)} className={pathname == '/sports' && 'active'}>Sports</Link>

                <Link href='/lifestyles' onClick={() => setDropMenu(false)} className={pathname == '/lifestyles' && 'active'}>Lifestyles</Link>

                <Link href='/food' onClick={() => setDropMenu(false)} className={pathname == '/food' && 'active'}>Food</Link>
                
                <Link href='/travel' onClick={() => setDropMenu(false)} className={pathname == '/travel' && 'active'}>Travel</Link>

                <Link href='/bitcoin' onClick={() => setDropMenu(false)} className={pathname == '/bitcoin' && 'active'}>Bitcoin</Link>

                <Link href='/e-sport' onClick={() => setDropMenu(false)} className={pathname == '/e-sport' && 'active'}>E-Sport</Link>

                <Link href='/india' onClick={() => setDropMenu(false)} className={pathname == '/india' && 'active'}>India</Link>
            </li>
            <div className='line' />
            <div className='line' />
        </div>
    )
}

export default Navbar