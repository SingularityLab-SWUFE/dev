<template>
    <div class="custom-pagination">
        <el-pagination
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total"
            :pager-count="pagerCount"
            class="custom-pagination-style"
        layout="jumper, prev, pager, next, total"
        @current-change="handlePageChange"
        />
    </div>
</template>

<script>
export default {
    props: {
        currentPage: Number,
        pageSize: Number,
        total: Number,
        pagerCount: Number,
    },
    methods: {
        handlePageChange(val) {
            this.$emit('update:currentPage', val);
        },
    },
};
</script>


<style scoped>
.custom-pagination {
    margin-top: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-pagination-style {
    font-size: 18px !important;
}
</style>
