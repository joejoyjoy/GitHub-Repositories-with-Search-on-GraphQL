import BackgroundImage from '../../../../assets/webp/background-login.webp'
import './loginMComponents.scss'
import { Button } from '../../../../stories/buttons/Button';

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
        <Button onClick={loginWithGithub} primary={true} data-test="login-button" label={"Login with GitHub"} />
        <Button href='https://github.com/join' data-test="sign-button" label={"Sign Up to GitHub"} />
      </section>
    </div>
  );
};

export default LoginMComponents;