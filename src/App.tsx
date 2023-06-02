import Routes from "./router/router"
import UserAccessTokenProvider from "./context/UserAccessTokenContext"
import UserReposDataProvider from "./context/UserReposDataContext"
import UserDetailsProvider from "./context/UserDetailsContext"

function App() {
  return (
    <UserAccessTokenProvider>
      <UserReposDataProvider>
        <UserDetailsProvider>
          <Routes />
        </UserDetailsProvider>
      </UserReposDataProvider>
    </UserAccessTokenProvider>
  )
}

export default App
