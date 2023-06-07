import BackgroundImage from '../../../../assets/webp/background-login.webp'
import './loginMComponents.scss'
import { ButtonComponent } from '../../buttonComponent/buttonComponent';

const LoginMComponents = () => {
  const { VITE_CLIENT_ID } = import.meta.env;

  const loginWithGithub = () => {
    /** Sending user to GitHub OAuth for Authentication */
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${VITE_CLIENT_ID}`);
  };

  return (
    <div className="login-mobile-component">
      <section className="login-mobile-component__container">
        <div className="login-mobile-component__container--background">
          <div className="login-mobile-component__container--background__position">
            <img src={BackgroundImage} className="login-mobile-component__container--background__position--image" />
          </div>
        </div>
        <div className="login-mobile-component__container--description">
          <h1>GitHub Ultimate</h1>
          <p>Get the most out of you GitHub account! We provide you with the best tools to get into your code faster</p>
        </div>
      </section>
      <section className="login-mobile-component__buttons" data-test="login-form">
        <ButtonComponent onClick={loginWithGithub} data-test="login-button" className="login-mobile-component__buttons--login">Login with GitHub</ButtonComponent>
        <a href='https://github.com/join' data-test="sign-button" className="login-mobile-component__buttons--sign-up">Sign Up to GitHub</a>
      </section>
    </div>
  );
};

export default LoginMComponents;