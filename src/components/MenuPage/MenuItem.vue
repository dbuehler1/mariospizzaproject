<template>
<div>
  <div class="card border border-dark">
    <div class="card-header "><h4>{{this.item.name}}</h4></div>
    <div class="card-body">
      <div class="itemDesc" v-if="this.item.description !== 'N/A'">{{this.item.description}}</div><br><br>
<!--      <span v-if="this.item.options[0] !== 'N/A'">{{this.item.options}}</span><br>-->
      <div class="row" v-if="this.item.options[0] !== 'N/A'">

        <options-radios class="col-6" v-for="(option, o) in this.item.options"
                        :item="item"
                        :option="option"
                        :identity="item.name"
                        :key="o">
        </options-radios>
      </div>

<!--      <div class="input-group">-->
<!--        <div class="input-group-prepend">-->
<!--          <span>Qty</span>-->
<!--        </div>-->
<!--        <input type="text" class="form-control" v-model="this.qty" placeholder="Qty">-->
<!--      </div>-->

      <span>Price: ${{this.item.price}}</span><br>
    </div>

      <button class="btn btn-success" @click="$emit('passToMenu', item), $emit('updateTotal')">Add to Cart</button>


  </div>

</div>
</template>



<script>
// import {OrderItem} from '@/vue-models/OrderItem';
// import {OrderItem} from "@/vue-models/OrderItem";

import OptionsRadios from "@/components/MenuPage/optionsRadios";
export default {

name: "MenuItem",
  components: {OptionsRadios},
  props : {
    item : Object,
  },
  methods : {
      // createOrderItem(){
      //   var newOrderItem = new OrderItem(
      //       this.item.name.name,
      //       this.qty,
      //       this.item.name.options,
      //       this.item.name.description,
      //       this.item.name.price)
      //   return newOrderItem.name;
      //
      // }
  },
  data() {
    return {
        qty : 0,
    }
  }


}
</script>

<style scoped>
  .itemDesc {
    height: 8rem;
    overflow: auto;
  }
</style>