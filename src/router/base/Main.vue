<template>
    <div class="base-components-wrap">
        <div class="header-wrap">基本元件</div>
        <SwitchCase />
    </div>
</template>

<script>
import SwitchCase from './components/SwitchCase';

export default {
    components: {
        SwitchCase
    }
};
</script>

<style lang="scss" scoped>
.base-components-wrap {
    margin: 0 auto;
    max-width: 1140px;

    .header-wrap {
        margin-bottom: 2rem;
        padding: 1rem 0;
        color: #6C757D;
        font-size: 2rem;
        border-bottom: 1px solid #E5E5E5;
        text-align: center;
    }
}
</style>
