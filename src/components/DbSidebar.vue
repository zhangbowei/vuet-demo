<template>
    <ul>
        <li class="el-menu-item is-active" v-for="titles in msg" style=""><a href="javascript:void(0)" @:>{{titles.title}}</a></li>
    </ul>
</template>

<script>

    export default {
        name: 'db-sidebar',
        data() {
            return {
                msg: [
                    {title: "1"},
                    {title: "2"},
                    {title: "3"},
                    {title: "4"},
                    {title: "5"},
                    {title: "6"},
                    {title: "7"},
                    {title: "8"},
                    {title: "9"},
                    {title: "10"},
                    {title: "11"}
                ]
            }
        },
    }

</script>

<style>
    li {
        padding-left: 20px;
    }
    a{
        text-decoration: none;
    }
</style>
