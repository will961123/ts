<template>
  <div>
    头条
    <List v-bind:datasource="listData" />
  </div>
</template>

<script>
import { getList } from "./api";
import List from "./components/list.vue";
export default {
  components: {
    List
  },
  data() {
    return {
      listData: []
    };
  },
  created() {
    getList().then(res => {
        console.log(``,res);
      this.listData = res;
    });
  }
};
</script>

<style>
</style>