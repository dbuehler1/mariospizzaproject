<template>
  <div :class="this.identity">
    <label><input type="radio" :name="this.identity" > {{this.option}}</label>
  </div>
</template>

<script>
export default {
name: "optionsRadios",
  props : {
    option : String,
    identity : String,
  }
}
</script>

<style scoped>

</style>