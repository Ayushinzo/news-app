import React from 'react'
import { getSearchNews } from '../utils/DataFetching'
import { removeDuplicate } from '@/app/utils/RemoveDuplicate'
import Articles from '../_components/Articles/Articles'

async function bitcoin() {
    const getNews = await getSearchNews('bitcoin')
    const filterArticles = await removeDuplicate(getNews?.articles)

    return (
        <>
            <div className='top-headlines'>
                <h1 className='heading'>Bitcoin</h1>
                {
                    filterArticles.map((article) => (
                        <>
                            <Articles data={article} />
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default bitcoin