import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRole }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    <>
      {auth?.user ? (
        auth?.roles === allowedRole ? (
          <Outlet />
        ) : (
          <Navigate to="/unauthorized" state={{ from: location }} replace />
        )
      ) : allowedRole === 2436 || allowedRole === 9871 ? (
        <Navigate to="/sys/login" state={{ from: location }} replace />
      ) : allowedRole === 2347 ? (
        <Navigate to="/sellers/login" state={{ from: location }} replace />
      ) : (
        <Navigate to="/buyers/login" state={{ from: location }} replace />
      )}
    </>
  );

  // return auth?.user ? (
  //   <Outlet />
  // ) : ( if(allowedRole === 5150){}
  //   <Navigate to="/buyers/login" state={{ from: location }} replace />
  // );
};

export default RequireAuth;
