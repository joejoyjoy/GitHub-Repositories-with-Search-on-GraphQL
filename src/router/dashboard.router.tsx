import { useEffect, useContext } from "react";
import { Navigate, Outlet } from 'react-router';
import { UserAccessTokenContext } from "../context/UserAccessTokenContext";
import { UserReposDataContext } from "../context/UserReposDataContext";
import { getUserGithubRepos } from "../api/graphqlRequests";
const { VITE_SERVER_URL } = import.meta.env;

export const DashboardRoute = () => {
  const { accessToken } = useContext(UserAccessTokenContext)
  const { setUserRepos } = useContext(UserReposDataContext)

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

  if (!accessToken) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <Outlet />
    </>
  )
};