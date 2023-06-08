export async function getBackendStatus() {
  const { VITE_SERVER_URL } = import.meta.env;

  try {
    const response = await fetch(`${VITE_SERVER_URL}/v1/get-backend-status`);
    const data = await response.json();
    return data;

  } catch (err) {
    console.error(err);
  }
}

export async function getAccessToken(codeParam: string) {
  const { VITE_SERVER_URL } = import.meta.env;

  try {
    const response = await fetch(`${VITE_SERVER_URL}/v1/get-access-token?code=${codeParam}`);
    const data = await response.json();

    if (data.access_token) {
      return data.access_token;
    }

  } catch (err) {
    console.error(err);
  }
}

export async function getUserDetails(accessToken: string) {
  const { VITE_SERVER_URL } = import.meta.env;

  try {
    const response = await fetch(`${VITE_SERVER_URL}/v1/get-user-details`, {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    });

    const data = await response.json();

    if (data?.message) {
      return data?.message;
    }

    return data.data?.viewer;

  } catch (err) {
    console.error(err);
  }
}

export async function getUserGithubRepos(accessToken: string, login: string, totalCount: number, field: string, direction: string) {
  const { VITE_SERVER_URL } = import.meta.env;

  try {
    const response = await fetch(`${VITE_SERVER_URL}/v1/post-user-repos`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({ login, totalCount, field, direction })
    });

    const data = await response.json();
    return data.data.user.repositories.nodes;

  } catch (err) {
    console.error(err);
  }
}