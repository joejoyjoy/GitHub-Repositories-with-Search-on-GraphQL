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
            following(first: 11) {
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
            repositories(privacy: PUBLIC) {
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

export async function getUserGithubRepos(accessToken: string, login: string, field: string, direction: string) {
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
            repositories(first: ${totalCount}, orderBy: {field: ${field}, direction: ${direction}}) {
              totalCount
              nodes {
                id
                name
                url
                createdAt
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
                upCase: object(expression: "master:README.md") {
                  ... on Blob {
                    text
                  }
                }
                object(expression: "main:README.md") {
                  ... on Blob {
                    text
                  }
                }
                otherFile: object(expression: "master:readme.md") {
                  ... on Blob {
                    text
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