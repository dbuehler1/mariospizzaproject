<template>
  <div :class="this.identity">
    <label><input type="radio" :name="this.identity" @click="setOption"> {{this.option}}</label>
  </div>
</template>

<script>
export default {
name: "optionsRadios",
  props : {
    item : Object,
    option : String,
    identity : String,
  },
  methods : {
    setOption(){
      this.item.selectedOption = this.option;
    }
  }
}
</script>

<style scoped>

</style>