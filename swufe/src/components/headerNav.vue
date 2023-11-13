<template>

    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo navMenu"
        mode="horizontal"
        @select="handleSelect"  >
        <div class="navMessage">SWUFEOJ </div>
      <div class="navLink">

        <router-link to="/ojHome">
<!--            <el-image class="svg-icon" src="@/assests/img/home.png" alt="Home"></el-image>-->
            <el-menu-item index="1"  class="custom-font">Home</el-menu-item>
        </router-link>
        <router-link to="ojProblems"><el-menu-item index="2" class="custom-font">problems</el-menu-item></router-link>
        <router-link to="contests"><el-menu-item index="3" class="custom-font">contests</el-menu-item></router-link>
        <router-link to="status"><el-menu-item index="4" class="custom-font">status</el-menu-item></router-link>
        <router-link to="rank"><el-menu-item index="5" class="custom-font">rank</el-menu-item></router-link>
        <router-link to="about"><el-menu-item index="6" class="custom-font">about</el-menu-item></router-link>
          <el-row class="mb-4">
              <el-button round>Login</el-button>
              <el-button round>Register</el-button>
          </el-row>
      </div>
    </el-menu>

    <router-view/>
</template>
<script setup>
import {useRouter} from 'vue-router'
import {ref} from "vue";

const router = useRouter()
const activeIndex = ref('5')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
    router.push({path: '/'})

}

</script>
<style>
.navMessage{
    width: 5%;
    display: flex;
    justify-content: left;

}
a {
    text-decoration: none;
    color: inherit;
}
.navMenu {
    display: flex;
    justify-content: center;  /* 水平居中 */
    align-items: center;      /* 垂直居中 */
}

.navLink {
    /*width: 1300px;*/
    width: 80%;
    display: flex;
    justify-content: space-around;  /* 均匀分布链接 */
    align-items: center;
}
.custom-font {
    font-size: 26px !important;
}
.svg-icon {
    width: 20px; /* 设置图标的宽度 */
    margin-right: 8px; /* 设置图标与文字之间的间距 */
}
</style>

