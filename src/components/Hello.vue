<template>
  <div class="hello">
    <hr>
    <el-button type="success" @click="open">Click to open the Message Box</el-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  methods: {
    open: function () {
      this.$alert('This is a message', 'Title', {
        confirmButtonText: 'OK',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
