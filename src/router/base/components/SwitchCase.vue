<template>
    <div class="switch-case-wrap">
        基本用法
        <RdSwitch :value.sync="value1" />

        文字描述
        <RdSwitch
            :value.sync="value2"
            activeText="開啟"
            inactiveText="關閉"
        />
        禁能
        <RdSwitch
            disabled
            :value.sync="value2"
        />

        icon
        <RdSwitch
            :value.sync="value3"
            activeIcon="check"
            inactiveIcon="close"
            :activeValue="1"
            :inactiveValue="0"
        />
    </div>
</template>

<script>
import RdSwitch from '@/base/RdSwitch';

export default {
    components: {
        RdSwitch
    },
    data() {
        return {
            value1: true,
            value2: true,
            value3: 0
        };
    },
    created() {
    }
};
</script>
