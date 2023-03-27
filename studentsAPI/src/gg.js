import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentInfo from './components/StudentInfo.vue'
import Students from './components/Students.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Students },
  { path: '/student/:_id', component: StudentInfo, props: true }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router
})