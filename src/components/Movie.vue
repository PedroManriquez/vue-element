<template>
  <div class="movie">
    <h1>Movies</h1>
    <el-table :data="tableData" style="width: 50%; margin-left: 25%; text-align: left;">
      <el-table-column prop="date" label="Date" width="180">
      </el-table-column>
      <el-table-column prop="name" label="Name" width="180">
      </el-table-column>
      <el-table-column prop="desc" label="Description">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'movie',
  data: function () {
    return {
      tableData: [{
        date: '2005-05-05',
        name: 'Faster and Furious',
        desc: 'Is an action movie for cars and woman'
      }, {
        date: '2004-02-24',
        name: 'American pie',
        desc: 'Is an comedy movie'
      }, {
        date: '2014-12-04',
        name: 'World of Warcraft',
        desc: 'Is a Epic movie, this story is based on game WoW'
      }, {
        date: '2016-05-01',
        name: 'The Conjuring',
        desc: 'Is the reprentational for the warren expedient, this a great terror movie'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


