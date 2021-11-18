<template>
<div>
  <div class="homePage border border-dark row">
    <div class="col-md-6">
      <h3>About Us</h3><br>
      Sample Text Sample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample Text
    </div>
    <div class="col-md-6">
      <h3>Specialties</h3>
      <div class="specialties row">

        <div class="col-md-6">
          <specialty-item></specialty-item><br>
          <specialty-item></specialty-item>
        </div>
        <div class="col-md-6">
          <specialty-item></specialty-item><br>
          <specialty-item></specialty-item>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import SpecialtyItem from "@/components/SpecialtyItem";
export default {
name: "Home",
  components: {SpecialtyItem}
}
</script>

<style scoped>
.specialties {
  /*padding: 1rem;*/
  /*border-width: thin 10px;*/
  /*border-color: black;*/
}
.homePage {
  /*padding: 1rem;*/
}
div {

}
</style>