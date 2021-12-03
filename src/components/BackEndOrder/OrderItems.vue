<template>
<div class="row pb-4 border border-dark cartListItem">
  <div class="col-md-4">
    {{item.name}}
  </div>
  <div class="col-md-4">
    {{item.description}}
  </div>
  <div class="col-md-4">
    {{item.selectedOption}}
  </div>
</div>
</template>

<script>
export default {
name: "OrderItems",
  props: {
    item : Object,
  }
}
</script>

<style scoped>

</style>