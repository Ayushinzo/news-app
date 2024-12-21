import React from 'react'
import Articles from '@/app/_components/Articles/Articles'
import { getSearchNews } from '@/app/utils/DataFetching'
import { removeDuplicate } from '@/app/utils/RemoveDuplicate'

async function searchValue({ params }) {
    const getNews = await getSearchNews(params["search-value"].replaceAll('%20', ' '))
    const filterArticles = await removeDuplicate(getNews?.articles)
    console.log(params['search-value'])
    return (
        <div className='top-headlines'>
            <h1 className='heading'>{params["search-value"].replaceAll('%20', ' ')}</h1>
            {
                filterArticles.map((article) => (
                    <>
                        <Articles data={article} />
                    </>
                ))
            }
        </div>
    )
}

export default searchValue