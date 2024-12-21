export async function getTopHeadlines() {
  // let newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`, { cache: 'no-store' })

  // return newsData.json()
  let newsData = {
    "status": "ok",
    "totalResults": 37,
    "articles": [
      {
        "source": {
          "id": "the-hill",
          "name": "The Hill"
        },
        "author": "Al Weaver",
        "title": "Senate Democrat on Biden, Cuban comments about Trump supporters: ‘I don’t like it’ - The Hill",
        "description": "Sen. Peter Welch (D-Vt.) on Friday criticized comments made in recent days by President Biden and entrepreneur Mark Cuban about former President Trump’s supporters. The Vermont Democrat did not hide his displeasure when asked by reporters about Biden appearin…",
        "url": "https://thehill.com/homenews/senate/4965982-welch-trump-supporters-cuban-biden/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/07/welchpeter_073124gn01_w.jpg?w=1280",
        "publishedAt": "2024-11-01T16:35:56Z",
        "content": "Skip to content\r\nSen. Peter Welch (D-Vt.) on Friday criticized comments made in recent days by President Biden and entrepreneur Mark Cuban about former President Trump’s supporters.\r\nThe Vermont Demo… [+1951 chars]"
      },
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Andrew Jeong, Victoria Bisset, Miriam Berger, Steve Hendrix, Amanda Coletta, Hazem Balousha, Alon Rom, Meg Kelly, Imogen Piper, Evan Hill, Abbie Cheeseman, Louisa Loveluck, Suzan Haidamous",
        "title": "Live Briefing: Israel strikes Beirut area; U.S. pushes to rekindle peace talks - The Washington Post",
        "description": "U.S. Secretary of State Antony Blinken argued that Israel has accomplished its main objectives in Gaza and thus the “focus now must be on ending the war.”",
        "url": "https://www.washingtonpost.com/world/2024/11/01/israel-iran-war-news-lebanon-hezbollah-gaza-palestine/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DMDAWN3PSMMUJP5KAV4UOATMVU.jpg&w=1440",
        "publishedAt": "2024-11-01T16:31:01Z",
        "content": "The Israeli military carried out strikes on Beiruts southern suburbs overnight, the first time in several days that Israel has targeted the area.\r\nThe Israel Defense Forces Arabic-language spokesman,… [+1491 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "FATIMA HUSSEIN",
        "title": "IRS announces pension and retirement plan contribution adjustments for 2025 - Yahoo Finance",
        "description": "The IRS on Friday announced an increase to the amount individuals can contribute to their 401(k) plans in 2025 — to $23,500, up from $23,000 in 2024.  The...",
        "url": "https://finance.yahoo.com/news/irs-announces-pension-retirement-plan-160012610.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/k5sD3SidYcRnqQ9MrveJ1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap_finance_articles_694/0a178bfec367f533af40ffa7965e365a",
        "publishedAt": "2024-11-01T16:00:12Z",
        "content": "WASHINGTON (AP) The IRS on Friday announced an increase to the amount individuals can contribute to their 401(k) plans in 2025 to $23,500, up from $23,000 in 2024.\r\nThe Internal Revenue Service detai… [+1257 chars]"
      },
      {
        "source": {
          "id": "politico",
          "name": "Politico"
        },
        "author": "Robin Bravender",
        "title": "Conservative outfits are scouring feds’ emails - POLITICO",
        "description": "Right-leaning groups have filed tens of thousands of information requests as Donald Trump plans a scorched-earth reign over civil servants.",
        "url": "https://www.politico.com/news/2024/10/31/conservative-activists-scour-federal-employee-emails-00186622",
        "urlToImage": "https://static.politico.com/f3/e6/c19f6948480eafa2ef8b3757c21e/gw-1028-bravender-foia-2000-01.jpg",
        "publishedAt": "2024-11-01T16:00:00Z",
        "content": "James Sherk, who served as a special assistant on domestic policy during Trumps term, submitted a series of records requests from the Environmental Protection Agency in August 2022, days after he pen… [+7819 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Deadline"
        },
        "author": "Dessi Gomez",
        "title": "'Agatha All Along' Star Joe Locke Explains Ending Episodes For Wiccan - Deadline",
        "description": "'Agatha All Along' star Joe Locke discussed big moments for his character Billy in the show's final two episodes as well as his future in the MCU.",
        "url": "http://deadline.com/2024/11/agatha-all-along-finale-joe-locke-interview-1236163758/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2024/10/HBT3660_108_comp_BAR_v0021_r709.1024_R.jpeg?w=1024",
        "publishedAt": "2024-11-01T16:00:00Z",
        "content": "SPOILER ALERT! This post contains spoilers for the final two episodes (and entirety) of Agatha All Along.\r\nMarvel’s Agatha All Along has reached the end of the Witches’ Road, which turned out to be q… [+14948 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "TMZ"
        },
        "author": "TMZ Staff",
        "title": "Bianca Censori Switches Up Barely-There Look for Surprise Halloween Cover-Up - TMZ",
        "description": "Bianca Censori threw us a curveball this Halloween ... ditching her usual barely-there looks for a surprise cover-up, proving even she can play it a little coy when she wants to.",
        "url": "https://www.tmz.com/2024/11/01/bianca-censori-covers-up-halloween-outfit-japan/",
        "urlToImage": "https://imagez.tmz.com/image/37/16by9/2024/11/01/37156bf08aa743baacf1e3ce97a9bedc_xl.jpg",
        "publishedAt": "2024-11-01T15:59:05Z",
        "content": "Bianca Censori threw us a curveball this Halloween ... ditching her usual barely-there look for a surprise cover-up, proving even she can play it a little coy when she wants to.\r\nThe Aussie model hit… [+833 chars]"
      },
      {
        "source": {
          "id": "usa-today",
          "name": "USA Today"
        },
        "author": "Gabe Hauari, Christopher Cann",
        "title": "2 dead, 6 injured in Orlando mass shooting amid Halloween festivities - USA TODAY",
        "description": "Police at the scene arrested a 17-year-old suspect after shootings in downtown Orlando early Friday morning.",
        "url": "https://www.usatoday.com/story/news/nation/2024/11/01/downtown-orlando-mass-shooting/75983629007/",
        "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/11/01/USAT/75984568007-20241101-vpc-deadly-shooting-in-orlando-stringr-00-00-01-03-still-004.jpg?crop=1919,1079,x0,y0&width=1919&height=1079&format=pjpg&auto=webp",
        "publishedAt": "2024-11-01T15:33:45Z",
        "content": "Two people were killed, six were injured and a 17-year-old was arrested after gunfire broke out overnight in downtown Orlando, Florida, where tens of thousands were gathered to celebrate Halloween, s… [+2529 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Boeing: Aviation giant makes 38% pay rise offer in bid to end strike - BBC.com",
        "description": "The union representing more than 30,000 striking workers endorsed the offer and will hold a ballot on Monday.",
        "url": "https://www.bbc.com/news/articles/c8rlk5dxyzno",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a3c1/live/eaba9b00-97fe-11ef-b384-77f20954fa15.jpg",
        "publishedAt": "2024-11-01T14:56:45Z",
        "content": "Striking Boeing workers are set to vote on a new offer from the aviation giant, which includes a 38% pay rise over the next four years.\r\nThe International Association of Machinists and Aerospace Work… [+2108 chars]"
      }
    ]
  }

  return newsData
}

