import { useContext } from "react";
import { UserAccessTokenContext } from "../../../../context/UserAccessTokenContext";
import { UserReposDataContext } from "../../../../context/UserReposDataContext";
import { UserDetailsContext } from "../../../../context/UserDetailsContext";
import nFormatter from "../../../../utils/nFormatter";
import ProfilePlaceholder from '../../../../assets/profile-placeholder-160x160.webp'
import './dashboardUserCard.scss'

const DashboardUserCard = () => {
  const { setAccessToken } = useContext(UserAccessTokenContext)
  const { userRepos } = useContext(UserReposDataContext)
  const { userDetails } = useContext(UserDetailsContext)

  if ((userRepos.length) === 0) {
    console.log("NO INFO");
  }

  console.log(userDetails);
  console.log(userRepos);

  console.log(nFormatter(4472543));

  return (
    <section className="user-card-component">
      <img src={ProfilePlaceholder} alt="Profile Placeholder" className="user-card-component__avatar"/>
      <div className="user-card-component__wrapper">
        <div className="user-card-component__wrapper--component">
          <div className="user-card-component__wrapper--component__user">
            <h3>User Name User</h3>
            <p>@useraccount</p>
          </div>
          <div className="user-card-component__wrapper--component__statistics">
            <div className="user-card-component__wrapper--component__statistics--details">
              <h4>299.8M</h4>
              <p>Commits</p>
            </div>
            <hr />
            <div className="user-card-component__wrapper--component__statistics--details">
              <h4>5</h4>
              <p>followers</p>
            </div>
            <hr />
            <div className="user-card-component__wrapper--component__statistics--details">
              <h4>5</h4>
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