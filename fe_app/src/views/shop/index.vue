<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺标语">
            <span>{{ props.row.slogan }}</span>
          </el-form-item>
          <el-form-item label="店铺分类">
            <span>{{ props.row.category[1] }}</span>
          </el-form-item>
          <el-form-item label="配送价">
            <span>{{ props.row.delivery }}</span>
          </el-form-item>
          <el-form-item label="起送价">
            <span>{{ props.row.price }}</span>
          </el-form-item>
          <el-form-item label="店铺特点">
            <span v-for="item in props.row.feature" :key="item.id">
              <span v-if='item.val'> {{ item.text }} </span>
            </span>
          </el-form-item>
          <el-form-item label="营业时间">
            <span>{{ props.row.startTime }}</span>
            <span> ~ </span>
            <span>{{ props.row.endTime }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="店铺logo">
            <img :src="props.row.imageUrl1" alt="">
          </el-form-item>
          <el-form-item label="营业执照">
            <img :src="props.row.imageUrl2" alt="">
          </el-form-item>
          <el-form-item label="服务许可证">
            <img :src="props.row.imageUrl3" alt="">
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="店铺 ID" prop="_id"></el-table-column>
    <el-table-column label="店铺名称" prop="name"></el-table-column>
    <el-table-column label="描述" prop="intro"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="mini" @click="handleAdd">添加食品</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
import { mapActions,mapState } from 'vuex'
export default {
  methods:{
    ...mapActions(['query','del']),
    handleEdit(item){
      this.$router.push({
        name:'shop_modify',
        query:item
      })
    },
    handleAdd(){
      this.$router.push('/food_add')
    },
    handleDelete(val){
      this.del(val)
    }
  },
  computed:{
    ...mapState({
      data:state=>state.shop.data
    })
  },
  mounted(){
    this.query()
  },
};
</script>