export async function getSearchNews(searchValue) {
  try {
    // let searchNewsData = await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&language=en&pageSize=12&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`, { cache: 'no-store' })

    // return searchNewsData.json()
    let searchNewsData = {
      "status": "ok",
      "totalResults": 38,
      "articles": [
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Antoinette Radford, Jessie Yeung, Tori B. Powell",
          "title": "Harris and Trump’s final campaign sprint to Election Day - CNN",
          "description": "With only five days until Election Day, Vice President Kamala Harris and former President Donald Trump are in the pivotal battleground states of Nevada and Arizona today. Follow here for the latest live news updates on the 2024 campaign.",
          "url": "https://www.cnn.com/politics/live-news/trump-harris-election-10-31-24/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/20241029-kamala-harris-donald-trump-split.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-10-31T10:17:00Z",
          "content": "Kamala Harris and Donald Trump are making their final push in battleground states with less than a week to Election Day.\r\nTrump was in Wisconsin on Wednesday, where he again slammed Joe Biden over th… [+3050 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "MIKE FITZPATRICK",
          "title": "Yankees blow 5-run lead with epic defensive meltdown as Dodgers rally to clinch World Series - The Associated Press",
          "description": "Just when it appeared Aaron Judge and the New York Yankees were right back in this World Series, they all but gave away the trophy. An epic meltdown of defensive miscues, beginning with Judge’s embarrassing error in center field, helped the Los Angeles Dodger…",
          "url": "https://apnews.com/article/world-series-yankees-errors-ff3ca215e6064c1983e4cce4f41a97e0",
          "urlToImage": "https://dims.apnews.com/dims4/default/32d4649/2147483647/strip/true/crop/4190x2357+0+218/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2F24%2Ff2075171983be7258ed948b21d1b%2F7f46d2f9c32e408581ff815ff344fc82",
          "publishedAt": "2024-10-31T09:38:00Z",
          "content": "NEW YORK (AP) Just when it appeared Aaron Judge and the New York Yankees were right back in this World Series, they all but gave away the trophy.\r\nAn epic meltdown of defensive miscues, beginning wit… [+5509 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Dina Bass and Matt Day",
          "title": "Microsoft Shares Drop on Disappointing Cloud Growth Forecast - Yahoo Finance",
          "description": "(Bloomberg) -- Microsoft Corp. shares dropped in late trading after the software maker forecast slower quarterly cloud revenue growth, reflecting the...",
          "url": "https://finance.yahoo.com/news/microsoft-cloud-fuels-stronger-expected-203124073.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Xu7iuna4URmNzrYdeFoTxQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02ODA-/https://media.zenfs.com/en/bloomberg_technology_68/6887938fe160a3bb627dd2db343dab8f",
          "publishedAt": "2024-10-31T09:19:35Z",
          "content": "(Bloomberg) Microsoft Corp. shares dropped in late trading after the software maker forecast slower quarterly cloud revenue growth, reflecting the companys struggle to bring data centers online fast … [+5474 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "SciTechDaily"
          },
          "author": null,
          "title": "Breathtaking Views: NASA’s Perseverance Rover Battles Slippery Terrain To Reach Mars’ Summit - SciTechDaily",
          "description": "NASA's Perseverance rover is making a treacherous ascent up Jezero Crater's western wall, navigating slippery slopes and testing new driving strategies to enhance traction. With sights set on reaching the crater rim soon, it aims to investigate scientifically…",
          "url": "https://scitechdaily.com/breathtaking-views-nasas-perseverance-rover-battles-slippery-terrain-to-reach-mars-summit/",
          "urlToImage": "https://scitechdaily.com/images/NASA-Perseverance-Mars-Rover-Tracks-Reveal-Terrain-Slipperiness.jpg",
          "publishedAt": "2024-10-31T08:20:29Z",
          "content": "Tracks shown in this image indicate the slipperiness of the terrain Perseverance has encountered during its climb up the rim of Jezero Crater. The image was taken by one of rover’s navigation cameras… [+7465 chars]"
        }
      ]
    }

    return searchNewsData
  }
  catch (err) {
    console.log(err)
  }
}

