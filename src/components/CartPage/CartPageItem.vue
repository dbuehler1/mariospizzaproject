<template>
  <div class="row pb-4 border-top border-dark cartListItem">
    <div class="col-md-3">
      {{this.item.name}}
    </div>
    <div class="col-md-3 cartListItemDesc">
      {{this.item.description}}
    </div>
    <div class="col-md-3 ">
      {{this.item.selectedOption}}
    </div>
    <div class="col-md-2 ">
      ${{this.item.price}}
    </div>
    <div class="col-md-1"><br><button class="btn btn-danger" @click="$emit('removeItem', item)"><i class="fas fa-trash-alt"></i></button></div><br>
  </div>

</template>

<script>
export default {
  name: "OrderPageItem",
  props : {
    item: Object,
  }
}
</script>

<style scoped>
  .cartListItemDesc {
    height: 4rem;
    overflow: auto;
  }
</style>