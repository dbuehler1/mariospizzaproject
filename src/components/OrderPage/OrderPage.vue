<template>
  <div>
    <h2 class="pl-5" v-if="authUser === null">Oops! Nothing to See Here!</h2>
    <div>
      <div class="row Statuses" v-if="this.currentOrder != null">
      <div class="col-md-3" v-bind:class="{'bg-success text-light': this.currentOrder.status==='PENDING'}">Pending</div>
      <div class="col-md-3" v-bind:class="{'bg-success text-light': this.currentOrder.status==='PREP'}">Prep</div>
      <div class="col-md-3" v-bind:class="{'bg-success text-light': this.currentOrder.status==='BAKE'}">Bake</div>
      <div class="col-md-3" v-bind:class="{'bg-success text-light': this.currentOrder.status==='READY'}">Ready</div>
    </div>

</div>
  </div>
</template>

<script>
export default {
name: "OrderPage",
  props : {
    currentOrder : Object,
    authUser : {required: true}
  },
  data(){
    return{
      // currentStatus : 'PREP',
    }
  }
}
</script>

<style scoped>
.Statuses {
  text-align: center;
  font-size: 20pt;
  font-weight: bold;
  background-color: #ffc107;
}
</style>