import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router";

export default function Profile() {
  const {profileId} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  
  return (
    <div>
        <p>{JSON.stringify(profileId, null, 2)}</p>
        <p>{`Search Params: ${searchParams.getAll(profileId)}`}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold cursor-pointer active:bg-blue-700" onClick={() => {
            setSearchParams({ user: "Arman Hossain"})
        }}>Set User in Search Query</button>
        <div className="h-[1000px]"></div>
    </div>
  );
}
