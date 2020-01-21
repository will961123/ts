<template>
  <div>
    <div>
      [一图]
      {{item.title}}
    </div>
    <img v-for="(img,index) in item.imgList" v-bind:src="img" v-bind:key="index" alt />
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