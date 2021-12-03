function MenuItems(name, options, description, price){
    this.name = name;
    this.options = options;
    this.description = description;
    this.price = price;
    this.selectedOption='';

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