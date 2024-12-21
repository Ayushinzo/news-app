import React from 'react'
import './Articles.css'
import Link from 'next/link'

// {data.urlToImage != null ? data.urlToImage : '../../../../public/no_image.jpg'}

function Articles({ data }) {

    return (
        <>
            <div className='articles'>
                <div className="image">
                    <img src={data.urlToImage != null ? data.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3CETL_OertJKScoHfblxs6CBrKGVCmVESw&s"} />
                </div>
                <Link href={data.url} legacyBehavior>
                    <a target='_blank'>
                        {data.title}
                    </a>
                </Link>
                <div className="small">
                    <p>{data.source.name}</p>
                    <p>{data.author}</p>
                    <p>{new Date(data.publishedAt).toLocaleDateString()}</p>
                </div>
                <p className='desc'>{data.description}...</p>
            </div>
            <hr className='hr'/>
        </>
    )
}

export default Articles