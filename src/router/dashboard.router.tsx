import { useEffect, useContext } from "react";
import { Navigate, Outlet } from 'react-router';
import { UserAccessTokenContext } from "../context/UserAccessTokenContext";
import { UserReposDataContext } from "../context/UserReposDataContext";
import { UserDetailsContext } from "../context/UserDetailsContext";
import { getUserDetails, getUserGithubRepos } from "../api/siteApiCalls";

export const DashboardRoute = () => {
  const { accessToken } = useContext(UserAccessTokenContext)
  const { setUserRepos, setIsLoading } = useContext(UserReposDataContext)
  const { userDetails, setUserDetails } = useContext(UserDetailsContext)

  useEffect(() => {
    /**
    * Making request to server when user in logged in
    * receiving server response and storing user details
    * into userDetails useContext.
    */
    
    const callUserDetailsApi = async () => {
      const request = await getUserDetails(accessToken)
      setUserDetails(request)
    }
    callUserDetailsApi();
    
  }, []);

  useEffect(() => {
    const { login, repositories } = userDetails
    
    /**
     * Fetching user repositories from GraphQL API,
     * and storing response in userRepos useContext
    */
   
   if (login) {
     const callUserReposApi = async () => {
       /** Making fetch call on getUserGithubRepos and storing in useContext */
       const request = await getUserGithubRepos(accessToken, login, repositories.totalCount, "CREATED_AT", "DESC");
        setUserRepos(request)
        setIsLoading(false)
      }; callUserReposApi();
    }

  }, [userDetails]);

  if (!accessToken) {
    /** In case user goes to dashboard whiteout being logged in redirect */
    return <Navigate to={'/'} />
  }

  return (
    <>
      <Outlet />
    </>
  )
};