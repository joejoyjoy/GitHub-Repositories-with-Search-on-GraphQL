import { useEffect, useContext } from "react";
import { Navigate, Outlet } from 'react-router';
import { UserAccessTokenContext } from "../context/UserAccessTokenContext";
import { UserReposDataContext } from "../context/UserReposDataContext";
import { UserDetailsContext } from "../context/UserDetailsContext";
import { getUserGithubRepos, getUserDetails } from "../api/graphqlRequests";
const { VITE_SERVER_URL } = import.meta.env;

export const DashboardRoute = () => {
  const { accessToken } = useContext(UserAccessTokenContext)
  const { setUserRepos } = useContext(UserReposDataContext)
  const { setUserDetails } = useContext(UserDetailsContext)

  useEffect(() => {
    const getUserData = async () => {
      const fetchUserDetails = await getUserDetails(accessToken);
      setUserDetails(fetchUserDetails)

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