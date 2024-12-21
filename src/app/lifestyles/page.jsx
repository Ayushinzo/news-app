import React from 'react'
import { getSearchNews } from '../utils/DataFetching'
import { removeDuplicate } from '@/app/utils/RemoveDuplicate'
import Articles from '../_components/Articles/Articles'

async function lifestyles() {
    const getNews = await getSearchNews('lifestyles')
    const filterArticles = await removeDuplicate(getNews?.articles)

    return (
        <div className='top-headlines'>
            <h1 className='heading'>Lifestyles</h1>
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

export default lifestyles