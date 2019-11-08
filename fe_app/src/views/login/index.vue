<template>
    <div class="login">
        <div class="container">
            <h3>tz_lws 后台管理系统</h3>
            <div class="content">
                <el-input v-model="input" placeholder="用户名"></el-input>
                <el-input v-model="input" placeholder="密码"></el-input>
                <el-button type="primary"><router-link to="/home">登录</router-link></el-button>
                <p>温馨提示：</p>
                <p>未登录过的新用户，自动注册</p>
                <p>注册过的用户可凭账号密码登录</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            input:''
        }
    }
}
</script>

<style lang="stylus" scoped>
.login
    position fixed
    top 0
    left 0
    z-index 10000
    width 100%
    height 100%
    background-color #324057
    .container
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        width 370px
        height 260px
        margin auto
        h3
            color white
            position absolute
            left 0
            top -30%
            width 100%
            font-size 34px
            text-align center
        .content
            background-color white
            padding 25px
            box-sizing border-box
            border-radius 5px
            .el-input 
                margin-bottom 22px !important
            .el-button
                width 100%
                margin-bottom 22px
                a
                    display block
                    height 100%
                    text-decoration none
                    color white
                    font-size 16px
            p
                font-size 12px
                color #ff0000
                text-align center
</style>