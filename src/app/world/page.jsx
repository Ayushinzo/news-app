import React from 'react'
import { getSearchNews } from '../utils/DataFetching'
import { removeDuplicate } from '@/app/utils/RemoveDuplicate'
import Articles from '../_components/Articles/Articles'

async function world() {
    const getNews = await getSearchNews('world')
    const filterArticles = await removeDuplicate(getNews?.articles)

    return (
        <div className='top-headlines'>
            <h1 className='heading'>World</h1>
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

export default world