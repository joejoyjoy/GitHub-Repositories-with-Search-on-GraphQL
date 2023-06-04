import { useContext } from "react";
import ReactMarkdown from 'react-markdown';
import moment from "moment";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { UserReposDataContext } from "../../../context/UserReposDataContext";
import { UserDetailsContext } from "../../../context/UserDetailsContext";
import { SearchUserReposContext } from "../../../context/SearchUserReposContext";
import useWindowSizeReport from "../../../hooks/useWindowSizeReport";
import { mobileBreak } from "../../../utils/componentsConstants";
import nFormatter from "../../../utils/nFormatter";
import './dashboardRepos.scss'

export default function DashboardRepos() {
  const { userRepos } = useContext(UserReposDataContext)
  const { userDetails } = useContext(UserDetailsContext)
  const { keyword } = useContext(SearchUserReposContext)
  const [listRef] = useAutoAnimate();

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

  if ((userRepos.length) === 0) {
    console.log("NO INFO");
  }

  console.log(userDetails);
  console.log(userRepos);

  console.log(nFormatter(4472543));

  return (
    <section className="user-repos-component" ref={listRef} >
      {userRepos &&
        searchReposResult?.map((repo: any) => {
          const { id, name, owner, url, createdAt } = repo

          return (
            <article key={id} className="user-repos-component__article">
              <UserRepo owner={owner} name={name} createdAt={createdAt} >
                <div className="user-repos-component-body">
                  <ReactMarkdown children={repoReadme(repo)} disallowedElements={["img", "code"]} />
                  {repoReadme(repo).length > 120 &&
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

const UserRepo = ({ owner, name, createdAt, children }: any) => {
  const [screenWidth] = useWindowSizeReport();

  if (screenWidth > mobileBreak) {
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