import { useContext } from "react";
import { UserDetailsContext } from "../../../../context/UserDetailsContext";
import nFormatter from "../../../../utils/nFormatter";
import ProfilePlaceholder from '../../../../assets/profile-placeholder-160x160.webp'
import './dashboardSocialSidebar.scss'

const DashboardSocialSidebar = () => {
  const { userDetails } = useContext(UserDetailsContext)
  const { following } = userDetails

  if ((userDetails.length) === 0) {
    console.log("NO INFO");
  }

  console.log(nFormatter(4472543));

  return (
    <section className="social-sidebar-component">
      <div className="social-sidebar-component__header">
        <h3>PEOPLE YOU FOLLOW</h3>
      </div>
      <div className="social-sidebar-component__grid">
        {userDetails?.following &&
          following?.nodes.map((follower: any) => {
            const { id, avatarUrl, name, login, url } = follower;
            return (
              <div key={id} className="social-sidebar-component__grid--wrapper">
                <div className="social-sidebar-component__grid--wrapper__avatar">
                  <img src={follower ? avatarUrl : ProfilePlaceholder} alt="Profile Placeholder" />
                </div>
                <a href={follower ? url : "#"} className="social-sidebar-component__grid--wrapper__component">
                  <h4>{follower ? name : "User Name"}</h4>
                  <p>{follower ? login : "accountname"}</p>
                </a>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default DashboardSocialSidebar