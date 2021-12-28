export const getTrends = () => {
    return fetch(
        "https://google-trend-api.p.rapidapi.com/realTimeTrends?geo=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "google-trend-api.p.rapidapi.com",
            "x-rapidapi-key": "6b9544ee8cmsh0e797f5cf6364e4p168c3djsne1aefc993459"
        }
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => {
        console.error(err);
      });
  };