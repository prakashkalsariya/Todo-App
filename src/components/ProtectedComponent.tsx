import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clientRoutes } from "../utils/routes";
import { AuthHelpers } from "../utils/auth.helpers";

const ProtectedComponent = ({ children }: { children: any }) => {
  let isLoggedIn = false;
  isLoggedIn = AuthHelpers?.validateAccessToken();
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    if (!isLoggedIn) navigate(clientRoutes.login);
    window.scrollTo(0, 0);
  }, [params]);

  return <div>{isLoggedIn ? children : null}</div>;
};

export default ProtectedComponent;
