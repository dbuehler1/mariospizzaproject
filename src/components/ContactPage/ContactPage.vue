<template>
<div>
  <!--This page serve no purpose currently other than to act as a placeholder for any social media outlets that are used-->
  <h3 class="pl-3">Contact Us:</h3>

  <div class="contactContent row border border-dark">
    <div class="col-10">
      <div class="pl-3">
        <h4>Catering</h4>
        <p>Lots of Catering Options Available.</p><br>
        <p>Call & Ask Us!</p><br>
        <p>262.363.3600</p>
      </div>
    </div>
    <!--Clickable dives, however, no current functionality-->
    <div class="contactContent col-2 border border-dark ">
      <div class="iconHolder border border-dark bg-warning p-3"><i class="icon fas fa-phone fa-9x"></i></div>
      <div class="iconHolder border border-dark bg-warning p-3"><i class="icon fas fa-envelope-square fa-10x"></i></div>
      <div class="iconHolder border border-dark bg-warning p-3"><i class="icon fab fa-facebook-square fa-10x"></i></div>
    </div>

  </div>
</div>
</template>

<script>
export default {
name: "ContactPage"
}
</script>

<style scoped>
.contactContent {
  height: 50rem;
}
.iconHolder {
  margin: auto;

  height: 15rem; width: 15rem;
  display: flex;
  align-content: space-between;
  justify-content: center;
}

.iconHolder:hover {
  border-color: lightgray;
  background-color: lightgray !important;
  cursor: pointer;


}
.icon {
  padding-top: 1rem;
}
</style>