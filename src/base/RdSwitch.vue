<template>
    <ElSwitch
        v-bind="$attrs"
        :value="value"
        :class="getClass"
        :activeColor="activeColor"
        :inactiveColor="inactiveColor"
        @change="change"
    />
</template>

<script>
export default {
    props: {
        value: {
            type: [Boolean, String, Number],
            required: true,
            default: !1
        },
        activeIcon: {
            type: String,
            required: false,
            default: ''
        },
        inactiveIcon: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            getClass: [],
            /* icon 與背景顏色對應表 */
            switchBgColor: {
                check: '#D9F5E9',
                close: '#E5E8EB'
            }
        };
    },
    computed: {
        activeColor() {
            return this.switchBgColor[this.activeIcon] || '#409EFF';
        },
        inactiveColor() {
            return this.switchBgColor[this.inactiveIcon] || '#C0CCDA';
        }
    },
    watch: {
        value: {
            handler(val) {
                if (val) {
                    this.getClass = [`switch-core_${this.activeIcon}`];
                    return;
                }
                this.getClass = [`switch-core_${this.inactiveIcon}`];
            },
            immediate: true
        }
    },
    methods: {
        change(value) {
            this.$emit('update:value', value);
        }
    }
};
</script>

<style lang="scss">
.el-switch {
    &.switch-core {
        &_check,
        &_close {
            display: inline-block;
            line-height: 18px;
            color: #fff;
            font-size: 12px;
            text-align: center;

            >.el-switch__core:after {
                font-family: "Material Icons";
                color: #FFF;
            }
        }
        &_check {
            >.el-switch__core:after {
                content: "\E5CA";
                background-color: #22D38F;
            }
            >.el-switch__label.is-active {
                color: #22D38F;
            }
        }
        &_close {
            >.el-switch__core:after {
                content: "\E5CD";
                background-color: #818B9D;
            }
            >.el-switch__label.is-active {
                color: #818B9D;
            }
        }
    }
}
</style>
