import { ReqResAPI, apiconfig } from "../api";
class AuthService {
  static login(user) {
    return ReqResAPI.post(apiconfig.reqresApi.auth.login, user);
  }
}

export default AuthService;