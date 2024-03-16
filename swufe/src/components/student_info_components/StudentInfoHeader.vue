<template>
    <div class="Header">
        <el-row :gutter="0">
            <!--侧边头像-->
            <el-col :span="5" class="aside">
                <el-row align="middle" class="row" >
                    <el-col :span="22"><div class="father-Avartar" ><el-avatar shape="circle" :src="UserInfo.AvartarUrl" class="AvartarComponent"  alt="用户头像" /></div></el-col>
                </el-row>
            </el-col>
            <!--右侧表单-->
            <el-col :span="19" :offset="0" class="main">
                <div class="form-box">
                    <!-- 昵称表单-->
                    <el-row >
                        <el-col :span="22" :offset="0" class="form-item">
                            <div class="form-item-box">
                                <span v-show="!UserInfo.IsEdit" class="from-input nickname">{{UserInfo.Name}}</span>
                                <input v-show="UserInfo.IsEdit"
                                       ref="inputRef"
                                       class="from-input nickname input-selected"
                                       type="text"
                                       v-model="UserInfo.Name"
                                />
                            </div>
                        </el-col>
                    </el-row>
                    <!--个人介绍表单-->
                    <el-row >
                        <el-col :span="22" :offset="0" class="form-item">
                            <div class="form-item-box">
                                <span v-show="!UserInfo.IsEdit" class="from-input">{{UserInfo.Summary}}</span>
                                <input v-show="UserInfo.IsEdit" class="from-input input-selected" type="text" v-model="UserInfo.Summary" />
                            </div>
                        </el-col>
                    </el-row>
                    <!--现居地表单-->
                    <el-row >
                        <el-col :span="18" :offset="1" class="form-item">
                                <div class="form-item-box" >
                                    <span v-show="!UserInfo.IsEdit" class="from-input" style="width: 90%">现居地：        {{UserInfo.Location}}</span>
                                    <label v-show="UserInfo.IsEdit" class="from-input" style="width: 90%">现居地：       <input  class="from-input input-selected" type="text" v-model="UserInfo.Location" style="width: 90%;vertical-align: baseline" /></label>
                                </div>
                        </el-col>
                    </el-row>
                    <!--注册时间及按钮表单-->
                    <el-row >
                        <el-col :span="15" :offset="0" class="form-item">
                            <div class="form-item-box">
                                <span class="from-input">注册时间：{{UserInfo.RegisterTime}}</span>
                            </div>
                        </el-col>

                        <el-col :span="1"  class="form-item">
                            <a :href="UserInfo.GithubUrl" target="_blank">
                                <img id="github" src="@/assets/img/组件/github.svg"  style="width: 100%; height: 100%"/>
                            </a>

                        </el-col>
                        <el-col :span="1"  class="form-item">
                            <a :href="UserInfo.QQUrl" target="_blank">
                            <img id="QQ" src="@/assets/img/组件/QQ.svg" style="width: 100%; height: 100%"/>
                            </a>
                        </el-col>
                        <!--右边按钮-->
                        <el-col :span="3" class="form-item">
                            <el-button type="primary" round size="large" color=" #333333" @click="handleInfo" style="width: 100%; height: 100%"><span style="font-size: 0.78rem">{{ButtonText}}</span></el-button>
                        </el-col>

                    </el-row>
                </div>

            </el-col>
        </el-row>
    </div>
</template>
<script>
import {reactive,ref,nextTick} from 'vue';
export default {
    name: "StudentInfoHeader",
    setup(){
        const inputRef = ref(null)
        const UserInfo = reactive({
            AvartarUrl : "https://img.haohan.space/img/202401121933461.jpg",
            Name:"张三",
            Summary:"这个人很懒，什么都没写",
            Location:"四川 成都",
            RegisterTime:"2024/3/16",
            IsEdit:false,
            GithubUrl:"https://github.com/",
            QQUrl:"https://www.qq.com/"
        })
        const ButtonText = ref("修改个人简历")

        const focusInput = ()=>{
            nextTick(()=>{
                inputRef.value.focus()
            })
        }
        function handleInfo(){
            UserInfo.IsEdit = !UserInfo.IsEdit
            if (ButtonText.value === "修改个人简历"){
                ButtonText.value = "提交"
                focusInput()
            }
            else{
                ButtonText.value = "修改个人简历"

            }
        }
        return{
            UserInfo,
            handleInfo,
            ButtonText,
            focusInput,
            inputRef
        };
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
/*region左侧头像栏样式*/

.row{
    height: 100%;
}
.main{
    display: flex;
    align-items: center;
    flex-grow: 1;
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
}
/*endregion*/
/*region右侧表单样式*/
.form-box{
    background-color: rgba(255, 255, 255, 1);
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    flex-direction: column;
}
.form-item{
    display: flex;
    justify-content: left;
    margin-left: 2%;
    margin-bottom: 1vw;

}
.form-item-box{
    padding: 0;
    margin-left: 0;
    width: 100%;
}

.from-input{
    padding: 0;
    margin: 0;
    height: 100%;
    font-size: 1.2vw;
    width: 100%;
    display: flex;
    justify-items: left;

}
.input-selected{
    background-color: #f2f2f2;
}
#github:hover{
    content: url("@/assets/img/组件/github-select.svg");
}
#QQ:hover{
    content: url("@/assets/img/组件/QQ-select.svg");
}
.nickname{
    font-weight: 900;
    font-size: 2.5vw;
    color: black;
}
/*endregion*/
</style>
