function Order(name){
    const STATUSES = {PENDING: 'PENDING', PREP: 'PREP', BAKE: 'BAKE', READY: 'READY'}
    this.orderName = name;
    this.OItems = [];

    this.addItems = function(cartItems) {
        console.log('got here');
        cartItems.forEach((item) => {
            this.OItems.push(item);
        } )
        console.log(this.OItems);
    }
    // decorating/adding functionality to an existing object
    this.status = STATUSES.PENDING;

    // methods
    this.setPending = function(){
        this.status = STATUSES.PENDING;
    }

    this.setPrep = function(){
        this.status = STATUSES.PREP;
    }

    this.setBake = function(){
        this.status = STATUSES.BAKE;
    }

    this.setReady = function(){
        this.status = STATUSES.READY;
    }



    // OrderItems.addItem = function(item){
    //     this.push(item);
    //     return this;
    // }
    // OrderItems.removeItem = function(item) {
    //     OrderItems.splice(OrderItems.indexOf(item), 1);
    //     return this;
    // }

    // OrderItems.toFirestore = function() {
    //     return {
    //         items: OrderItems,
    //         CustomerId : 1,
    //     }
    // }
    // return OrderItems;
}
Order.collectionName = 'orders'
export default Order;