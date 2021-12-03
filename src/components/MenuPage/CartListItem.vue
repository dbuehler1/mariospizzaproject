<template>
<div class="row">
  <div class="col-md-5">{{this.item.name}}</div>

  <div class="col-md-5">${{this.item.price}}</div>
  <div class="col-md-2">
    <button class="btn btn-danger" @click="$emit('passToCart', item), $emit('deletedItemPrice')"><i class="fas fa-trash-alt"></i></button>
  </div>
</div>
</template>

<script>
export default {
name: "CartListItem",
  props : {
      item : Object,
  }
}
</script>

<style scoped>

</style>