'use client'
import React, { useState } from 'react'
import './SearchSection.css'
import { RxCross1 } from "react-icons/rx";
import { useRouter } from 'next/navigation';

function SearchSection({ setSearchBar, searchBar }) {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    router.push(`/search/${searchValue}`)
    setSearchBar(false)
  }

  function handleChance(e) {
    setSearchValue(e.target.value)
  }
  return (
    <div className={`search-section ${searchBar && 'active'}`}>
      <RxCross1 className='cancel-circle' onClick={() => setSearchBar(false)} />
      <div className='search-section-container'>
        <form onSubmit={handleSubmit}>
          <input type='search' name='search' onChange={handleChance} value={searchValue} required placeholder='e.g. world, business' />
          <button type='submit' className='search-btn'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchSection
