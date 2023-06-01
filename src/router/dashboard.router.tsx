import { useEffect, useContext } from "react";
import { Navigate, Outlet } from 'react-router';
import { UserAccessTokenContext } from "../context/UserAccessTokenContext";
const { VITE_SERVER_URL } = import.meta.env;

export const DashboardRoute = () => {
  const { accessToken, setAccessToken } = useContext(UserAccessTokenContext)

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(`${VITE_SERVER_URL}/v1/get-user-data`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        const loggedUserData = await response.json();
        console.log(loggedUserData);

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