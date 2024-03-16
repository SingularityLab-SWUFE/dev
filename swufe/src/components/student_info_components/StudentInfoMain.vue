<template>
    <div class="main-body">
<!--   导航区      -->
            <div class="nav"><student-info-tabs/></div>
<!--   展示区      -->
            <div class="content"><router-view/></div>
    </div>

</template>

<script>
import StudentInfoTabs from "@/components/student_info_components/sub_components/StudentInfoTabs.vue";


export default {
    name: "StudentInfoMain",
    components: {StudentInfoTabs}
}
</script>

<style scoped>
.main-body{
    background-color: white;
    display: flex;
    flex-direction: column;

}
.nav{
    height:6vh;
    margin-bottom: 2%;

}
.content{
    height: 100vh;
}
</style>
