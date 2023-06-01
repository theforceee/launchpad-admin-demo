import { useContext, useEffect, useState } from "react";
import {
  createRoutesFromElements,
  Outlet,
  RouterProvider,
  useOutletContext,
} from "react-router";
import { createBrowserRouter, Navigate, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";
import { PublicRoute } from "./components/routes/PublicRoute";
import { KEY_CACHE, URLS } from "./constants";
import { AppContext } from "./contexts/AppContext";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PoolCreatePage from "./pages/PoolCreatePage";
import PoolDetailPage from "./pages/PoolDetailPage";
import PoolsPage from "./pages/PoolsPage";
import ContentsPage from "./pages/ContentsPage";
import UsersPage from "./pages/UsersPage";

const SessionProvider = () => {
  const cache = localStorage.getItem(KEY_CACHE);
  const [data, setData] = useState<any>(cache);
  const { setUserLogin } = useContext(AppContext);

  useEffect(() => {
    const newCache = localStorage.getItem(KEY_CACHE);
    setData(newCache);
  }, []);

  const logout = async () => {
    setData(null);
    setUserLogin && setUserLogin(null);
    localStorage.removeItem(KEY_CACHE);
    // localStorage.clear();
  };

  return <Outlet context={{ data, login: setData, logout }} />;
};
export const MainLayout = () => {
  const session = useOutletContext();
  return <Outlet context={session} />;
};

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<SessionProvider />} errorElement={<ErrorPage />}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to={URLS.HOME} />} />
        <Route
          path={URLS.LOGIN}
          element={<PublicRoute element={<LoginPage />} />}
        />
        <Route
          path={URLS.HOME}
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path={URLS.CONTENTS}
          element={<ProtectedRoute element={<ContentsPage />} />}
        />
        <Route
          path={URLS.USER}
          element={<ProtectedRoute element={<UsersPage />} />}
        />
        <Route path={URLS.POOLS} element={<ProtectedRoute />}>
          <Route index element={<PoolsPage />} />
          <Route path=":uuid" element={<PoolDetailPage />} />
        </Route>
        <Route
          path={URLS.CREATE_POOL}
          element={<ProtectedRoute element={<PoolCreatePage />} />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ]),
);

const routing = function () {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default routing;
