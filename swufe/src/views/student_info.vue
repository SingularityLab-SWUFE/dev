<template>
    <div class="main">
    <el-row :gutter="0">
        <el-col :span="22" :offset="1">
            <StudentInfoHeader class="student-header"></StudentInfoHeader>
            <StudentInfoMain class="student-Main"></StudentInfoMain>
        </el-col>
    </el-row>
    </div>
</template>

<script>
import StudentInfoMain from "@/components/student_info_components/StudentInfoMain.vue";
import StudentInfoHeader from "@/components/student_info_components/StudentInfoHeader.vue";

export default {
    name: "student_info",
    components: {StudentInfoHeader, StudentInfoMain}
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    border: 0;
}
body{
    background-color: #f2f2f2;
}
.main{
    background-color: #f2f2f2;
}
.student-header{
    margin-top: 4%;
}
.student-Main{
    margin-top: 6%;
    border-radius: 2%;
    margin-bottom: 3%;
}
</style>
