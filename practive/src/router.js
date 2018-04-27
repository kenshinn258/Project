import Vue from 'vue';
import About from './About.vue';

import VueRouter from 'vue-router';
import Courses from './Courses.vue';
import CourseList from './CourseList.vue';
import CourseDetail from './CourseDetail.vue';
import Booking from './Booking.vue';
import APP from './App.vue';

Vue.use(VueRouter);

export default  new VueRouter({
    mode : 'history',
    routes: [
        {
            path : '/',
            component: APP,
            children:[
                {path : 'about' , component : About},
                {path : 'booking' , component : Booking},
                {
                path : 'courses',
                component : Courses,
                children : [
                    {path : '', component : CourseList},
                    {path : ':id', component : CourseDetail},
                ]
            },
        ],
    },
]
})
