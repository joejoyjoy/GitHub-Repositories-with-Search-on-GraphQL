import { useContext } from "react";
import ReactMarkdown from 'react-markdown';
import moment from "moment";
import { UserReposDataContext } from "../../../../context/UserReposDataContext";
import { UserDetailsContext } from "../../../../context/UserDetailsContext";
import { SearchUserReposContext } from "../../../../context/SearchUserReposContext";
import nFormatter from "../../../../utils/nFormatter";
import './dashboardRepos.scss'

const DashboardRepos = () => {
  const { userRepos } = useContext(UserReposDataContext)
  const { userDetails } = useContext(UserDetailsContext)
  const { keyword } = useContext(SearchUserReposContext)

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
    <section className="user-repos-component">
      {userRepos &&
        searchReposResult?.map((repo: any) => {
          const { id, name, owner, url, createdAt } = repo

          return (
            <article key={id} className="user-repos-component__article">
              <div className="user-repos-component__article--avatar">
                <img src={owner.avatarUrl} alt={owner.login} />
              </div>
              <div className="user-repos-component__article--wrapper">
                <div className="user-repos-component__article--wrapper__head">
                  <h4>{name}</h4>
                  <p>{moment(createdAt, "YYYYMMDD").fromNow()}</p>
                </div>
                <div className="user-repos-component__article--wrapper__body">
                  <ReactMarkdown children={repoReadme(repo)} disallowedElements={["img", "code"]} />
                  {repoReadme(repo).length > 120 &&
                    <a href={url} className="user-repos-component__article--wrapper__body--more">
                      Show repository
                    </a>
                  }
                </div>
              </div>
            </article>
          )
        })
      }
    </section>
  )

  return (
    <div>
      {userRepos &&
        searchReposResult?.map((repo: any) => {
          return <a href={repo.url} key={repo.id} style={{ display: "block" }}>{repo.name}</a>
        })
      }
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt incidunt eaque dolores nisi eveniet exercitationem eligendi est quam obcaecati, optio quisquam neque eum, a non pariatur excepturi provident esse ab.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusantium illum perferendis. Quod porro incidunt quasi eligendi debitis adipisci est distinctio consequuntur magni sit eaque, cum dolores totam nihil accusantium.</div>
    </div>
  )
}

export default DashboardRepos