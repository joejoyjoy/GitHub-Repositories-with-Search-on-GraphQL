import { Suspense } from 'react';
import useWindowSizeReport from '../../../hooks/useWindowSizeReport';
import { responsiveBreak } from '../../../utils/componentsConstants';
import LoginMComponents from '../../components/mobile/loginMComponents';
import LoginDComponents from '../../components/desktop/loginDComponents'
import './loginPage.scss'

const LoginPage = () => {
  const [screenWidth] = useWindowSizeReport();

  return (
    <main className="login-page">
      <Suspense fallback={<></>}>
        {(screenWidth > responsiveBreak) ? (
          <LoginDComponents />
        ) : (
          <LoginMComponents />
        )}
      </Suspense>
    </main>
  )
}

export default LoginPage