import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from 'react-router';
const { VITE_SERVER_URL } = import.meta.env;

export const LoginRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    if (codeParam && localStorage.getItem("accessToken") === null) {
      const getAccessToken = async () => {
        try {
          const response = await fetch(`${VITE_SERVER_URL}/v1/get-access-token?code=${codeParam}`);
          const data = await response.json();

          if (data.access_token) {
            localStorage.setItem("accessToken", data.access_token);
          }

          navigate("/dashboard");
        } catch (err) {
          console.error(err);
        }
      }
      getAccessToken();
    }
  }, []);

  if (localStorage.getItem("accessToken")) {
    return <Navigate to={'/dashboard'} />
  }

  return (
    <>
      <Outlet />
    </>
  )
};