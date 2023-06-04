import { useContext } from "react";
import { UserDetailsContext } from "../../../context/UserDetailsContext";
import ProfilePlaceholder from '../../../assets/webp/profile-placeholder-160x160.webp'
import './dashboardSocialSidebar.scss'

const DashboardSocialSidebar = () => {
  const { userDetails } = useContext(UserDetailsContext)
  const { following } = userDetails

  return (
    <section className="social-sidebar-component">
      <div className="social-sidebar-component__header">
        <h3>PEOPLE YOU FOLLOW</h3>
      </div>
      <div className="social-sidebar-component__grid">
        {userDetails?.following ?
          following?.nodes.map((follower: any) => {
            const { id, avatarUrl, name, login, url } = follower;
            return (
              <div key={id} className="social-sidebar-component__grid--wrapper">
                <div className="social-sidebar-component__grid--wrapper__avatar">
                  <img src={avatarUrl ? avatarUrl : ProfilePlaceholder} alt="Profile Placeholder" />
                </div>
                <a href={url ? url : "#"} className="social-sidebar-component__grid--wrapper__component">
                  <h4>{name ? name : "Unknown"}</h4>
                  <p>{login ? login : "unknownaccount"}</p>
                </a>
              </div>
            )
          }) :
          <p>Your currently not following anyone</p>
        }
      </div>
    </section>
  )
}

export default DashboardSocialSidebar