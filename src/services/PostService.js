import { TypiCodeAPI, apiconfig } from "../api"
class PostService{
    static createPost(post){
            return TypiCodeAPI.post(apiconfig.typicodeApi.post.create,post);
    }
    static updatePost(id,post){
        return TypiCodeAPI.put(apiconfig.typicodeApi.post.update+id,post);
    }
    static deletePost(id,post){
        return TypiCodeAPI.delete(apiconfig.typicodeApi.post.delete+id);
    }
    static getOnePost(post){
        return TypiCodeAPI.post(apiconfig.typicodeApi.post.fetchOne+id);
    }
    static getAllPost(post){
        return TypiCodeAPI.post(apiconfig.typicodeApi.post.fetchAll);
    }

}
export default PostService;