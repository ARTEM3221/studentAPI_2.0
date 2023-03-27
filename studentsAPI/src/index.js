<<<<<<< HEAD

import axios from 'axios'

=======
import axios from 'axios'
import VueRouter from 'vue-router'
import StudentInfo from '../components/StudentInfo.vue'
import Students from '../components/Students.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Students },
  { path: '/student/:_id', component: StudentInfo, props: true }
]

const router = new VueRouter({
  routes
})
>>>>>>> 0f5d9839de1a0cee86baa6340c3ed388f61ea7d1

var app = new Vue({
  el: '#app',
  data() {
    return {
      students: [],
      newStudent: {
        name: '',
        group: '',
<<<<<<< HEAD
        photo: '',
        mark: false
=======
        mark: '',
        isDonePr: false
>>>>>>> 0f5d9839de1a0cee86baa6340c3ed388f61ea7d1
      },
      editingStudent: null
    }
  },
  mounted() {
    this.getStudents()
  },
  methods: {
<<<<<<< HEAD
=======

>>>>>>> 0f5d9839de1a0cee86baa6340c3ed388f61ea7d1
    async getStudents() {
      const response = await axios.get('http://34.82.81.113:3000/students')
      this.students = response.data
    },
<<<<<<< HEAD
    async deleteStudent(_id) {
      await axios.delete(`http://34.82.81.113:3000/students/${_id}`)
      this.getStudents()
    },
      async addStudent() {
         const response = await axios.post('http://34.82.81.113:3000/students', this.newStudent) 
         this.students.push(response.data) 
         this.newStudent = { 
        name: '',
        group: '',
        photo: '',
        mark: false 
        } 
      }, 
      async updateStudent() {
      await axios.put(`http://34.82.81.113:3000/students/${this.editingStudent._id}`, 
      this.editingStudent)
      this.getStudents()
      this.editingStudent = null
    },
    editStudent(student) {
=======

    async deleteStudent(_id) {
      await axios.delete(`http://34.82.81.113:3000/students/${_id}`) 
      this.getStudents() 
    }, 
    
    async addStudent() { const response = await axios.post('http://34.82.81.113:3000/students', 
    this.newStudent) 
    this.students.push(response.data) 
    this.newStudent = { name: '', group: '', mark: '', isDonePr: false } 
  }, 
  async updateStudent() { 
    await axios.put(`http://34.82.81.113:3000/students/${this.editingStudent._id}`, 
    this.editingStudent)
      this.getStudents()
      this.editingStudent = null
      },
      editStudent(student) {
>>>>>>> 0f5d9839de1a0cee86baa6340c3ed388f61ea7d1
      this.editingStudent = student
      },
      cancelEditing() {
      this.editingStudent = null
      }
<<<<<<< HEAD
  }
=======
      },
      router

>>>>>>> 0f5d9839de1a0cee86baa6340c3ed388f61ea7d1
});