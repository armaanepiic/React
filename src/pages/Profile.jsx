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
        <button onClick={() => {
            setSearchParams({user: "Arman Hossain"})
        }}>Set User in Search Query</button>
    </div>
  );
}
