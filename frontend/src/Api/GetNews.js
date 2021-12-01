export const getNews = () => {
    return fetch(
      "https://bing-news-search1.p.rapidapi.com/news?count=2&offset=5&category=ScienceAndTechnology&mkt=en-IN&setLang=en&safeSearch=Off&textFormat=Raw",
      {
        method: "GET",
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key": "fe35280735msh2652c6f5a1945efp164cfcjsn2e7cb68ac396",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => {
        console.error(err);
      });
  };