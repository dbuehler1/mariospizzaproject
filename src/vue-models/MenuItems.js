function MenuItems(name, options, description, price, category){
    this.name = name;
    this.options = options;
    this.description = description;
    this.price = price;
    this.selectedOption='';
    this.category= category;

    this.toFirestore = function() {
        return {
            name : this.name,
            selectedOption : this.selectedOption,
            description : this.description,
        }
    }
    //return this;
}

export {MenuItems}