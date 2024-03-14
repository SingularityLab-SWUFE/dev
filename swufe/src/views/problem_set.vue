<template>

    <headerNav/>

</template>

<script>
import HeaderNav from "@/components/headerNav.vue";


export default {
    name: "problem_set.vue",
    components: {HeaderNav},
    
    // 设置背景
    beforeCreate() { 
        this.$nextTick(() => { 
          document.body.setAttribute('style', 'background:rgba(242, 242, 242, 0.4)');
        });
    }, 
      //实例销毁之前钩子，移除body标签的属性style 
    beforeUnmount() { 
        document.body.removeAttribute('style');
    }, 
}
</script>

<style scoped>

</style>
