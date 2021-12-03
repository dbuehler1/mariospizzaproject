function Customer(Username, Password){
    this.customerId = Math.floor(Math.random() * 10000000) + 1;
    this.username = Username;
    this.password = Password;

    this.toFirestore = function() {
        return {
            username : this.username,
            password : this.password,
            CustomerId : this.customerId,
        }
    }
    // return OrderItems;
}
Customer.collectionName = 'customers'
export default Customer;