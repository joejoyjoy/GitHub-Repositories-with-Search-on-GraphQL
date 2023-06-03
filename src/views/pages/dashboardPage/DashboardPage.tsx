import DashboardDesktopUserCard from "../../components/desktop/dashboardDUserCard";
import DashboardSocialSidebar from "../../components/dashboardSocialSidebar";
import DashboardSearch from "../../components/dashboardSearch";
import DashboardSettings from "../../components/dashboardSettings";
import DashboardRepos from "../../components/dashboardRepos";
import useWindowSizeReport from "../../../hooks/useWindowSizeReport";
import './dashboardPage.scss'

const DashboardPage = () => {
  const [screenWidth] = useWindowSizeReport();

  return (
    <main className="dashboard-page">
      <div className="dashboard-page__wrapper">
        {screenWidth > 1200 ?
          <DashboardDesktopUserCard />
          :
          <div className="dashboard-page__wrapper--user">
            <DashboardDesktopUserCard />
            <DashboardSocialSidebar />
          </div>
        }
        <div>
          <DashboardSearch />
          <DashboardSettings />
          <DashboardRepos />
        </div>
        {screenWidth > 1200 &&
          <DashboardSocialSidebar />
        }
      </div>
    </main>
  )
}

export default DashboardPage;