import React from 'react'
import './TopHeadlines.css'
import Articles from '../Articles/Articles'
import { getTopHeadlines } from '@/app/utils/DataFetching'
import { removeDuplicate } from '@/app/utils/RemoveDuplicate'

async function TopHeadlines() {
  const getNews = await getTopHeadlines()
  const filterArticles = await removeDuplicate(getNews?.articles)
  return (
    <>
    <h1 className='heading'>Top headlines</h1>
      {
        filterArticles.map((article, index)=>(
          <div key={index}>
            <Articles data={article}/>
          </div>
        ))
      }
    </>
  )
}

export default TopHeadlines