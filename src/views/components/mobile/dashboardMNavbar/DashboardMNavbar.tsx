import { HiUserGroup } from 'react-icons/hi'
import { AiFillHome } from 'react-icons/ai'
import './dashboardMNavbar.scss'

const DashboardMobileNavbar = ({ showUser, setShowUser }) => {

  return (
    <section className="mobile-navbar-component">
      <button onClick={() => setShowUser(true)} className={`mobile-navbar-component__action${showUser ? " active-nav" : ""}`}><AiFillHome /></button>
      <button onClick={() => setShowUser(false)} className={`mobile-navbar-component__action${showUser ? "" : " active-nav"}`}><HiUserGroup /></button>
    </section>
  )
}

export default DashboardMobileNavbar