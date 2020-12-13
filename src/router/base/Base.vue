<template>
    <div class="base-components-wrap">
        <div class="header-wrap">基本元件</div>
        <!-- <SwitchCase /> -->

        <div class="sidebar-wrap">
            <router-link to="/base/switch">switch</router-link>
            <router-link to="/base/select">select</router-link>
        </div>

        <div class="content-wrap">
            <Component :is="dynamicComponent" />
        </div>
    </div>
</template>

<script>
import SwitchCase from './components/SwitchCase';
import SelectCase from './components/SelectCase';

export default {
    components: {
        // SwitchCase: () => import('./components/SwitchCase')
    },
    computed: {
        dynamicComponent() {
            console.log('ccc', this.$route.params);
            const { params } = this.$route;

            let component;

            switch (params) {
                case 'switch':
                    component = SwitchCase;
                    break;
                case 'select':
                    component = SelectCase;
                    break;
                default:
                    break;
            }

            return SwitchCase;
        }
    },
    created() {
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
