<template>
    <div>
      <router-link to="/">Back to students list</router-link>
      <h2>Student Information</h2>
      <p>Name: {{ student.name }}</p>
      <p>Group: {{ student.group }}</p>
      <p>Mark: {{ student.mark }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    props: ['_id'],
    computed: {
      student() {
        return this.students.find(student => student._id === this._id)
      }
    },
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