<template>
  <div>
    [无图]
    {{item.title}}
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