export async function removeDuplicate(articles){
    // let filteredData = await articles.filter(article => article?.urlToImage != null && article?.title != null && article?.url != null)
    let filteredData = await articles.filter(article => article?.url != null && article?.title != "[Removed]")
    return filteredData
}