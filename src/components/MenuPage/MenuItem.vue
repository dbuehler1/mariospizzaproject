<template>
<div v-if="selectedCategory === 'All' || selectedCategory === item.category">
  <div class="card border border-dark">
    <div class="card-header "><h4>{{this.item.name}}</h4></div>
    <div class="card-body">
      <div class="itemDesc" v-if="this.item.description !== 'N/A'">{{this.item.description}}</div><br><br>
<!--      <span v-if="this.item.options[0] !== 'N/A'">{{this.item.options}}</span><br>-->
      <div class="row" v-if="(this.item.options[0] !== 'N/A') && (authUser != null)">

        <options-radios class="col-6"  v-for="(option, o) in this.item.options"
                        :item="item"
                        :option="option"
                        :identity="item.name"
                        :key="o">
        </options-radios>
      </div>

<!--      <div class="input-group">-->
<!--        <div class="input-group-prepend">-->
<!--          <span>Qty</span>-->
<!--        </div>-->
<!--        <input type="text" class="form-control" v-model="this.qty" placeholder="Qty">-->
<!--      </div>-->

      <span>Price: ${{this.item.price}}</span><br>
    </div>

      <button class="btn btn-success" v-if="this.authUser != null" @click="$emit('passToMenu', item), $emit('updateTotal')">Add to Cart</button>


  </div>

</div>
</template>



<script>


import OptionsRadios from "@/components/MenuPage/optionsRadios";
export default {

name: "MenuItem",
  components: {OptionsRadios},
  props : {
    item : Object,
    authUser : {required: true},
    selectedCategory : String,
  },
  methods : {

  },
  data() {
    return {
        qty : 0,
    }
  }


}
</script>

<style scoped>
  .itemDesc {
    height: 2rem;
    overflow: auto;
  }

</style>