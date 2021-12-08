function Order(name, id){
    const STATUSES = {PENDING: 'PENDING', PREP: 'PREP', BAKE: 'BAKE', READY: 'READY'}
    this.customerId = id;
    this.orderName = name;
    this.OItems = [];

    this.addItems = function(cartItems) {
        console.log('got here');
        cartItems.forEach((item) => {
            this.OItems.push(item);
        } )
        console.log(this.OItems);
    }
    this.status = STATUSES.PENDING;

    this.toFirestore = function() {
        return {
            status : this.status,
            customerName: this.orderName,
            items: this.OItems.map(item => item.toFirestore()),
            CustomerId : this.customerId,
        }
    }
}
Order.collectionName = 'orders'
export default Order;