const { storage } = require("../data/storage")
//  List all products currently in the db.json file
//  Fetch a single product by its id
//  Create a purchase order
class Store {
    static async listProducts() {
        // list all products currently in the db.json file
        const products = storage.get("products").orderBy("id","asc")
        return products
    }
    static async fetchProduct(productId) {
        // fetch a single product by its id
        const product = storage
            .get("products")
            .find({ id : productId})
            .value()
        return product
    }
    static async createPurchase(shoppingCart, user) {
        // const createdAt = new Date().toISOString()
        
        
        

    }
}
module.exports = Store;