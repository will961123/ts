<template>
  <div>
    <div>
      [一图]
      {{item.title}}
    </div>
    <img v-for="(img,index) in item.imgList" v-bind:src="img" v-bind:key="index" alt />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style>
</style>