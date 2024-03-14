<template>
    <div class="navbar">
        <router-link to="/home_page" class="nav-link" :class="{ active: activeIndex === '1' }">
            首页
        </router-link>
        <router-link to="/problem_set" class="nav-link" :class="{ active: activeIndex === '2' }">
            题库
        </router-link>
        <router-link to="/contests" class="nav-link" :class="{ active: activeIndex === '3' }">
            比赛
        </router-link>
        <router-link to="/status" class="nav-link" :class="{ active: activeIndex === '4' }">
            记录
        </router-link>
        <router-link to="/rank" class="nav-link" :class="{ active: activeIndex === '5' }">
            讨论
        </router-link>
        <ul class="nav-image">
            <li class="img1">
                <img src="@/assets/img/首页/图标/未搜索.svg" alt="" />
            </li>
            <li class="img2">
                <img src="@/assets/img/首页/图标/未查看提醒.svg" alt="" />
            </li>
            <li class="img3">
                <img src="@/assets/img/首页/图标/未登录.svg" alt="" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
let activeIndex = '1';

// eslint-disable-next-line
const handleSelect = (index) => {
    activeIndex = index;
    router.push({ path: '/' });
};
</script>

<style scoped>

.navbar {
    height: 1%;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1c3c61;
    padding: 0px;
}

.nav-link {
    text-decoration: none;
    color: #bb985b;
    font-size: 25px;
    position: relative;
    transition: color 0.3s;
}

.nav-link::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -80px;
    transform: translateY(-50%);
    width: 2px;
    height: 40px;
    background-color: #bb985b;
}

.nav-link:hover {
    color: #fff;
}

.nav-link.active {
    color: #fff;
}

.nav-image img {
    margin-right: 30px;
    width: 40px;
    gap: 60px;
}

.nav-image {
    display: flex;
    .img1:hover img {
        content: url('../assets/img/首页/图标/已搜索 .svg');
    }
    .img2:hover img {
        content: url('../assets/img/首页/图标/已查看提醒.svg');
    }
    .img3:hover img {
        content: url('../assets/img/首页/图标/已登录 .svg');
    }
}
ul li {
    list-style: none;
}
</style>
