<template>
    <headerNav/>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <el-button type="primary" @click="handleClick">dfsgfsvf</el-button>-->
  <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import HeaderNav from "@/components/headerNav.vue";
export default {
  name: 'App',
  components: {

    HeaderNav
  },
  methods: {
    handleClick: function (e) {
      console.log('click', e)
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
