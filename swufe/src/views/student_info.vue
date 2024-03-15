<template>
    <StudentInfoHeader></StudentInfoHeader>
    <StudentInfoMain></StudentInfoMain>
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

</style>
