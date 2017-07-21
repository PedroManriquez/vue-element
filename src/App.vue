<template>
  <div id="app">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><i class="el-icon-menu"></i><router-link to="/movie">Movies</router-link></el-menu-item>
      <el-menu-item index="2"><i class="el-icon-setting"></i><router-link to="/">init</router-link></el-menu-item>
    </el-menu>
    <el-row class="tac">
      <el-col :span="24">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
