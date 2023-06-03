import Routes from "./router/router"
import UserAccessTokenProvider from "./context/UserAccessTokenContext"
import UserReposDataProvider from "./context/UserReposDataContext"
import UserDetailsProvider from "./context/UserDetailsContext"
import SearchUserReposProvider from "./context/SearchUserReposContext"

function App() {
  return (
    <UserAccessTokenProvider>
      <UserReposDataProvider>
        <UserDetailsProvider>
          <SearchUserReposProvider>
            <Routes />
          </SearchUserReposProvider>
        </UserDetailsProvider>
      </UserReposDataProvider>
    </UserAccessTokenProvider>
  )
}

export default App