export async function getRandomNews() {
  try {
    // let searchNewsData = await fetch(`https://newsapi.org/v2/everything?q=random news&language=en&pageSize=12&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`, { cache: 'no-store'})

    // return searchNewsData.json()
    let searchNewsData = {
      "status": "ok",
      "totalResults": 38,
      "articles": [
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Antoinette Radford, Jessie Yeung, Tori B. Powell",
          "title": "Harris and Trump’s final campaign sprint to Election Day - CNN",
          "description": "With only five days until Election Day, Vice President Kamala Harris and former President Donald Trump are in the pivotal battleground states of Nevada and Arizona today. Follow here for the latest live news updates on the 2024 campaign.",
          "url": "https://www.cnn.com/politics/live-news/trump-harris-election-10-31-24/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/20241029-kamala-harris-donald-trump-split.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-10-31T10:17:00Z",
          "content": "Kamala Harris and Donald Trump are making their final push in battleground states with less than a week to Election Day.\r\nTrump was in Wisconsin on Wednesday, where he again slammed Joe Biden over th… [+3050 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "MIKE FITZPATRICK",
          "title": "Yankees blow 5-run lead with epic defensive meltdown as Dodgers rally to clinch World Series - The Associated Press",
          "description": "Just when it appeared Aaron Judge and the New York Yankees were right back in this World Series, they all but gave away the trophy. An epic meltdown of defensive miscues, beginning with Judge’s embarrassing error in center field, helped the Los Angeles Dodger…",
          "url": "https://apnews.com/article/world-series-yankees-errors-ff3ca215e6064c1983e4cce4f41a97e0",
          "urlToImage": "https://dims.apnews.com/dims4/default/32d4649/2147483647/strip/true/crop/4190x2357+0+218/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2F24%2Ff2075171983be7258ed948b21d1b%2F7f46d2f9c32e408581ff815ff344fc82",
          "publishedAt": "2024-10-31T09:38:00Z",
          "content": "NEW YORK (AP) Just when it appeared Aaron Judge and the New York Yankees were right back in this World Series, they all but gave away the trophy.\r\nAn epic meltdown of defensive miscues, beginning wit… [+5509 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Dina Bass and Matt Day",
          "title": "Microsoft Shares Drop on Disappointing Cloud Growth Forecast - Yahoo Finance",
          "description": "(Bloomberg) -- Microsoft Corp. shares dropped in late trading after the software maker forecast slower quarterly cloud revenue growth, reflecting the...",
          "url": "https://finance.yahoo.com/news/microsoft-cloud-fuels-stronger-expected-203124073.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Xu7iuna4URmNzrYdeFoTxQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02ODA-/https://media.zenfs.com/en/bloomberg_technology_68/6887938fe160a3bb627dd2db343dab8f",
          "publishedAt": "2024-10-31T09:19:35Z",
          "content": "(Bloomberg) Microsoft Corp. shares dropped in late trading after the software maker forecast slower quarterly cloud revenue growth, reflecting the companys struggle to bring data centers online fast … [+5474 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "SciTechDaily"
          },
          "author": null,
          "title": "Breathtaking Views: NASA’s Perseverance Rover Battles Slippery Terrain To Reach Mars’ Summit - SciTechDaily",
          "description": "NASA's Perseverance rover is making a treacherous ascent up Jezero Crater's western wall, navigating slippery slopes and testing new driving strategies to enhance traction. With sights set on reaching the crater rim soon, it aims to investigate scientifically…",
          "url": "https://scitechdaily.com/breathtaking-views-nasas-perseverance-rover-battles-slippery-terrain-to-reach-mars-summit/",
          "urlToImage": "https://scitechdaily.com/images/NASA-Perseverance-Mars-Rover-Tracks-Reveal-Terrain-Slipperiness.jpg",
          "publishedAt": "2024-10-31T08:20:29Z",
          "content": "Tracks shown in this image indicate the slipperiness of the terrain Perseverance has encountered during its climb up the rim of Jezero Crater. The image was taken by one of rover’s navigation cameras… [+7465 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Alex Harring",
          "title": "Nasdaq 100 futures rise as investors parse latest tech earnings, await jobs data: Live updates - CNBC",
          "description": "Stocks climbed to kick off November as Amazon led big technology stocks into the green and traders looked past a disappointing jobs report.",
          "url": "https://www.cnbc.com/2024/10/31/stock-market-today-live-updates.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/108039087-1727283086006-NYSE_Traders-OB-Photo-ALR-20240925-Press-3.jpg?v=1727297047&w=1920&h=1080",
          "publishedAt": "2024-11-01T14:17:00Z",
          "content": "Stocks climbed Friday to kick off November as Amazon led big technology stocks into the green and traders looked past a disappointing jobs report.\r\nThe Dow Jones Industrial Average gained 467 points,… [+1704 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Ashley Strickland",
          "title": "A radio transmitter not used since 1981 is helping Voyager 1 send messages to Earth - CNN",
          "description": "Voyager 1 relays messages to NASA’s mission control team after losing contact due to a technical issue. The aging spacecraft is relying on an old radio transmitter.",
          "url": "https://www.cnn.com/2024/11/01/science/voyager-1-transmitter-issue/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/1-voyager-2-copy.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-11-01T13:57:00Z",
          "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nThe 47-year-old Voyager 1 spacecraft is back in touch … [+4688 chars]"
        },

        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "2024-11-01T14:43:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "TERESA MEDRANO",
          "title": "What to know about the unprecedented floods that killed more than 200 in Spain - The Associated Press",
          "description": "In a matter of minutes, flash floods caused by heavy downpours in eastern Spain swept away everything in their path. With no time to react, people were trapped in vehicles, homes and businesses for hours. Three days after the deluge started on Tuesday, author…",
          "url": "https://apnews.com/article/flash-floods-spain-valencia-climate-change-what-to-know-f942142b82de24f5b4a18867bc32ae00",
          "urlToImage": "https://dims.apnews.com/dims4/default/0847997/2147483647/strip/true/crop/6214x3495+0+324/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc6%2F16%2Fb44ec3388faab3d70da5451f3dd3%2Fbfd726ae4f5c436ba549605abdd5bb63",
          "publishedAt": "2024-11-01T14:17:00Z",
          "content": "MADRID (AP) In a matter of minutes, flash floods caused by heavy downpours in eastern Spain on Tuesday swept away everything in their path. With no time to react, people were trapped in vehicles, hom… [+3917 chars]"
        }
      ]
    }

    return searchNewsData
  }
  catch (err) {
    console.log(err)
  }
}