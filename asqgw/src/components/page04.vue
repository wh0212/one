<template>
  <div>
    <div class="bannerList ban4"></div>
    <div class="topActivities">
      <div class="contain">
        <div class="current">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>联系我们</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="contain">
      <div class="contact-detail">
        <ul class="clearfix">
          <li>
            <div style="margin-top: 38px;">
              <img src="../../static/imgs/dianhua02.png">
              <p class="name">客服电话</p>
              <p class="detail">025-5884 4815</p>
            </div>
          </li>
          <li>
            <div style="margin-top: 39px;">
              <img src="../../static/imgs/youjian.png">
              <p class="name">社区邮箱</p>
              <p class="detail">ai-shequ@sgnbs.cn</p>
            </div>
          </li>
          <li>
            <div style="margin-top:22px;">
              <img src="../../static/imgs/dizhi02.png">
              <p class="name">社区地址</p>
              <p class="detail">南京市江北新区沿江街道 润泰花园南园11栋二层 </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="contact-submit">
      <div class="contain">
        <div class="formBox clearfix">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <div class="lt">
                <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm2.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="电子邮件" prop="email">
                <el-input v-model="ruleForm2.email" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="电话" prop="phone">
                <el-input v-model="ruleForm2.phone"></el-input>
              </el-form-item>
              <el-form-item label="地址" prop="address">
                <el-input v-model="ruleForm2.address"></el-input>
              </el-form-item>
            </div>
            <div class="rt">
              <el-form-item label="描述" prop="textValue">
                <el-input class="txtareas" type="textarea" v-model="ruleForm2.textValue"></el-input>
              </el-form-item>
            </div>
            <div class="clearfix"></div>
            <el-form-item>
              <el-button type="primary" :plain="true" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="mapBox">
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs';
  import golobal_ from '../components/Global';
  export default {
    name: 'pphone04',
    data() {
      var checkPhone = (rule, value, callback) => {
          if(value === ''){
            callback(new Error('请输入手机号'));

          }else {
            if(/^1[34578]\d{9}$/.test(value) == false){
              callback(new Error("请输入正确的手机号"));
            }else{
              callback();
            }
          }
      };
      var checkEmail = (rule, value, callback) => {
        if(value != ""){
          if((/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/).test(value) == false){
            callback(new Error("请输入正确的电子邮件"));
          }else{
            callback();
          }
        }else{
          callback();
        }
      };
      var checkAdress = (rule, value, callback) => {
        if(value != ""){
          callback();
        }else{
          callback();
        }
      };
      var checkName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        } else {
          callback();
        }
      };
      var checkTextarea = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          name: '',
          email: '',
          phone: '',
          textValue:'',
          address:''
        },
        rules2: {
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          email: [
            {required:false, validator: checkEmail, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          address: [
            { validator: checkAdress, trigger: 'blur' }
          ],
          textValue:[
            { validator: checkTextarea, trigger: 'blur' }
          ]
        },
      };
    },
    mounted: function () {
      this.init()
    },
    methods: {
      init: function () {
        var map = new AMap.Map("container", {
          resizeEnable: true,
          center: [118.74734,32.154348],
          zoom: 14
        });
        addMarker();
        //添加marker标记
        function addMarker() {
          map.clearMap();
          var marker = new AMap.Marker({
            map: map,
            position: [118.74734,32.154348]
          });
          //鼠标点击marker弹出自定义的信息窗体
          AMap.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker.getPosition());
          });
        }

        //实例化信息窗体
        var title = '爱i社区服务中心',
          content = [];
        content.push("地址 :南京市江北新区沿江街道润泰花园南园11栋二层");
        var infoWindow = new AMap.InfoWindow({
          isCustom: true,  //使用自定义窗体
          content: createInfoWindow(title, content.join("<br/>")),
          offset: new AMap.Pixel(16, -45)
        });

        //构建自定义信息窗体
        function createInfoWindow(title, content) {
          var info = document.createElement("div");
          info.className = "info";
          //可以通过下面的方式修改自定义窗体的宽高
          //info.style.width = "400px";
          // 定义顶部标题
          var top = document.createElement("div");
          var titleD = document.createElement("div");
          var closeX = document.createElement("img");
          top.className = "info-top";
          titleD.innerHTML = title;
          closeX.src = "https://webapi.amap.com/images/close2.gif";
          closeX.onclick = closeInfoWindow;

          top.appendChild(titleD);
          top.appendChild(closeX);
          info.appendChild(top);

          // 定义中部内容
          var middle = document.createElement("div");
          middle.className = "info-middle";
          middle.style.backgroundColor = 'white';
          middle.innerHTML = content;
          info.appendChild(middle);

          // 定义底部内容
          var bottom = document.createElement("div");
          bottom.className = "info-bottom";
          bottom.style.position = 'relative';
          bottom.style.top = '0px';
          bottom.style.margin = '0 auto';
          var sharp = document.createElement("img");
          sharp.src = "https://webapi.amap.com/images/sharp.png";
          bottom.appendChild(sharp);
          info.appendChild(bottom);
          return info;
          return info;
        }

        //关闭信息窗体
        function closeInfoWindow() {
          map.clearInfoWindow();
        }


      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.getWtData()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getWtData () {
        var that = this;
        const url = golobal_.BaseUrl+'asqweb/newcontact';
        var params = qs.stringify({
          name:that.ruleForm2.name,
          email:that.ruleForm2.email,
          phone:that.ruleForm2.phone,
          address:that.ruleForm2.address,
          content:that.ruleForm2.textValue
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          this.$message({
            message: res.data.detail,
            type: 'success'
          });
        });
      }

    },

  }
</script>
<style>
  .info {
    border: 1px solid silver;
  }
  div.info-top {
    position: relative;
    background: none repeat scroll 0 0 #F9F9F9;
    border-bottom: 1px solid #CCC;
    border-radius: 5px 5px 0 0;
  }
  div.info-top div {
    display: inline-block;
    color: #333333;
    font-size: 14px;
    font-weight: bold;
    line-height: 31px;
    padding: 0 10px;
  }
  div.info-top img {
    position: absolute;
    top: 10px;
    right: 10px;
    transition-duration: 0.25s;
  }
  div.info-top img:hover {
    box-shadow: 0px 0px 5px #000;
  }
  div.info-middle {
    font-size: 12px;
    padding: 6px;
    line-height: 20px;
  }
  div.info-bottom {
    height: 0px;
    width: 100%;
    clear: both;
    text-align: center;
  }
  div.info-bottom img {
    position: relative;
    z-index: 104;
  }
  span {
    margin-left: 5px;
    font-size: 11px;
  }
  .info-middle img {
    float: left;
    margin-right: 6px;
  }
</style>


