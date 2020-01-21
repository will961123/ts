<template>
  <div>
    [无图]
    {{item.title}}
    
    <div v-on:click='close'>x</div>
  </div>
</template>

<script lang='ts'>
import {Component,Vue,Prop} from "vue-property-decorator"; 
import {ItemFy} from "../../utils/decorator.ts";
 
@Component
@ItemFy
export default class extends Vue{
  @Prop({
     type: Object,  
     default: {}  
  })
  item
 
}

 
</script>

<style>
</style>