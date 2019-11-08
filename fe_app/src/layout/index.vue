<template>
  <div class="layout">
    <el-container style="border: 1px solid #eee">
      <el-aside width="16.7%" style="background-color: rgb(50, 64, 87)">
        <div class="title">tz_lws</div>
        <el-menu
          background-color="rgb(50, 64, 87)"
          text-color="#bfcbd9"
          active-text-color="#20a0ff"
        >
          <el-submenu index="1" class="home">
            <template slot="title">
              <router-link active-class="active" to="/home"><i class="el-icon-menu"></i>首页</router-link>
            </template>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-folder-opened"></i>数据管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link active-class="active" to="/user">用户列表</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link active-class="active" to="/shop">商家列表</router-link>
              </el-menu-item>
              <el-menu-item index="2-3">
                <router-link active-class="active" to="/food">食品列表</router-link>
              </el-menu-item>
              <el-menu-item index="2-4">
                <router-link active-class="active" to="/order">订单列表</router-link>
              </el-menu-item>
              <el-menu-item index="2-5">
                <router-link active-class="active" to="/administrator">管理员列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>添加数据
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <router-link active-class="active" to="/shop_add">添加商铺</router-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                <router-link active-class="active" to="/food_add">添加商品</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>图表
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">
                <router-link active-class="active" to="/chart">用户分布</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>编辑
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <router-link active-class="active" to="/edit">文本编辑</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-s-tools"></i>设置
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">
                <router-link active-class="active" to="/set">管理员设置</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i>说明
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">
                <router-link active-class="active" to="/explain">说明</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>


        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style lang="stylus" scoped>
.el-header {
  background-color: #eff2f7;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 100%;
}

.el-aside::-webkit-scrollbar {
  display none
}

.el-main::-webkit-scrollbar {
  display none
}

.layout {
  height: 100%;
}

.title {
  height: 60px;
  line-height: 60px;
  color #bfcbd9
  text-align center
}

.el-container {
  height: 100%;
}

.el-menu-item-group {
  background-color: #1f2d3d;
}

.el-menu-item {
  background-color: #1f2d3d !important;
}

.el-menu-item:hover{
  background-color #48576a !important
}

.el-submenu a
  text-decoration none
  color #bfcbd9
  display block
  height 100%
  width 100%
  &.active
    color #20a0ff
    i 
      color #20a0ff


.el-submenu{
  text-align left!important
}

</style>