import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from 'react-router';
import { UserAccessTokenContext } from "../context/UserAccessTokenContext";
import { getAccessToken } from "../api/siteApiCalls";

export const LoginRoute = () => {
  const navigate = useNavigate();
  const { accessToken, setAccessToken, setIsLoading } = useContext(UserAccessTokenContext)

  useEffect(() => {
    /**
    * Making request to server after page
    * gets url code param from GitHub OAuth App.
    * 
    * Storing server answerer into accessToken useContext,
    * and redirect to dashboard page
    */

    /** Retrieving OAuth result */
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    if (codeParam) {
      const callAccessTokenApi = async () => {
        /** Making fetch call on getAccessToken and storing in useContext */
        setIsLoading(true)
        const request = await getAccessToken(codeParam)
        setIsLoading(false)
        setAccessToken(request);
        navigate("./dashboard")
      }
      callAccessTokenApi();
    }

  }, []);

  if (accessToken) {
    /** In case user goes back to login being logged in redirect */
    return <Navigate to={'/dashboard'} />
  }

  return (
    <>
      <Outlet />
    </>
  )
};
