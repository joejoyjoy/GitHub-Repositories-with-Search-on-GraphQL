import { useState, useEffect, useContext } from "react";
import { Navigate, Outlet } from 'react-router';
import { UserAccessTokenContext } from "../context/UserAccessTokenContext";
import { getUserGithubRepos } from "../api/graphqlRequests";
const { VITE_SERVER_URL } = import.meta.env;

export const DashboardRoute = () => {
  const { accessToken, setAccessToken } = useContext(UserAccessTokenContext)
  const [userRepos, setUserRepos] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(`${VITE_SERVER_URL}/v1/get-user-data`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        const loggedUserData = await response.json();
        const fetchRepos = await getUserGithubRepos(accessToken, loggedUserData.login);
        setUserRepos(fetchRepos)

      } catch (err) {
        console.error(err);
      }
    }; getUserData();
  }, []);

  if (Number(userRepos.length) === 0) {
    console.log("NO INFO");
  }

  console.log(userRepos);
  
  if (!accessToken) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <Outlet />
    </>
  )
};