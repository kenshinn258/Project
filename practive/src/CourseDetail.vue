<template>
<div>
    <h1>CourseDetail</h1>
    <router-link to="/courses">Back</router-link>
    <h2>{{$route.params.id}}</h2>    
</div>
</template>

<script>
import courses from './courses';
export default {
  computed:{
    course(){
      const {id} = this.$route.params;
      return courses.find(course=>course.id == id) || {};
    },
    coverStyle(){
      return {
        backgroundImage: `url('${this.course.img}')`,
      }
    },
  },
};
</script>