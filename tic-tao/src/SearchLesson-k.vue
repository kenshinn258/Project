<template>
  <div>
    <input type="text" v-model="text"/>
    <div class="lesson-list">
      <div class="lesson" v-for="lesson in lessons">
        <img :src="lesson.cover">
        <span>{{lesson.title}}</span>
        <label>{{lesson.owner.username}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce';

const SEARCH_API = 'https://hiskio.com/api/v1/courses/search?word=';
export default {
  data(){
    return {
      text: '',
      lessons: [],
    };
  },
  methods:{
    search(val){
      fetch(`${SEARCH_API}${val}`)
      .then(rs => rs.json())
      .then(data => {
        this.lessons = data.courses;
      })
    },
  },
  watch:{
    text(val){
      this.search(val);
    },
  },
  create(){
    this.searchDebounced = debounce(this.search ,1000);
  },
}
</script>

<style>
.lesson img{
  width: 100px;

}

.lesson span , .lesson lable {
  display: block;
}
</style>
