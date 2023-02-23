import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { URLS } from "../../constants";
import { AppContext } from "../../contexts/AppContext";

interface ProtectedRouteProps {
  element: React.ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element: Component,
}) => {
  const { userLogin } = useContext(AppContext);
  console.log("check user login", userLogin);
  return userLogin ? <Component /> : <Navigate to={URLS.LOGIN} replace />;
};
