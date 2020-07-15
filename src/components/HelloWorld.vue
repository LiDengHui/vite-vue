<template>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <List :data="list">
        <template #default="{ row }">
            {{row.name}}
        </template>
    </List>
</template>

<script>
    import {defineAsyncComponent} from "vue";

    export default {
        name: 'HelloWorld',
        components: {
            List: defineAsyncComponent(() => import('./List.vue'))
        },
        props: {
            msg: String
        },
        data() {
            return {
                count: 4,
                list: [
                    {name: "张三"},
                    {name: "李四"},
                    {name: "王老五"}
                ]
            }
        }
    }
</script>
