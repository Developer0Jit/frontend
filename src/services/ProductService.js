import { LocalServerAPI, apiconfig } from "../api"
class ProductService {
    static createProduct(product){
        return LocalServerAPI.post(apiconfig.productsServerApi.products.create,product);
    }
    static updateProduct(id,product){
        return LocalServerAPI.put(apiconfig.productsServerApi.products.update + id,product);
    }
    static deleteProduct(id,product){
        return LocalServerAPI.delete(apiconfig.productsServerApi.products.delete + id);
    }
    static getOneProduct(product,id){
        return LocalServerAPI.get(apiconfig.productsServerApi.products.fetchOne + id);
    }
    static fetchAllProduct(){
        return LocalServerAPI.get(apiconfig.productsServerApi.products.fetchAll);
    }
}

export default ProductService;