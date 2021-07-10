<template>
    <div class="main">
        <div class="title">Sales</div>
        <List />
    </div>
</template>

<script>
import List from './List';

export default {
    components: {
        List
    },
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
.main {
    padding: 10px;
    .title {
        margin-bottom: 10px;
        width: 100%;
        height: 40px;
        line-height: 30px;
        font-size: 16px;
        color: #0D4777;
        text-align: center;
        -webkit-box-shadow: inset 0px -1px 0px #F3F3F4;
        box-shadow: inset 0px -1px 0px #F3F3F4;
    }
}
</style>
