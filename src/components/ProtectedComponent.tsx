import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { AuthHelpers } from "../utils/auth.helpers";
import { clientRoutes } from "../utils/routes";
import { LocalStorageEnums } from "../enums/localstorage.enums";

const ProtectedComponent = ({ children }: { children: any }) => {
  let isLoggedIn = true;
  // const expert_id = useReadLocalStorage('mylo_expert_id')
  // let isLoggedIn = AuthHelpers?.validateAccessToken();
  const navigate = useNavigate();
  let params = useParams();
  // const eventId = params?.event_id;
  // let pathnameArray = location?.pathname?.split("/");
  //   let loginCheck = pathnameArray[3];
  // const expertGetApiHandler = async () => {
  //   const res = await ProfileApi.GetExpertById(expert_id)
  //   if (res?.data?.data?.verified) {
  //     setVerified(true)
  //   }
  // }

  // React.useEffect(() => {
  //   if (accessToken) {
  //     var decoded: Token = jwtDecode(accessToken);
  //     if (!decoded?.verified) {
  //       navigate("/login", { state: { redirect: location?.pathname } });
  //     }
  //   } else {
  //     navigate("/login", { state: { redirect: location?.pathname } });
  //   }
  // }, []);

  useEffect(() => {
    let jsonData: string | null = localStorage.getItem(
      LocalStorageEnums?.user?.login_data,
    );
    let loginData: any = jsonData && JSON.parse(jsonData);
    isLoggedIn = loginData?.isLogin;
    if (!isLoggedIn) navigate(clientRoutes.login);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

  if (!isLoggedIn) {
    return null;
  }

  return <div>{isLoggedIn ? children : null}</div>;
};

export default ProtectedComponent;
