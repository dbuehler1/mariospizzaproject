<template>
  <div class="row border border-dark cartListItem">
    <div class="col-md-3 border border-dark">
      {{this.item.name}}
    </div>
    <div class="col-md-3 border border-dark cartListItemDesc">
      {{this.item.description}}
    </div>
    <div class="col-md-3 border border-dark">
      {{this.item.selectedOption}}
    </div>
    <div class="col-md-2 border border-dark">
      ${{this.item.price}}
    </div>
    <div class="col-md-1"><br><button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button></div><br>
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