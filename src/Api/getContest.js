export const getAllContest = () => {

  console.log("Get All Contest");
  

    return fetch("https://kontests.net/api/v1/all", {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log(err));
  };

export default getAllContest;