<template>
<div>
  <div class="card border border-dark">
    <div class="card-header "><span>{{this.item.name}}</span></div>
    <div class="card-body">
      <span v-if="this.item.description !== 'N/A'">{{this.item.description}}</span><br>
      <span v-if="this.item.options !== 'N/A'">{{this.item.options}}</span><br>
<!--      <div class="input-group">-->
<!--        <div class="input-group-prepend">-->
<!--          <span>Qty</span>-->
<!--        </div>-->
<!--        <input type="text" class="form-control" v-model="this.qty" placeholder="Qty">-->
<!--      </div>-->

      <span>Price: ${{this.item.price}}</span><br>
    </div>

    <button class="btn btn-success" @click="$emit('passToMenu', item), $emit('updateTotal')"

    >Add to Cart</button>
  </div>

</div>
</template>



<script>
// import {OrderItem} from '@/vue-models/OrderItem';
// import {OrderItem} from "@/vue-models/OrderItem";

export default {

name: "MenuItem",
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

</style>