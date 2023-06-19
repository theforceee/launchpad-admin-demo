import { Outlet, useOutletContext } from "react-router";
import { Navigate } from "react-router-dom";
import { SessionContextTypes, URLS } from "../../constants";

export const PublicRoute = ({ element }: any) => {
  const session: SessionContextTypes = useOutletContext();
  return session?.data ? <Navigate to={URLS.HOME} replace /> : element || <Outlet />;
};
