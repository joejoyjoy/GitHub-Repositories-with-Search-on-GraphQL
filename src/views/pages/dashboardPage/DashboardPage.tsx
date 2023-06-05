import { useState, Suspense } from "react";
import useWindowSizeReport from "../../../hooks/useWindowSizeReport";
import { desktopBreak, responsiveBreak } from "../../../utils/componentsConstants";
import './dashboardPage.scss'

// Components 
import DashboardSocialSidebar from "../../components/dashboardSocialSidebar";
import DashboardSearch from "../../components/dashboardSearch";
import DashboardSettings from "../../components/dashboardSettings";
import DashboardRepos from "../../components/dashboardRepos";

// Desktop
import DashboardDesktopUserCard from "../../components/desktop/dashboardDUserCard";

// Mobile
import DashboardMobileUserCard from "../../components/mobile/dashboardMUserCard/DashboardMUserCard";
import DashboardMobileNavbar from "../../components/mobile/dashboardMNavbar/DashboardMNavbar";

export default function DashboardPage() {
  const [screenWidth] = useWindowSizeReport();

  return (
    <Suspense fallback={<></>}>
      {(screenWidth > responsiveBreak) ? (
        <DesktopDashboardPage screenWidth={screenWidth} />
      ) : (
        <MobileDashboardPage />
      )}
    </Suspense>
  )
}

export const DesktopDashboardPage = ({ screenWidth }: any) => {
  return (
    <main className="desktop-dashboard-page">
      <div data-test='desktop-dashboard' className="desktop-dashboard-page__wrapper">
        {screenWidth > desktopBreak ?
          <DashboardDesktopUserCard />
          :
          <div className="desktop-dashboard-page__wrapper--user">
            <DashboardDesktopUserCard />
            <DashboardSocialSidebar />
          </div>
        }
        <div>
          <DashboardSearch />
          <DashboardSettings />
          <DashboardRepos />
        </div>
        {screenWidth > desktopBreak &&
          <DashboardSocialSidebar />
        }
      </div>
    </main>
  )
}

export const MobileDashboardPage = () => {
  const [showUser, setShowUser] = useState<boolean>(true)

  return (
    <main className="mobile-dashboard-page">
      <div className="mobile-dashboard-page__wrapper">
        <div className={`mobile-dashboard-page__wrapper--repos${showUser ? " show-repos" : ""}`}>
          <DashboardSearch />
          <DashboardSettings />
          <DashboardRepos />
        </div>
        <div className={`mobile-dashboard-page__wrapper--user${showUser ? "" : " show-user"}`} >
          <DashboardMobileUserCard />
          <DashboardSocialSidebar />
        </div>
        <DashboardMobileNavbar showUser={showUser} setShowUser={setShowUser} />
      </div>
    </main>
  )
}
