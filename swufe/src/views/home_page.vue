<!-- 修改后的 template 部分 -->
<template>
    <div class="oj-home">
        <header class="oj-header">
            <img src="@/assets/img/首页/title.jpg" alt="OJ首页图片" style="width: 100%; height:125px;margin-bottom: -10px" />
        </header>
<!--        <headerNav />-->
        <main class="oj-main">
            <section class="oj-section1">
                <el-carousel trigger="click" height="530px" :interval="1000" arrow="hover" style="margin: -16px -200px;">
                    <el-carousel-item v-for="(item,index) in carouselImages" :key="index">
                        <figure>
                            <img :src="item" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
                        </figure>
                    </el-carousel-item>
                </el-carousel>


                <!-- 第一个板块的内容 -->
            </section>

            <section class="oj-section4">
                <div class="oj-sub-section">
                    <div class="oj-section2">
                        <div class="oj-image-container">
                            <img src="@/assets/img/首页/插图1.svg" alt="插图1" class="oj-image" />
                            <img src="@/assets/img/首页/插图2.svg" alt="插图2" class="oj-image" />
                            <img src="@/assets/img/首页/插图3.svg" alt="插图3" class="oj-image" />
                        </div>
                    </div>
                    <!-- 左侧板块的内容 -->
                </div>
            </section>

            <section class="oj-section">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-row class="table-header">
                            <el-col :span="2">状态</el-col>
                            <el-col :span="3">题号</el-col>
                            <el-col :span="5">题目</el-col>
                            <el-col :span="4">标签</el-col>
                            <el-col :span="4">来源</el-col>
                            <el-col :span="6">难度</el-col>
                        </el-row>
                        <el-row v-for="(item, index) in tableData" :key="index" class="table-row">
                            <el-col :span="2" v-show="item.status !== '-1'">
                                <el-image v-show="item.status === '1'" :src="require('@/assets/img/首页/完成.svg')" style="height: 30px"/></el-col>
                            <el-col :span="2" v-show="item.status === '-1'"></el-col>
                            <el-col :span="3">{{ item.number }}</el-col>
                            <el-col :span="5">{{ item.title }}</el-col>
                            <el-col :span="4">{{ item.tags }}</el-col>
                            <el-col :span="4">{{ item.source }}</el-col>
                            <el-col :span="6">{{ item.difficulty }}</el-col>
                        </el-row>

                    </el-col>
                </el-row>

                <!-- 分页组件 -->

<!--                <el-row class="example-pagination-block" style="text-align: center; margin-left: 48%">-->

<!--                        <el-pagination layout="prev, pager, next" :total="50" @current-change="handleCurrentChange" style="font-size:10em;" />-->

<!--                </el-row>-->
                <custom-pagination
                    :current-page="currentPage"
                    :page-size="itemsPerPage"
                    :total="tableData.length"
                    :pager-count="6"
                    @update:current-page="handlePageChange"
                />
            </section>
        </main>

        <footer class="oj-footer">
            <div class="footer-content">
                <div class="footer-group oj-title">
                    <span>Developed</span>
                    <span>by</span>
                    <span>SingularityLab</span>
                </div>
                <img src="@/assets/img/首页/bottom.png" alt="SingularityLab" class="footer-logo" />

                <div class="footer-group">
                    <span class="oj-title">SWUFE OJ</span>
                    <span>题库</span>
                    <span>比赛</span>
                    <span>讨论</span>
                </div>

                <div class="footer-group">
                    <span class="oj-title">关于我们</span>
                    <span>赞助竞赛</span>
                    <span>校园合作</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import CustomPagination from '@/components/CustomPagination.vue';
import { ref } from 'vue';

