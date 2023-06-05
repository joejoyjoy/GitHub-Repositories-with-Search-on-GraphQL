import { useContext } from "react";
import ReactMarkdown from 'react-markdown';
import moment from "moment";
import { UserReposDataContext } from "../../../context/UserReposDataContext";
import { UserDetailsContext } from "../../../context/UserDetailsContext";
import { SearchUserReposContext } from "../../../context/SearchUserReposContext";
import useWindowSizeReport from "../../../hooks/useWindowSizeReport";
import { mobileBreak } from "../../../utils/componentsConstants";
import readmeMakeUp from "../../../utils/readmeMakeUp";
import Loader from "../../../UI";
import Empty from '../../../assets/png/empty-error.png'
import './dashboardRepos.scss'

export default function DashboardRepos() {
  const { userRepos, isLoading } = useContext(UserReposDataContext)
  const { userDetails } = useContext(UserDetailsContext)
  const { keyword } = useContext(SearchUserReposContext)

  const searchReposResult = userRepos.filter((p: any) =>
    /** Search function with a useContext global keyword */
    p.name.toString().toLowerCase().includes(keyword.toLowerCase())
  );

  if (isLoading) {
    return (
      <section className="error-no-repos">
        <Loader />
      </section>
    )
  }

  if ((userRepos.length) === 0) {
    return (
      <section className="error-no-repos">
        <img src={Empty} alt="No search results image error" />
        <p>No Repositories found - <a href={`${userDetails?.url}?tab=repositories`}>Add one now!</a></p>
      </section>
    )
  }

  if ((searchReposResult.length) === 0) {
    return (
      <section className="error-no-repos">
        <img src={Empty} alt="No search results image error" />
        <p>No Repository name match you search</p>
      </section>
    )
  }

  return (
    <section className="user-repos-component">
      {userRepos &&
        searchReposResult?.map((repo: any) => {
          const { id, url } = repo;

          return (
            <article key={id} className="user-repos-component__article">
              <UserRepo repo={repo}>
                <div className="user-repos-component-body">
                  <ReactMarkdown children={readmeMakeUp(repo)} disallowedElements={["img", "code"]} />
                  {readmeMakeUp(repo).length > 120 &&
                    <a href={url} className="user-repos-component-body--more">
                      Show repository
                    </a>
                  }
                </div>
              </UserRepo>
            </article>
          )
        })
      }
    </section>
  )
}

const UserRepo = ({ repo, children }: any) => {
  const { name, owner, url, createdAt } = repo;
  const [screenWidth] = useWindowSizeReport();

  if (screenWidth >= mobileBreak) {
    return (
      <>
        <div className="user-repos-desktop-avatar">
          <img src={owner.avatarUrl} alt={owner.login} />
        </div>
        <div className="user-repos-desktop-wrapper">
          <div className="user-repos-desktop-wrapper__head">
            {readmeMakeUp(repo).length > 120 ?
              <h4>{name}</h4>
              :
              <a href={url} className="user-repos-desktop-wrapper__head--name">
                <h4>{name}</h4>
              </a>
            }
            <p>{moment(createdAt, "YYYYMMDD").fromNow()}</p>
          </div>
          {children}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="user-repos-mobile-wrapper">
        <div className="user-repos-mobile-wrapper__head">
          <div className="user-repos-mobile-wrapper__head--user">
            <img src={owner.avatarUrl} alt={owner.login} />
            <h4>{name}</h4>
          </div>
          <p>{moment(createdAt, "YYYYMMDD").fromNow()}</p>
        </div>
        {children}
      </div>
    </>
  )
}