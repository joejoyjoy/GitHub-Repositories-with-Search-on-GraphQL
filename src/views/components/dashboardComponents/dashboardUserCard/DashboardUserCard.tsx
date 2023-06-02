import { useContext } from "react";
import { UserAccessTokenContext } from "../../../../context/UserAccessTokenContext";
import { UserDetailsContext } from "../../../../context/UserDetailsContext";
import nFormatter from "../../../../utils/nFormatter";
import ProfilePlaceholder from '../../../../assets/profile-placeholder-160x160.webp'
import './dashboardUserCard.scss'

const DashboardUserCard = () => {
  const { setAccessToken } = useContext(UserAccessTokenContext)
  const { userDetails } = useContext(UserDetailsContext)
  const { avatarUrl, name, login, url} = userDetails

  return (
    <section className="user-card-component">
      <img src={userDetails ? avatarUrl : ProfilePlaceholder} alt="Profile Placeholder" className="user-card-component__avatar"/>
      <div className="user-card-component__wrapper">
        <div className="user-card-component__wrapper--component">
          <a href={userDetails ? url : "#"} className="user-card-component__wrapper--component__user">
            <h3>{userDetails ? name : "User Name"}</h3>
            <p>github.com/{userDetails ? login : "accountname"}</p>
          </a>
          <div className="user-card-component__wrapper--component__statistics">
            <div className="user-card-component__wrapper--component__statistics--details">
              <h4>{userDetails ? nFormatter(userDetails.issues?.totalCount) : "none"}</h4>
              <p>Issues</p>
            </div>
            <hr />
            <div className="user-card-component__wrapper--component__statistics--details">
              <h4>{userDetails ? nFormatter(userDetails.followers?.totalCount) : "none"}</h4>
              <p>followers</p>
            </div>
            <hr />
            <div className="user-card-component__wrapper--component__statistics--details">
              <h4>{userDetails ? nFormatter(userDetails.following?.totalCount) : "none"}</h4>
              <p>following</p>
            </div>
          </div>
        </div>
        <hr className="user-card-component__wrapper--hr"/>
        <button onClick={() => setAccessToken('')} className="user-card-component__wrapper--logout">
          Log out
        </button>
      </div>
    </section>
  )
}

export default DashboardUserCard