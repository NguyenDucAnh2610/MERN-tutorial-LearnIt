import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/esm/Spinner";
import NavbarMenu from "../Layouts/NavbarMenu";

function ProtectedRoute({ component: Component, ...rest }) {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading)
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />;
      </div>
    );
  return isAuthenticated ? (
    <>
      <NavbarMenu />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoute;
