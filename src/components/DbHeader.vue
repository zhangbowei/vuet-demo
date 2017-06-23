<template>
    <header style="background-color: rgb(10, 47, 88);">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item><img src="../assets/seetaLogo.png" alt="" class="logo"></el-menu-item>
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            <el-menu-item><el-button type="primary" @click="getMsg">上传<i class="el-icon-upload el-icon--right"></i></el-button></el-menu-item>
        </el-menu>
        <div class="line"></div>

    </header>
</template>
<script>
    export default {
        name: 'db-header',
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            getMsg(key, keyPath){
                let config = {
                    method: 'post',
                    url: 'http://localhost/return.php',
                    data: {
                        request: "getMsg",
                        time:"2017.6.23"
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    withCredentials:true
                };
                console.log(config);
                this.$axios(config)
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            }
        }
    }
</script>

<style>
.logo{
    height: 100%;
}
</style>