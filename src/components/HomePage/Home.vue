<template>
<div>
  <div class="homePage border border-dark row">
    <div class="col-md-6 pl-5">
      <h3>About Us</h3><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor massa, ultrices eu gravida nec, imperdiet ut est. Morbi ultricies nisl non fermentum gravida. Curabitur varius sem vitae varius faucibus. In hac habitasse platea dictumst. Vivamus ut turpis semper ante facilisis malesuada a vitae lacus. Nulla sed dapibus lectus, ut egestas nisi. In condimentum est quis rutrum rutrum. Sed porttitor est vel est fermentum pulvinar vel eu nisi. Etiam placerat neque lobortis urna pellentesque viverra at vel tortor. Cras sollicitudin mauris ut nisi posuere vehicula. Pellentesque fringilla lectus lacus, et bibendum sapien venenatis at. Proin iaculis dolor eget egestas varius.
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
import SpecialtyItem from "@/components/HomePage/SpecialtyItem";
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