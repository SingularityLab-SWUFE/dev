<template>
    <div class="all">

        <div class="common-layout">
            <el-container class="container">
                <el-header class="header"><span class="title">我关注的人</span></el-header>
                <el-main class="main">
                    <ui class="list">
                        <li v-for="timu in TimuList" :key="timu.id" class="item">
                            <a href="#">{{timu.title}}</a>
                        </li>
                    </ui>
                </el-main>
            </el-container>
        </div>

        <div class="common-layout">
            <el-container class="container">
                <el-header class="header"><span class="title">关注我的人</span></el-header>
                <el-main class="main">
                    <ui class="list">
                        <li v-for="tijie in TijieList" :key="tijie.id" class="item">
                            <a href="#">{{tijie.title}}</a>
                        </li>
                    </ui>
                </el-main>
            </el-container>
        </div>

    </div>
</template>

<script>
import {reactive} from "vue";

export default {
    name: "InfoFocus",
    setup(){
        let TimuList = reactive([
            {id:'001',title:"奇点工作室"},
            {id:'002',title:"张三"},
            {id:'003',title:"李四"},
            {id:'004',title:"猪八戒"}

        ])
        let TijieList = reactive([
            {id:'001',title:"奇点工作室"},
            {id:'002',title:"孙悟空"},
            {id:'003',title:"唐僧"},
            {id:'004',title:"白龙马"}
        ])
        return{
            TimuList,
            TijieList
        }


    }
}

</script>

<style scoped>
.all{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: auto;
}
.common-layout{
    display: flex;
    justify-content: left;
    padding-left: 5vh;
    padding-right: 5vh;

}
.header{
    display: flex;
    justify-content: left;
    align-content: flex-end;

}
.title{
    align-self: self-end;
    color:  #333333;
    font-size: 1.5vw;
    font-weight: 900;

}
.list{
    display: flex;
    justify-content: left;
}
.item{
    margin-right: 3%;
}
a{
    color: #aaaaaa;

}
a:link{
    text-decoration: none;
}
</style>