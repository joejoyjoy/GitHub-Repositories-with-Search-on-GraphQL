import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DashboardRoute } from "./dashboard.router.tsx";
import { LoginRoute } from "./login.router.tsx";
import LoginPage from '../views/pages/loginPage';
import DashboardPage from '../views/pages/dashboardPage';
// import ErrorPage from "../views/pages/errorPage";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginRoute />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path='/dashboard' element={<DashboardRoute />}>
          <Route index element={<DashboardPage />} />
        </Route>
        <Route path='/*' element={<h2>ERROR 404</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes