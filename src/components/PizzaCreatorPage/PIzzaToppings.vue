<template>
  <div class="toppings col-md-3">
    <div class="pl-5 " @click="$emit('addATopping', topping)">
      {{this.topping}}
    </div>
  </div>

</template>

<script>
export default {
name: "PizzaToppings",
  props : {
    topping: String,
  }
}
</script>

<style scoped>
.toppings {
  background-color: white;
  border-radius: 5rem;
}
.toppings :hover{
  background-color: darkgoldenrod;
  color: white;
  cursor: pointer;
}
</style>