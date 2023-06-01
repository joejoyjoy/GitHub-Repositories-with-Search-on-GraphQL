import Routes from "./router/router"
import UserAccessTokenProvider from "./context/UserAccessTokenContext"

function App() {
  return (
    <UserAccessTokenProvider>
      <Routes />
    </UserAccessTokenProvider>
  )
}

export default App
