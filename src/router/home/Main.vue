<template>
    <RouterView />
</template>

<script>
import ajax from '@/lib/ajax';
import apiUrl from './apiUrl';

export default {
    created() {
        ajax({
            url: apiUrl.home_init,
            success: (res) => {
                const { data } = res;
                console.log('data', data);
            }
        });
    }
};
</script>
