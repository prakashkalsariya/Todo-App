import { jwtDecode } from "jwt-decode";
import { LocalStorageEnums } from "../enums/localstorage.enums";
import { clientRoutes } from "./routes";

export class AuthHelpers {
  static validateAccessToken = () => {
    let accessToken =
      localStorage.getItem(LocalStorageEnums?.user?.access_token) ?? "";

    if (accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);
        const expiresTime = (decodedToken?.exp || 0) * 1000;
        return expiresTime > new Date().getTime();
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  };

  static logOut = () => {
    localStorage.clear();
    window?.location?.replace(clientRoutes?.login);
    return;
  };
}
