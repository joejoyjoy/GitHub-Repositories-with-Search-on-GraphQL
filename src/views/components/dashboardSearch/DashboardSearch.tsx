import { useContext } from "react";
import { SearchUserReposContext } from "../../../context/SearchUserReposContext";
import { SearchBar } from "../../../stories/searchBar/searchBar";

const DashboardSearch = () => {
  /** Search with a useContext global keyword */
  const { keyword, handleSearch } = useContext(SearchUserReposContext)

  return (
    <SearchBar value={keyword} onChange={handleSearch} />
  )
}

export default DashboardSearch