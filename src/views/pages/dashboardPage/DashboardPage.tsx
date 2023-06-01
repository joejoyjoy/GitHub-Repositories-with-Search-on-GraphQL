import { useContext } from "react";
import { UserAccessTokenContext } from "../../../context/UserAccessTokenContext";

const DashboardPage = () => {
  const { setAccessToken } = useContext(UserAccessTokenContext)

  return (
    <>
      <div>DashboardPage</div>
      <>
        <h3>You are logged in</h3>
        <button onClick={() => setAccessToken('')}>
          Log out
        </button>
        <h3>User Data</h3>
      </>
    </>
  )
}

export default DashboardPage;