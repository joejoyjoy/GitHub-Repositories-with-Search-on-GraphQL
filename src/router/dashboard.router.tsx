import { useEffect } from "react";
import { Navigate, Outlet } from 'react-router';
const { VITE_SERVER_URL } = import.meta.env;

export const DashboardRoute = () => {
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(`${VITE_SERVER_URL}/v1/get-user-data`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
          }
        });

        const loggedUserData = await response.json();
        console.log(loggedUserData);

      } catch (err) {
        console.error(err);
      }
    }; getUserData();

  }, []);

  if (!localStorage.getItem("accessToken")) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <Outlet />
    </>
  )
};