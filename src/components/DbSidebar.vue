<template>
    <ul>
        <li class="el-menu-item is-active" v-for="titles in msg" style=""><a href="javascript:void(0)" v-bind:href="titles.url">{{titles.title}}</a></li>
    </ul>
</template>

<script>

    export default {
        name: 'db-sidebar',
        data() {
            return {
                msg: [
                    {title: "1", url: "/#/home/1"},
                    {title: "2", url: "/#/home/opt"},
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
        methods: {
            changePath: function () {
                console.log(this.content + "clicked")
            }
        }
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
