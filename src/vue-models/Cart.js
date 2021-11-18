
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
    return cart;
}
export default Cart;