<template>
  <!--Lists out a pizza size-->
  <div class="pizzaSize col-md-2">
    <div class="border border-dark rounded-circle d-inline-block" @click="$emit('sizeSelect', pizzaSize)" style="height: 10rem; width: 10rem; text-align: center; padding-top: 20%">
      {{ this.pizzaSize }}
    </div>
  </div>
</template>

<script>
export default {
name: "PizzaSize",
  props : {
    pizzaSize : String,
    currentSize : String,
  },
  methods : {

  }
}
</script>

<style scoped>
.pizzaSize{
  font-size: 24pt;
}
.pizzaSize :hover {
  background-color: orangered;
  cursor: pointer;
}
</style>