import BackgroundImage from '../../../../assets/webp/background-login.webp'
import './loginDComponents.scss'

const LoginDComponents = () => {
  const { VITE_CLIENT_ID } = import.meta.env;

  const loginWithGithub = () => {
    /** Sending user to GitHub OAuth for Authentication */
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${VITE_CLIENT_ID}`);
  };

  return (
    <div className="login-desktop-component">
      <section className="login-desktop-component__container">
        <div className="login-desktop-component__container--description">
          <h1>GitHub Ultimate</h1>
          <p>Get the most out of you GitHub account! <br />We provide you with the best tools to get into your code faster</p>
        </div>
        <div className="login-desktop-component__container--buttons" data-test="login-form">
          <button onClick={loginWithGithub} data-test="login-button" className="login-desktop-component__container--buttons__login">Login with GitHub</button>
          <a href='https://github.com/join' data-test="sign-button" className="login-desktop-component__container--buttons__sign-up">Sign Up to GitHub</a>
        </div>
      </section>
      <section className="login-desktop-component__wrapper">
        <div className="login-desktop-component__wrapper--position">
          <img src={BackgroundImage} className="login-desktop-component__wrapper--position__image" />
        </div>
      </section>
    </div>
  );
};

export default LoginDComponents;