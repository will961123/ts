<template>
  <div>
      <!-- 动态模板 -->
    <component
      v-for="(item,index) in datasource"
      v-bind:key="index"
      v-bind:is="item.listType"
      v-bind:item="item"
    ></component>
  </div>
</template>

<script>
import { getAllComponents } from "./items/index.js";
console.log(``, getAllComponents());
export default {
  props: {
    datasource: {
      type: Array,
      defaule: []
    }
  },
  components: {
    ...getAllComponents()
  }
};
</script>

<style>
</style>