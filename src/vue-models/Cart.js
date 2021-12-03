
function Cart(){
    let cart = [];

    cart.addItem = function(item){
        this.push(item);
        return this;
    }
    cart.removeItem = function(item) {
        cart.splice(cart.indexOf(item), 1);
        return this;
    }
    cart.setSelectedOption = function(item, option) {
        cart[cart.indexOf(item)].selectedOption = option;
    }

    // cart.toFirestore = function() {
    //     return {
    //         items: cart,
    //         CustomerId : 1,
    //     }
    // }
    return cart;
}
Cart.collectionName = 'orderItems'
export default Cart;