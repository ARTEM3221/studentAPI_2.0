<template>
    <div>
      <h1>Student List</h1>
      <ul>
        <li v-for="student in students" :key="student._id">
          <router-link :to="`/student/${student._id}`">{{ student.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        students: []
      }
    },
    mounted() {
      this.getStudents()
    },
    methods: {
      async getStudents() {
        const response = await axios.get('http://34.82.81.113:3000/students')
        this.students = response.data
      }
    }
  }
  </script>