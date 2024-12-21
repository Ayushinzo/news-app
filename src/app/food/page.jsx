import React from 'react'
import { getSearchNews } from '../utils/DataFetching'
import { removeDuplicate } from '@/app/utils/RemoveDuplicate'
import Articles from '../_components/Articles/Articles'

async function food() {
    const getNews = await getSearchNews('food')
    const filterArticles = await removeDuplicate(getNews?.articles)

    return (
        <div className='top-headlines'>
            <h1 className='heading'>Food</h1>
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

export default food