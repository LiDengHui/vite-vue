<template functional>
    <ul>
        <li v-for="(item,$index) in data" :key="$index">
            <slot :row="item">
                Hello World
            </slot>
        </li>
    </ul>
</template>
<script>
    export default {
        props: {
            data: {
                default() {
                    return [];
                }
            }
        },
    }
</script>