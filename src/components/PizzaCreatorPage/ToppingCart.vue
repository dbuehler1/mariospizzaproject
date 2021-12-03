<template>
<div class="p-3 border border-dark">
  <button class="btn btn-danger" @click="$emit('removeTopping', topping)"><i class="fas fa-trash-alt"></i></button>
    {{this.topping}}
</div>
</template>

<script>
export default {
name: "ToppingCart",
  props : {
    topping : String,
  }
}
</script>

<style scoped>

</style>