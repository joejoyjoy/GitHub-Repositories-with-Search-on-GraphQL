import { useContext } from "react";
import { UserDetailsContext } from "../../../../context/UserDetailsContext";
import nFormatter from "../../../../utils/nFormatter";
import ProfilePlaceholder from '../../../../assets/profile-placeholder-160x160.webp'
import './dashboardSocialSidebar.scss'

const DashboardSocialSidebar = () => {
  const { userDetails } = useContext(UserDetailsContext)

  if ((userDetails.length) === 0) {
    console.log("NO INFO");
  }

  console.log(userDetails);

  console.log(nFormatter(4472543));

  return (
    <section className="social-sidebar-component">
      <div className="social-sidebar-component__header">
        <h3>PEOPLE YOU FOLLOW</h3>
      </div>
      <div className="social-sidebar-component__grid">
        <div className="social-sidebar-component__grid--wrapper">
          <div className="social-sidebar-component__grid--wrapper__avatar">
            <img src={ProfilePlaceholder} alt="Profile Placeholder" />
          </div>
          <div className="social-sidebar-component__grid--wrapper__component">
            <h4>User Name User Name</h4>
            <p>@useraccount</p>
          </div>
        </div>
        <div className="social-sidebar-component__grid--wrapper">
          <div className="social-sidebar-component__grid--wrapper__avatar">
            <img src={ProfilePlaceholder} alt="Profile Placeholder" />
          </div>
          <div className="social-sidebar-component__grid--wrapper__component">
            <h4>User Name User aa</h4>
            <p>@useraccount</p>
          </div>
        </div>
        <div className="social-sidebar-component__grid--wrapper">
          <div className="social-sidebar-component__grid--wrapper__avatar">
            <img src={ProfilePlaceholder} alt="Profile Placeholder" />
          </div>
          <div className="social-sidebar-component__grid--wrapper__component">
            <h4>User Name User</h4>
            <p>@useraccount</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardSocialSidebar