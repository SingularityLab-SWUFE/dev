<template>
    <div class="common-layout">
        <el-container>
            <el-header style="background-color: aqua">Header</el-header>
            <el-main style="background-color: red"><router-view>我是组件</router-view></el-main>
        </el-container>
    </div>

</template>

<script>
export default {
    name: "StudentInfoMain"
}
</script>

<style scoped>

</style>
