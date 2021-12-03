<template>
<div class="row selectableOrder">
  <div class="col-1 border border-dark"><h3>{{this.num+1}}</h3></div>
  <div class="col-9 border border-dark " @click="$emit('selectOrder', order)"><h3>{{order.customerName}} </h3></div>
  <div class="col-2 border border-dark" v-bind:class="{
  'bg-success text-light border border-dark': order.status==='READY',
  'bg-danger text-light border border-dark': order.status==='PENDING',
  'bg-warning text-dark border border-dark': order.status==='PREP',
  'bg-info text-light border border-dark': order.status==='BAKE',
   }">{{order.status}}</div>
</div>
</template>

<script>
export default {
name: "OrderList",
  props : {
    order : Object,
    num : Number,
  },
}
</script>

<style scoped>
  .selectableOrder :hover {
    cursor: pointer;
    background-color: lightgray;
  }
</style>