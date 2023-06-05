import { useContext } from "react";
import ReactMarkdown from 'react-markdown';
import moment from "moment";
// import { useAutoAnimate } from '@formkit/auto-animate/react'
import { UserReposDataContext } from "../../../context/UserReposDataContext";
import { UserDetailsContext } from "../../../context/UserDetailsContext";
import { SearchUserReposContext } from "../../../context/SearchUserReposContext";
import useWindowSizeReport from "../../../hooks/useWindowSizeReport";
import { mobileBreak } from "../../../utils/componentsConstants";
import Loader from "../../../UI";
import Empty from '../../../assets/png/empty-error.png'
import './dashboardRepos.scss'

export default function DashboardRepos() {
  const { userRepos, isLoading } = useContext(UserReposDataContext)
  const { userDetails } = useContext(UserDetailsContext)
  const { keyword } = useContext(SearchUserReposContext)
  // const [listRef] = useAutoAnimate();

  const searchReposResult = userRepos.filter((p: any) =>
    p.name.toString().toLowerCase().includes(keyword.toLowerCase())
  );

  const repoReadme = (repo: any) => {
    if (repo.object !== null) {
      const readme = repo.object?.text.replace(/<!--[\s\S]*?-->/g, '');
      return readme.replace(/<img\b[^>]*>/g, '');
    }
    if (repo.otherFile !== null) {
      const readme = repo.otherFile?.text.replace(/<!--[\s\S]*?-->/g, '');
      return readme.replace(/<img\b[^>]*>/g, '');
    }
    if (repo.upCase !== null) {
      const readme = repo.upCase?.text.replace(/<!--[\s\S]*?-->/g, '');
      return readme.replace(/<img\b[^>]*>/g, '');
    }
    return '';
  }

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
    <section className="user-repos-component"> {/* ref={listRef} */}
      {userRepos &&
        searchReposResult?.map((repo: any) => {
          const { id, name, owner, url, createdAt } = repo

          return (
            <article key={id} className="user-repos-component__article">
              <UserRepo owner={owner} name={name} createdAt={createdAt} >
                <div className="user-repos-component-body">
                  <ReactMarkdown children={repoReadme(repo)} disallowedElements={["img", "code"]} />
                  <a
                    href={url}
                    className={
                      `user-repos-component-body--more${repoReadme(repo).length < 120 ? " less-content" : ""}`
                    }
                  >
                    Show repository
                  </a>
                </div>
              </UserRepo>
            </article>
          )
        })
      }
    </section>
  )
}

const UserRepo = ({ owner, name, createdAt, children }: any) => {
  const [screenWidth] = useWindowSizeReport();

  if (screenWidth >= mobileBreak) {
    return (
      <>
        <div className="user-repos-desktop-avatar">
          <img src={owner.avatarUrl} alt={owner.login} />
        </div>
        <div className="user-repos-desktop-wrapper">
          <div className="user-repos-desktop-wrapper__head">
            <h4>{name}</h4>
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