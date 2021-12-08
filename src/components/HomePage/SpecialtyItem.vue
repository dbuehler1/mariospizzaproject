<template>
  <div>
    <div class="card">
      <div class="card-header">{{ name }}</div>
      <div class="card-body">
        {{ desc }}
      </div>
    </div>
  </div>

</template>

<script>
export default {
name: "SpecialtyItem",
  props : {
    name : String,
    desc : String
  }
}
</script>

<style scoped>
.card {
 border-width: medium;
}
</style>