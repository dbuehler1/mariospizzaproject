<template>
<div>
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
    <div class="contactContent col-2 border border-dark p-3">
      <div class="iconHolder border border-dark bg-warning"><i class="icon fas fa-phone fa-9x"></i></div>
      <div class="iconHolder border border-dark bg-warning"><i class="icon fas fa-envelope-square fa-10x"></i></div>
      <div class="iconHolder border border-dark bg-warning"><i class="icon fab fa-facebook-square fa-10x"></i></div>
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
align-content: center;
  height: 15rem; width: 15rem;
}

.iconHolder :hover {
  background-color: lightgray;
  color: white;
  cursor: pointer;
}
.icon {
align-content: center;
  padding: 3rem;
}
</style>