import React from 'react'
import { getSearchNews } from '../utils/DataFetching'
import { removeDuplicate } from '@/app/utils/RemoveDuplicate'
import Articles from '../_components/Articles/Articles'

async function travel() {
    const getNews = await getSearchNews('travel')
    const filterArticles = await removeDuplicate(getNews?.articles)

    return (
        <div className='top-headlines'>
            <h1 className='heading'>Travel</h1>
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

export default travel