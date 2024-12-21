'use client'
import React, { useState } from 'react'
import './Header.css'
import SearchSection from '../SearchSection/SearchSection'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';
// ${!dropMenu ? 'active' : null}
function Header({ dropMenu, setDropMenu }) {
  const [searchBar, setSearchBar] = useState(false)
  return (
    <>
      <div className='header-section'>
        {
          dropMenu ?
            <RxCross1 className={`menu`} onClick={() => setDropMenu(prev => !prev)} /> :
            <AiOutlineMenu className={`menu`} onClick={() => setDropMenu(prev => !prev)} />
        }
        <Link href={'/'}><h1>The Hint</h1></Link>
        <IoIosSearch className='search-icon' onClick={() => setSearchBar(true)} />
        <SearchSection searchBar={searchBar} setSearchBar={setSearchBar} />
      </div>
      <hr className='header-hr' />
    </>
  )
}

export default Header