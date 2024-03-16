<template>
    <header-nav></header-nav>
    <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';




import HeaderNav from "@/components/headerNav.vue";

export default {
  name: 'App',
    components: {HeaderNav},



  methods: {
    handleClick: function (e) {
      console.log('click', e)
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif,fengye;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
