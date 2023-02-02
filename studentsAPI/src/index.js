import VueRouter from 'vue-router'
import axios from 'axios'
import Students from '../components/Students.vue'
import StudentInfo from '../components/StudentInfo.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Students },
  { path: '/student/:_id', component: StudentInfo, props: true }
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  render: function(h) {
    
  },
  data() {
    return {
      students: [],
      newStudent: {
        name: '',
        group: '',
        photo: '',
        mark: false
      },
      editingStudent: null
    }
  },
  mounted() {
    this.getStudents()
  },
  methods: {
    async getStudents() {
      const response = await axios.get('http://34.82.81.113:3000/students')
      this.students = response.data
    },
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
      this.editingStudent = student
      },
      cancelEditing() {
      this.editingStudent = null
      }
  }
});