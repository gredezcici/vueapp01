<template>
  <div id="app">


    <el-row >
      <el-col :span="4">
        <sidebar></sidebar>
      </el-col>


    </el-row>

  </div>
</template>

<script>

  import Sidebar from './components/Nav'
  import Top from './components/Topbar'
  import card from './components/Card'
  export default {
    name: 'app',
    components: {
       Sidebar
    }
  }
</script>
<style >
.card{
  margin-top: 10px;
}
  el-row{
    height:100%;
  }
</style>

