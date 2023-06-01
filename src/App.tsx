import Routes from "./router/router"
import UserAccessTokenProvider from "./context/UserAccessTokenContext"
import UserReposDataProvider from "./context/UserReposDataContext"

function App() {
  return (
    <UserAccessTokenProvider>
      <UserReposDataProvider>
        <Routes />
      </UserReposDataProvider>
    </UserAccessTokenProvider>
  )
}

export default App
