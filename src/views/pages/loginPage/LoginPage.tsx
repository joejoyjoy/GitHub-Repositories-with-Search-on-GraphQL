import { useContext, Suspense } from 'react';
import useWindowSizeReport from '../../../hooks/useWindowSizeReport';
import { UserAccessTokenContext } from '../../../context/UserAccessTokenContext';
import { responsiveBreak } from '../../../utils/componentsConstants';
import LoginMComponents from '../../components/mobile/loginMComponents';
import LoginDComponents from '../../components/desktop/loginDComponents';
import LoginLoader from '../../components/loginLoader/LoginLoader';
import './loginPage.scss';

const LoginPage = () => {
  const { isLoading } = useContext(UserAccessTokenContext)
  const [screenWidth] = useWindowSizeReport();

  return (
    <main className="login-page">
      <Suspense fallback={<></>}>
        {(screenWidth > responsiveBreak) ? (
          <>
            <LoginDComponents />
            {isLoading && <LoginLoader />}
          </>
        ) : (
          <>
            <LoginMComponents />
            {isLoading && <LoginLoader />}
          </>
        )}
      </Suspense>
    </main>
  )
}

export default LoginPage