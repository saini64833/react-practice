import React from "react";
import { useLoaderData } from "react-router";
function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/saini64833")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
const data=useLoaderData(); 
  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <img
            src={data.avatar_url}
            alt="github_pic"
            className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
          />

          {/* Username */}
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            {data.login}
          </h2>

          {/* Followers */}
          <p className="mt-2 text-gray-600 text-lg">
            Followers:{" "}
            <span className="font-bold text-gray-900">{data.followers}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Github;

export const GithubInfoLoader=async()=>{
    const res= await fetch('https://api.github.com/users/saini64833')
    return res.json();
}