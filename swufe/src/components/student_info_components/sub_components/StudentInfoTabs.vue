<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="jumpToRouter" stretch="stretch">
        <el-tab-pane label="主页" name="info_home" ></el-tab-pane>
        <el-tab-pane label="通知" name="info_notice" ></el-tab-pane>
        <el-tab-pane label="比赛" name="info_competition"></el-tab-pane>
        <el-tab-pane label="讨论" name="info_discussion"></el-tab-pane>
        <el-tab-pane label="关注" name="info_focus"></el-tab-pane>
        <el-tab-pane label="收藏" name="info_collection"></el-tab-pane>
    </el-tabs>
</template>
<script >
import {useRouter} from "vue-router";
import {ref,watch} from "vue";
export default {
    name: "StudentInfoTabs",
    setup(){
        const activeName = ref("info_home")
        const router =useRouter()
        const jumpToRouter = () => {
            watch(activeName, (newValue) => {
                if (newValue) {
                    // 数据加载完成后执行路由跳转
                    router.replace(`/student_info/${activeName.value}`);
                }
            });
        }
        return{
            jumpToRouter,
            activeName
        }
    }
}


</script>
<style>
.demo-tabs{
    width: 100%;
    height: 100%;
    padding: 2%;
    color: #6b778c;
    font-size: 32rem;
    font-weight: 1000;

}
el-tab-pane{

}
.demo-tabs{

}
</style>