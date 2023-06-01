import { useContext } from "react";
import { UserAccessTokenContext } from "../../../context/UserAccessTokenContext";
import { UserReposDataContext } from "../../../context/UserReposDataContext";

const DashboardComponents = () => {
  const { setAccessToken } = useContext(UserAccessTokenContext)
  const { userRepos } = useContext(UserReposDataContext)

  if ((userRepos.length) === 0) {
    console.log("NO INFO");
  }

  console.log(userRepos);

  return (
    <>
      <div>DashboardPage</div>
      <>
        <h3>You are logged in</h3>
        <button onClick={() => setAccessToken('')}>
          Log out
        </button>
        <h3>User Data</h3>
        {userRepos &&
          userRepos.map((repo: any) => {
            return <ul><a href={repo.url}>{repo.name}</a></ul>
          })
        }
      </>
    </>
  )
}

export default DashboardComponents