
import React, { useEffect, useState } from 'react'
import './RandomNews.css'
import RandomArticle from '../RandomArticle/RandomArticle'
import { getRandomNews } from '@/app/utils/DataFetching'
import { removeDuplicate } from '@/app/utils/RemoveDuplicate'

function RandomNews() {
  const [data, setData] = useState([])

  async function fetchData() {
    const fetchedArticles = await getRandomNews()
    const filteredArticles = await removeDuplicate(fetchedArticles?.articles)
    setData(filteredArticles)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='random-news'>
      <h1>Random news</h1>
      {
        data.map((article, index) => {
          return (
            <div key={index}>
              <RandomArticle article={article} />
            </div>
          )
        })
      }
    </div>
  )
}

export default RandomNews