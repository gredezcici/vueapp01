<template>
  <div id="app">
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
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

