import { useState } from 'react';

const LoginComponents = () => {
  const { VITE_CLIENT_ID } = import.meta.env;

  const loginWithGithub = () => {
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${VITE_CLIENT_ID}`);
  };

  return (
    <div>
      LoginComponents Page
      <h3>Not logged In yet</h3>
      <button onClick={loginWithGithub}>Login with GitHub</button>
    </div>
  );
};

export default LoginComponents;