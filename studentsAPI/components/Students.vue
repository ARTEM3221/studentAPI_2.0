<template>
    <div>
      <h1>Student List</h1>
      <router-link to="/">Back</router-link>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>group</th>
            <th>photo</th>
            <th>mark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student._id">
            <td>{{ student.name }}</td>
            <td>{{ student.group }}</td>
            <td>{{ student.photo }}</td>
            <td>{{ student.mark }}</td>
            <td><router-link :to="`/student/${student._id}`">View</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import VueRouter from 'vue-router'
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