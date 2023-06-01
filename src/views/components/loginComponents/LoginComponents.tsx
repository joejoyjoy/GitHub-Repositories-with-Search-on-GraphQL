import { useState } from 'react';

const LoginComponents = () => {
  const [rerender, setRerender] = useState(false);
  const { VITE_CLIENT_ID } = import.meta.env;

  const loginWithGithub = () => {
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${VITE_CLIENT_ID}`);
  };

  return (
    <div>
      LoginComponents Page
      {localStorage.getItem("accessToken") ?
        <>
          <h3>You are logged in</h3>
          <button onClick={() => { localStorage.removeItem("accessToken"); setRerender(!rerender) }}>
            Log out
          </button>
          <h3>User Data</h3>
        </>
        :
        <>
          <h3>Not logged In yet</h3>
          <button onClick={loginWithGithub}>Login with GitHub</button>
        </>
      }
    </div>
  );
};

export default LoginComponents;