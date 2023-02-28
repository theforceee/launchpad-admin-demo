import { Outlet, useOutletContext } from "react-router";
import { Navigate } from "react-router-dom";
import { SessionContextTypes, URLS } from "../../constants";

export const ProtectedRoute = ({ element }: any) => {
  const session: SessionContextTypes = useOutletContext();
  return session?.data ? (
    element || <Outlet />
  ) : (
    <Navigate to={URLS.LOGIN} replace />
  );
};
