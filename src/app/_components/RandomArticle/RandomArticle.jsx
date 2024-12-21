import React from 'react'
import './RandomArticle.css'
import Link from 'next/link'

function RandomArticle({ article }) {
  return (
    <>
      <div className='random-article'>
        <div className="content">
          <Link href={article?.url} legacyBehavior>
            <a target='_blank'>
              {article?.title}
            </a>
          </Link>
          <p>{article?.source.name}</p>
          <p>{new Date(article?.publishedAt).toDateString()}</p>
        </div>
        <div className="random-article-image">
          <img src={article?.urlToImage != null? article.urlToImage : '../../../../public/no_image.jpg'} alt="" />
        </div>
      </div>
      <hr className='hr' />
    </>
  )
}

export default RandomArticle