export default {
components: {
CustomPagination,
},
setup() {
const carouselImages = [
require('@/assets/img/首页/轮播图/轮播图1.jpg'),
require('@/assets/img/首页/轮播图/轮播图2.jpg'),
require('@/assets/img/首页/轮播图/轮播图3.png'),
require('@/assets/img/首页/轮播图/轮播图4.png')
];

const tableColumns = ['status', 'number', 'title', 'tags', 'source', 'difficulty'];
const itemsPerPage = 5; // 每页显示行数

// 更新表格数据
    const tableData = ref([
        { status: '-1', number: 1, title: '题目1', tags: '标签1', source: '来源1', difficulty: '简单' },
        { status: '1', number: 2, title: '题目2', tags: '标签2', source: '来源2', difficulty: '中等' },
        { status: '-1', number: 3, title: '题目1', tags: '标签1', source: '来源1', difficulty: '简单' },
        { status: '1', number: 4, title: '题目2', tags: '标签2', source: '来源2', difficulty: '中等' },
        { status: '-1', number: 5, title: '题目1', tags: '标签1', source: '来源1', difficulty: '简单' },
        { status: '1', number: 6, title: '题目2', tags: '标签2', source: '来源2', difficulty: '中等' },
        { status: '-1', number: 7, title: '题目1', tags: '标签1', source: '来源1', difficulty: '简单' },
        { status: '1', number: 8, title: '题目2', tags: '标签2', source: '来源2', difficulty: '中等' },
        { status: '-1', number: 9, title: '题目1', tags: '标签1', source: '来源1', difficulty: '简单' },
        { status: '1', number: 10, title: '题目2', tags: '标签2', source: '来源2', difficulty: '中等' },
        { status: '-1', number: 11, title: '题目1', tags: '标签1', source: '来源1', difficulty: '简单' },
        { status: '1', number: 12, title: '题目2', tags: '标签2', source: '来源2', difficulty: '中等' },
        { status: '-1', number: 13, title: '题目1', tags: '标签1', source: '来源1', difficulty: '简单' },
        { status: '1', number: 14, title: '题目2', tags: '标签2', source: '来源2', difficulty: '中等' },
        { status: '-1', number: 15, title: '题目1', tags: '标签1', source: '来源1', difficulty: '简单' },
        { status: '1', number: 16, title: '题目2', tags: '标签2', source: '来源2', difficulty: '中等' },
        { status: '-1', number: 17, title: '题目1', tags: '标签1', source: '来源1', difficulty: '简单' },
        { status: '1', number: 18, title: '题目2', tags: '标签2', source: '来源2', difficulty: '中等' },
    ])

const getPageItems = ref(() => {
// 实现分页逻辑
const startIndex = (currentPage.value - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
return tableData.value.slice(startIndex, endIndex);
});

const currentPage = ref(1);

const prevPage = () => {
if (currentPage.value > 1) {
currentPage.value--;
}
};

const nextPage = () => {
const totalPages = Math.ceil(tableData.value.length / itemsPerPage);
if (currentPage.value < totalPages) {
currentPage.value++;
}
};

return {
carouselImages,
tableData,
tableColumns,
itemsPerPage,
getPageItems,
currentPage,
prevPage,
nextPage,
};
}
};
</script>


<style>

.oj-home {
    background-color: #f2f2f2;
    color: #fff;
    margin: 0;
}

.oj-header{
    position: relative;
    padding: 0;
    z-index: 0;
    height: 99%;
}
.oj-main {
    padding: 0;
    margin: 0;
}

.oj-section1 {
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: relative;
    height: 550px; /* 设置图片的最大高度，保持图片宽高比例 */
    background-color: #f2f2f2; /* 背景颜色，根据需要调整 */
}

.oj-section1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.oj-section2 {
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    overflow: hidden;
    background-color: #fff;
    margin-left: 70px;
    margin-top: 40px;
    margin-bottom: 40px;
}

.oj-image-container {
    width: 100%;
    display: flex;
}

.oj-image {
    width: 33.3333%;
    height: auto;

}

.oj-section3 {
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #fff;
    margin-top: 20px;


}
.calendar-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    width: 100%;
    height: 100%;
}
.oj-section4 {
    display: flex;
    justify-content: space-between;
}

.oj-sub-section {
    width: 48%;
}

/* 表格样式 */
.table-container {
    overflow-x: auto;
}

.table-header {
    padding-top: 0px;
    font-weight: bold;
    font-size: 3em;
    color: #1c3c61;
    border-bottom: 5px solid #bb985b;

}
.el-col:last-child {
    border-right: none;
}
.table-row {
    border-bottom: 3px solid #f2f2f2;
}



.el-col {
    color: #1c3c61;
    border-right: 2px solid #bb985b;
    padding: 10px;
    text-align: center;
    font-size: large;

}

.el-col:first-child {
    border-left: none;
}
.el-col:last-child {
    border-right: none;
}
/* 分页组件样式 */
.example-pagination-block {
    display: inline-block;
    margin-top: 10px;
    font-size: larger;
    text-align: center;
    font-family: 'fengye';
    margin-left: 25px;
}


.oj-section {
    padding-top: -10px;
    margin-bottom: 20px;
    background-color: #fff;
    margin-left: 70px;
    margin-right: 70px;
    border-radius: 20px;

}

/*分页表*/
.example-pagination-block {
    display: inline-block; /* 使分页居中显示 */
    margin-top: 10px; /* 调整上边距 */
    font-size: larger;
    text-align: center;
    font-family: fengye;
}
/*footer样式*/
.oj-title {
    font-size: 28px; /* 调整字体大小，根据实际情况调整 */
    font-weight: bold;
    margin-bottom: 15px;
}

.oj-group-title {
    font-size: 16px; /* 调整字体大小，根据实际情况调整 */
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
padding-bottom: 10px;
}

.footer-group {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-items: center;
    margin-right: 10px
}
.footer-group span {
    margin-top: 5px;
    margin-bottom: 10px; /* 调整题库、比赛、讨论之间的间隙，根据需要调整数值 */
}
.oj-footer {
    padding: 50px;
    background-color: #1c3c61;
    margin: 0;
    color: #fff;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-logo {
    width: 200px; /* 图片宽度，根据实际情况调整 */
}

</style>
