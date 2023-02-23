import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./components/base/ProtectedRoute";
import { URLS } from "./constants";
import Dashboard from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PoolDetailPage from "./pages/PoolDetailPage";
import StakingPoolsPage from "./pages/StakingPoolsPage";
import TBAPoolsPage from "./pages/TBAPoolsPage";
import UsersPage from "./pages/UsersPage";

const routing = function createRouting() {
  return (
    <>
      <Routes>
        <Route path={URLS.LOGIN} element={<LoginPage />} />
        <Route
          path={URLS.HOME}
          element={<ProtectedRoute element={Dashboard} />}
        />
        <Route path="/" element={<Navigate to={URLS.HOME} />} />
        <Route
          path={URLS.POOLS}
          element={<ProtectedRoute element={PoolDetailPage} />}
        />
        <Route
          path={URLS.STAKING_POOLS}
          element={<ProtectedRoute element={StakingPoolsPage} />}
        />
        <Route
          path={URLS.TBA_POOLS}
          element={<ProtectedRoute element={TBAPoolsPage} />}
        />
        <Route
          path={URLS.USERS}
          element={<ProtectedRoute element={UsersPage} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
/**
 * Wrap the app routes into router
 *
 * PROPS
 * =============================================================================
 * @returns {React.Node}
 */
export default routing;
