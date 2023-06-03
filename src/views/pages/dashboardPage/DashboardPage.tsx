import DashboardUserCard from "../../components/dashboardComponents/dashboardUserCard";
import DashboardSocialSidebar from "../../components/dashboardComponents/dashboardSocialSidebar";
import DashboardSearch from "../../components/dashboardComponents/dashboardSearch";
import DashboardSettings from "../../components/dashboardComponents/dashboardSettings/DashboardSettings";
import DashboardRepos from "../../components/dashboardComponents/dashboardRepos/DashboardRepos";
import useWindowSizeReport from "../../../hooks/useWindowSizeReport";
import './dashboardPage.scss'

const DashboardPage = () => {
  const [screenWidth] = useWindowSizeReport();

  return (
    <main className="dashboard-page">
      <div className="dashboard-page__wrapper">
        {screenWidth > 1200 ?
          <DashboardUserCard />
          :
          <div className="dashboard-page__wrapper--user">
            <DashboardUserCard />
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