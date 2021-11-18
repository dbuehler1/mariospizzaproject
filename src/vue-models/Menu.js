// import {MenuItems} from "@/vue-models/MenuItems"
function Menu(){
    let menu = [];

    menu.addItem = function(item){
        this.push(item);
        return this;
    }
    return menu;
}
export default Menu;