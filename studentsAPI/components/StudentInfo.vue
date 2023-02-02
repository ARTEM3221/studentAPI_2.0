<template>
    <div>
      <h2>Student Information</h2>
      <p>name: {{ student.name }}</p>
      <p>group: {{ student.group }}</p>
      <p>photo: {{ student.photo }}</p>
      <p>mark: {{ student.mark }}</p>
    </div>
</template>

  <script>
  import VueRouter from 'vue-router'
  export default {
    props: ['_id'],
    data() {
      return {
        student: {}
      }
    },
    mounted() {
      this.getStudent()
    },
    methods: {
      async getStudent() {
        const response = await axios.get(`http://34.82.81.113:3000/students/${this._id}`)
        this.student = response.data
      }
    }
  }
  </script>
