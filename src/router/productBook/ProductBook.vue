<template>
    <div class="product-book-wrap">
        <el-table
            :data="data"
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label="name"
                width="150"
            />
            <el-table-column
                prop="price"
                label="price"
                width="100"
            />
            <el-table-column
                prop="detail"
                label="detail"
            />
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [{
                id: 0,
                category: '',
                name: '蘇菲彈力貼身超薄量少潔翼17.5cm',
                price: 89,
                count: 3,
                unit: '包',
                distributor: '',
                detail: ''
                // img: ''
            }]
        };
    }
};
</script>

<style lang="scss" scoped>
.product-book-wrap {

}
</style>
