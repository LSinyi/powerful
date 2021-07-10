<template>
    <div class="list-wrap">
        <el-table
            :data="data"
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label="商品"
                width="150"
            />
            <el-table-column
                prop="price"
                label="價格/單位"
            >
                <!-- width="100" -->
                <div>$100/3包</div>
            </el-table-column>
            <el-table-column
                prop="detail"
                label="平均"
            />
            <el-table-column
                prop="distributor"
                label="通路"
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
                distributor: 'costco',
                detail: '$29.66/包',
                img: '',
                remark: '23cm'
            }, {
                id: 0,
                category: '',
                name: '蘇菲彈力貼身超薄量少潔翼17.5cm',
                price: 89,
                count: 3,
                unit: '包',
                distributor: 'costco',
                detail: '$29.66/包',
                img: ''
            }]
        };
    }
};
</script>

<style lang="scss" scoped>
.list-wrap {
    .el-table {
        border-radius: 10px;
    }
}
</style>
