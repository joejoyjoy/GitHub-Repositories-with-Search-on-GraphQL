import { useContext } from "react";
import { SearchUserReposContext } from "../../../context/SearchUserReposContext";
import { CiSearch } from 'react-icons/ci';
import './dashboardSearch.scss'

const DashboardSearch = () => {
  const { keyword, handleSearch } = useContext(SearchUserReposContext)

  return (
    <section className="search-component">
      <div className="search-component__icon">
        <CiSearch />
      </div>
      <input
        type="text"
        value={keyword}
        onChange={handleSearch}
        placeholder="Search..."
        className="search-component__search"
      />
    </section>
  )
}

export default DashboardSearch