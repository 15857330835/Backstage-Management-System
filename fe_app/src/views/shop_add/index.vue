<template>
  <div class="shop_add">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="店铺名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介" prop="intro">
        <el-input v-model="ruleForm.intro"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语" prop="slogan">
        <el-input v-model="ruleForm.slogan"></el-input>
      </el-form-item>
      <el-form-item label="店铺分类">
        <el-cascader
          v-model="ruleForm.category"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="店铺特点">
        <ul class="feature">
          <li v-for="item in ruleForm.feature" :key="item.id">
            <span>{{ item.text }}</span>
            <el-switch v-model="item.val" active-color="#20a0ff" inactive-color="#bfcbd9"></el-switch>
          </li>
        </ul>
      </el-form-item>
      <el-form-item label="配送价">
        <el-input-number
          v-model="ruleForm.delivery"
          @change="handleChange"
          :min="1"
          :max="10"
          label="描述文字"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="起送价">
        <el-input-number
          v-model="ruleForm.price"
          @change="handleChange"
          :min="1"
          :max="10000"
          label="描述文字"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="营业时间">
        <el-time-select
          placeholder="起始时间"
          v-model="ruleForm.startTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '23:30'
          }"
        ></el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="ruleForm.endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '23:30',
            minTime: ruleForm.startTime
          }"
        ></el-time-select>
      </el-form-item>
      <el-form-item label="上传店铺头像">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess1"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="ruleForm.imageUrl1" :src="ruleForm.imageUrl1" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传营业执照">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess2"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="ruleForm.imageUrl2" :src="ruleForm.imageUrl2" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传餐饮服务许可证">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess3"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="ruleForm.imageUrl3" :src="ruleForm.imageUrl3" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="shop_add(ruleForm)">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions,mapState } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        address: "",
        phone: "",
        intro: "",
        slogan: "",
        category: [],
        delivery: 5,
        price: 20,
        startTime: "",
        endTime: "",
        feature: [
          {
            id: 1,
            text: "品牌保证",
            val: false
          },
          {
            id: 2,
            text: "蜂鸟专送",
            val: false
          },
          {
            id: 3,
            text: "新开店铺",
            val: false
          },
          {
            id: 4,
            text: "外卖保",
            val: false
          },
          {
            id: 5,
            text: "准时达",
            val: false
          },
          {
            id: 6,
            text: "开发票",
            val: false
          }
        ],
        imageUrl1: "",
        imageUrl2: "",
        imageUrl3: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入店铺详细地址", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入店铺联系方式", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 11 个字符", trigger: "blur" }
        ],
        intro: [
          { required: true, message: "请输入店铺简介", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur"
          }
        ],
        slogan: [
          { required: true, message: "请输入店铺标语", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ]
      },
      options: [
        {
          value: "yiguoliaoli",
          label: "异国料理",
          children: [
            {
              value: "rihaliaoli",
              label: "日韩料理"
            },
            {
              value: "xican",
              label: "西餐"
            },
            {
              value: "pisayimian",
              label: "披萨意面"
            },
            {
              value: "dongnanyacai",
              label: "东南亚菜"
            }
          ]
        },
        {
          value: "kuaicanbiandang",
          label: "快餐便当",
          children: [
            {
              value: "jiancan",
              label: "简餐"
            },
            {
              value: "gaijiaofan",
              label: "盖浇饭"
            },
            {
              value: "mifenmianguan",
              label: "米粉面馆"
            },
            {
              value: "baozizhoudian",
              label: "包子粥店"
            },
            {
              value: "xiangguoshaguo",
              label: "香锅砂锅"
            },
            {
              value: "malatang",
              label: "麻辣烫"
            },
            {
              value: "jiaozihuntun",
              label: "饺子馄饨"
            },
            {
              value: "hanbao",
              label: "汉堡"
            },
            {
              value: "shengjian",
              label: "生煎"
            },
            {
              value: "huangmenjimifan",
              label: "黄焖鸡米饭"
            },
            {
              value: "shaolafan",
              label: "烧腊饭"
            },
            {
              value: "baozaifan",
              label: "煲仔饭"
            },
            {
              value: "galifan",
              label: "咖喱饭"
            }
          ]
        },
        {
          value: "xiaochiyexiao",
          label: "小吃夜宵",
          children: [
            {
              value: "xiaolongxia",
              label: "小龙虾"
            },
            {
              value: "difangxiaochi",
              label: "地方小吃"
            },
            {
              value: "shaokao",
              label: "烧烤"
            },
            {
              value: "zhajizhachuan",
              label: "炸鸡炸串"
            },
            {
              value: "taboluwei",
              label: "鸭脖卤味"
            },
            {
              value: "lingshi",
              label: "零食"
            }
          ]
        },
        {
          value: "guoshushengxian",
          label: "果蔬生鲜",
          children: [
            {
              value: "shuiguo",
              label: "水果"
            },
            {
              value: "shengxian",
              label: "生鲜"
            },
            {
              value: "shucai",
              label: "蔬菜"
            },
            {
              value: "haixianshuichan",
              label: "海鲜水产"
            }
          ]
        },
        {
          value: "tesecaixi",
          label: "特色菜系",
          children: [
            {
              value: "chuanxiangcai",
              label: "川湘菜"
            },
            {
              value: "qitacaixi",
              label: "其他菜系"
            },
            {
              value: "jiangzhecai",
              label: "江浙菜"
            },
            {
              value: "yuecai",
              label: "粤菜"
            },
            {
              value: "haixian",
              label: "海鲜"
            },
            {
              value: "huoguokaoyu",
              label: "火锅烤鱼"
            },
            {
              value: "dongbeicai",
              label: "东北菜"
            },
            {
              value: "xibeicai",
              label: "西北菜"
            },
            {
              value: "yunnancai",
              label: "云南菜"
            },
            {
              value: "xinjiangcai",
              label: "新疆菜"
            },
            {
              value: "lucai",
              label: "鲁菜"
            }
          ]
        },
        {
          value: "shangdianchaoshi",
          label: "商店超市",
          children: [
            {
              value: "chaoshi",
              label: "超市"
            },
            {
              value: "bianlidian",
              label: "便利店"
            },
            {
              value: "mingjiufang",
              label: "名酒坊"
            },
            {
              value: "lingshiyinliao",
              label: "零食饮料"
            },
            {
              value: "shuizhan",
              label: "水站"
            },
            {
              value: "cha",
              label: "茶"
            },
            {
              value: "naizhan",
              label: "奶站"
            },
            {
              value: "liangyou",
              label: "粮油"
            },
            {
              value: "meizhuangmuying",
              label: "美妆母婴"
            }
          ]
        },
        {
          value: "xianhuadangao",
          label: "鲜花蛋糕",
          children: [
            {
              value: "xianhua",
              label: "鲜花"
            },
            {
              value: "dangao",
              label: "蛋糕"
            },
            {
              value: "mianbao",
              label: "面包"
            }
          ]
        },
        {
          value: "tianpingyinping",
          label: "甜品饮品",
          children: [
            {
              value: "naichaguozhi",
              label: "奶茶果汁"
            },
            {
              value: "tianping",
              label: "甜品"
            },
            {
              value: "kafei",
              label: "咖啡"
            }
          ]
        }
      ],
    };
  },
  computed:{
    ...mapState({
      data:state=>state.shop.data
    })
  },
  methods: {
    ...mapActions(["add",'query']),
    async shop_add(val) {
      const result =await this.add(val);
      switch (this.data.state) {
          case 0:
            this.$message({
              message: '该商铺已经存在，请确认您的信息是否正确',
              type: 'warning'
            });
            break;
          case 2:
            this.$message({
              message: '创建成功,即将为您跳转商铺页面',
              type: 'success',
              duration:2000
            });
            const _this = this
            this.query()
            setTimeout(()=>{
              _this.$router.push('/shop')
            },2000)
            break;
        
          default:
            this.$message({
              message: '创建失败，请确认您的信息是否正确',
              type: 'error'
            });
            break;
      }
      
    },
    // submitForm(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });

    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange(value) {
      // console.log(value);
    },
    handleAvatarSuccess1(res, file) {
      this.ruleForm.imageUrl1 = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess2(res, file) {
      this.ruleForm.imageUrl2 = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess3(res, file) {
      this.ruleForm.imageUrl3 = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="stylus" scoped>
.shop_add {
  width: 50%;
  margin-left: 16.7%;
}

.feature {
  display: flex;
  flex-wrap: wrap;
  width: 350px;

  li {
    margin-right: 10px;
  }
}

.el-date-editor {
  margin-right: 10px;
}

.el-popper {
  height: 200px !important;
}
</style>