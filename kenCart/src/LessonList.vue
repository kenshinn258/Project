<template>
  <div class="list">
    <LessonItem v-for="lesson in lessons" :lesson="lesson"/>
        
  </div>
</template>

<script>
import LessonItem from './LessonItem.vue'
import { mapState , mapActions} from 'Vuex';
  export default {
    components : {
        LessonItem,
    },
    computed : {
      ...mapState(['lessons']),
    },
    methods :{
        ...mapActions(['fetchLessons']),
    },
    mounted(){
      this.fetchLessons();
    },
  };
</script>


<style scoped>
.list{
  padding-top: 30px;
  text-align: center;
}
</style>