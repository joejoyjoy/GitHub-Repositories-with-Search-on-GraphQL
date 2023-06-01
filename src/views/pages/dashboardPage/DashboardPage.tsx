import { useState } from "react";

const DashboardPage = () => {
  const [rerender, setRerender] = useState(false);

  return (
    <>
      <div>DashboardPage</div>
      <>
        <h3>You are logged in</h3>
        <button onClick={() => { localStorage.removeItem("accessToken"); setRerender(!rerender) }}>
          Log out
        </button>
        <h3>User Data</h3>
      </>
    </>
  )
}

export default DashboardPage;