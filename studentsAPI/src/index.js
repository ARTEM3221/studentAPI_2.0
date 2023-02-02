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

var app = new Vue({
  el: '#app',
  data() {
    return {
      students: [],
      newStudent: {
        name: '',
        group: '',
        mark: '',
        isDonePr: false
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
      this.editingStudent = student
      },
      cancelEditing() {
      this.editingStudent = null
      }
      },
      router

});