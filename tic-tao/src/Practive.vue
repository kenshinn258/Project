<template>
 <div>
   <h1>APP</h1>
   <h2>{{count}}</h2>
   <br/>
   <RunningNumber :number="count"/>
   <button @click="count+=100">+</button>
   <button @click="count-=100">-</button>
 </div>
  
</template>

<script>
import RunningNumber from './RunningNumber.vue'

export default {
  components :{
    RunningNumber,
  },
  data(){
    return {
      count : 0,
    };
  },
}
</script>

<style>

</style>
