import DashboardUserCard from "../../components/dashboardComponents/dashboardUserCard";
import DashboardSocialSidebar from "../../components/dashboardComponents/dashboardSocialSidebar";
import DashboardSearch from "../../components/dashboardComponents/dashboardSearch";
import DashboardSettings from "../../components/dashboardComponents/dashboardSettings/DashboardSettings";
import DashboardRepos from "../../components/dashboardComponents/dashboardRepos/DashboardRepos";
import './dashboardPage.scss'

const DashboardPage = () => {
  return (
    <main className="dashboard-page">
      <div className="dashboard-page__wrapper">
        <DashboardUserCard />
        <section>
          <DashboardSearch />
          <DashboardSettings />
          <DashboardRepos />
        </section>
        <DashboardSocialSidebar />
      </div>
    </main>
  )
}

export default DashboardPage;