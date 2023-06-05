import './errorPageComponent.scss'
import { Link } from 'react-router-dom'

const ErrorPageComponent = () => {
  return (
    <main className="error-page-component">
      <h2>Oops!</h2>
      <div>
        <h3>404 - Page not found</h3>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <Link to={'./dashboard'}>Go to homepage</Link>
      </div>
    </main>
  )
}

export default ErrorPageComponent