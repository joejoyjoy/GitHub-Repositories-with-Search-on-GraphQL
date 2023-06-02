export async function getUserDetails(accessToken: string) {
  try {
    const response = await fetch(`https://api.github.com/graphql`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        "query": `{
          viewer {
            id
            login
            avatarUrl
            name
            url
            followers {
              totalCount
            }
            following(first: 7) {
              totalCount
              nodes {
                avatarUrl
                id
                name
                login
                url
              }
            }
            issues {
              totalCount
            }
          }
        }`
      })
    });

    const graphQLData = await response.json();
    return graphQLData.data.viewer;

  } catch (err) {
    console.error(err);
  }
}

export async function getUserGithubRepos(accessToken: string, login: string) {
  try {
    const response = await fetch(`https://api.github.com/graphql`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        "query": `{
          viewer {
            login
            repositories(privacy: PUBLIC) {
              totalCount
            }
          }
        }`
      })
    });

    const graphQLData = await response.json();
    const totalCount = graphQLData.data.viewer.repositories.totalCount;

    if (totalCount === 0) {
      return [];
    }

    const responseAll = await fetch(`https://api.github.com/graphql`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        "query": `{
          user(login: "${login}") {
            repositories(first: ${totalCount}, orderBy: {field: CREATED_AT, direction: DESC}) {
              totalCount
              nodes {
                name
                url
                id
                owner {
                  id
                  avatarUrl
                  login
                }
                languages(first: 4) {
                  totalCount
                  nodes {
                    color
                    name
                  }
                }
              }
            }
          }
        }`
      })
    });

    const allGraphQLData = await responseAll.json();
    return allGraphQLData.data.user.repositories.nodes;

  } catch (err) {
    console.error(err);
  }
}