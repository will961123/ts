<template>
  <div>
    头条
    <List v-bind:datasource="listData" />
  </div>
</template>

<script lang='ts' >
import { getList } from "./api";
import List from "./components/list.vue";

import {Component,Vue} from "vue-property-decorator";
import {Scroll} from "./utils/decorator.ts";

import {VueConstructor} from "Vue";

// 装饰这个类
// @Component
@Component({
  components:{
    List
  }
})
// 也可以放在 类内部的 数据|方法上面
// 定义为VueConstructor类型  这个装饰器接受任意类型的数据
@Scroll<VueConstructor>()
export default class App extends Vue{
  // 数据模型
  listData = [];
  // 生命周期
  created() {
    getList().then(res => { 
      this.listData = res;
    });
    // this.Scroll()
  };
  // 个人方法 在 utils 抽离为装饰器
  // Scroll() {
  //   window.addEventListener('scroll',()=>{
  //     const ComputedHeight = () => {
  //       return document.body.clientHeight - window.scrollY - window.screen.availHeight
  //     }
  //     if(ComputedHeight() < 100){
  //       console.log('加载')
  //     }
  //   })
  // };

  // 自己封装触底函数
  onReachBottom() {
    console.log("--触底--")
  }
} 

// export default {
//   components: {
//     List
//   },
//   data() {
//     return {
//       listData: []
//     };
//   },
//   created() {
//     getList().then(res => { 
//       this.listData = res;
//     });
//     this.Scroll()
//   },
//   methods:{
//        Scroll(){
//           window.addEventListener('scroll',()=>{
//             const ComputedHeight = () => {
//               return document.body.clientHeight - window.scrollY - window.screen.availHeight
//             }
//             if(ComputedHeight() < 100){
//               console.log('加载')
//             }
//           })
//        }
//     }
// };
</script>

<style>
</style>