import { LocalServerAPI, apiconfig } from "../api"
class UserService{
    static createUser(user){
            return LocalServerAPI.post(apiconfig.localServerApi.users.create,user);
    }
    static updateUser(id,user){
        return LocalServerAPI.put(apiconfig.localServerApi.users.update + id,user);
    }
    static deleteUser(id,user){
        return LocalServerAPI.delete(apiconfig.localServerApi.users.delete + id);
    }
    static getOneUser(user,id){
        return LocalServerAPI.get(apiconfig.localServerApi.users.fetchOne + id);
    }
    static fetchAllUser(){
        return LocalServerAPI.get(apiconfig.localServerApi.users.fetchAll);
    }

}
export default UserService;