<template>
    <div>
        <el-row :gutter="0">
            <el-col :span="4" class="aside">
                <el-row align="middle"  style="height: 100%">
                    <el-col :span="22"><div class="father-Avartar"><el-avatar shape="circle" :src="UserInfo.AvartarUrl" class="AvartarComponent"  alt="用户头像" /></div></el-col>
                </el-row>
            </el-col>
            <el-col :span="20" :offset="0"><div class="main" >
                <div class="form-box">Main{{UserInfo.Name}}</div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
    name: "StudentInfoHeader",
    setup(){
        const UserInfo = reactive({
            AvartarUrl : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            Name :" 张三"
        })
        return{
            UserInfo
        }
    }
}
</script>

<style scoped>
/*  region重置样式表 */
*{
    margin: 0;
    padding: 0;
    border: 0;
}
/* endregion */

.aside{
    background-color:#42b983 ;
    height: 230px;
}
.main{
    background-color: #bb985b;
    height: 230px;
    display: flex;
    align-items: center;
}
.father-Avartar{
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
}
.AvartarComponent{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid black;
}
.form-box{
    width: 100%;
    height: 70%;
    border: 1px solid white;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
}
</style>
