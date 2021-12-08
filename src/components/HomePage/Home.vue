<template>
<div>
  <div class="homePage border border-dark row">
    <div class="col-md-6 pl-5">
      <h3>About Us</h3><br>
      THANK YOU for your patience as we are short on staff.
      We are always hiring - please apply if you are interested!
      <br><br>
      <div class="specialties row">

        <div class="col-md-6">
          <h4>Location</h4>
          Mario's Natural Roman Pizza & Pasta<br>
          225 Bayview Road<br>

          Mukwonago, WI  53149<br>

          262.363.3600<br>
        </div>
        <div class="col-md-6">
          <h4>Hours</h4>
          Monday: Closed<br>
          Tues, Wed, Thurs: 4 - 9 p.m.<br>
          Friday: 4 - 10 p.m.<br>
          Saturday: Noon - 10 p.m.<br>
          Sunday: Noon - 8 p.m.<br>
        </div>

      </div>

    </div>
    <div class="col-md-6">
      <h3>Specialties</h3>
      <div class="specialties row">

        <div class="col-md-6">
          <specialty-item :name="'Sandwiches'" :desc="'Served with a side of fries'"></specialty-item><br>
          <specialty-item :name="'Pizzas'" :desc="'5 Different Sizes'"></specialty-item>
        </div>
        <div class="col-md-6">
          <specialty-item :name="'Pasta'" :desc="'Made with the freshest ingredients'"></specialty-item><br>
          <specialty-item :name="'Friday Fish Fry'" :desc="'The Best in Town'"></specialty-item>
        </div>

      </div>

      <br>
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

</style>