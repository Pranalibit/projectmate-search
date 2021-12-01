import { useEffect, useState } from "react";

const OctoProfile = () => {
  const [octoData, setOctoData] = useState<any>("");
  useEffect(() => {
    fetch("https://api.github.com/users/utqrsh04", {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => setOctoData(res))
      .catch((err) => console.log(err));
  }, []);

  console.log("Octo Data ", octoData);
  
  return (
    <>
      <div className="flex flex-col justify-center text-2xl items-center text-black bg-red-100 h-screen">
        <div>OctoProfile 🔥 in maintainence ⛏️.</div>
        <div>
          <div>
            {octoData.name} , 
            {octoData.login} ,{octoData.location}
          </div>
        </div>
        <img src={octoData.avatar_url} alt="" className="w-20 h-20" />
      </div>
    </>
  );
};

export default OctoProfile;
