function Customer(){
    this.CustomerId = Math.floor(Math.random() * 10000000) + 1;
    this.Email = '';
    this.Password = '';

    // if(firebaseUser) {
    //     this.CustomerId = firebaseUser.username
    // }
    // return OrderItems;
}

export default Customer;