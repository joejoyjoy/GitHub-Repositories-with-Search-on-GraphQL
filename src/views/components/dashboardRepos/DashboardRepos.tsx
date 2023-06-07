import { useContext } from "react";
import ReactMarkdown from 'react-markdown';
import moment from "moment";
import { UserReposDataContext } from "../../../context/UserReposDataContext";
import { UserDetailsContext } from "../../../context/UserDetailsContext";
import { SearchUserReposContext } from "../../../context/SearchUserReposContext";
import useWindowSizeReport from "../../../hooks/useWindowSizeReport";
import { mobileBreak } from "../../../utils/componentsConstants";
import readmeMakeUp from "../../../utils/readmeMakeUp";
import { HyperLink } from "../../../stories/buttons/HyperLink";
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
        <p>No Repositories found - <HyperLink href={`${userDetails?.url}?tab=repositories`} primary={false} label="Add one now!" /></p>
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
                    <span className="user-repos-component-body__more">
                      <HyperLink href={url} primary={false} label="Show repository" />
                    </span>
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
              <h4><HyperLink href={url} primary={false} label={name} /></h4>
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