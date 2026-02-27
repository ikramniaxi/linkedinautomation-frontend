import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuth) return <Navigate to="/signin" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;