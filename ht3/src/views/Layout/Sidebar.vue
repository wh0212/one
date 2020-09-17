<template>
  <!-- 侧边栏导航 -->
  <el-scrollbar class="el-scrollbar">
    <el-menu class="el-menu-slide" :default-active="$router.currentRoute.path" router> <!-- 路由跳转 --> 
      <template v-for="item in routes">
        <template v-if="item.hidden">
          <!-- 单个子元素 -->
          <el-menu-item v-if="item.children.length==1" :index="item.children[0].path" :key="item.name">
            <i :class="item.children[0].meta.icon"></i>
            <span slot="title">{{item.children[0].meta.title}}</span>
          </el-menu-item>
          <!-- 多个子元素 -->
          <el-submenu v-else :index="item.children[0].path" :key="item.name">
            <template slot="title">
              <i v-if="item.meta.icon" :class="item.meta.icon"></i>
              <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
            </template>
            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.name">
              <i :class="child.meta.icon"></i>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue,Provide } from "vue-property-decorator";//引入装饰器
import router from '../../router';
import jwt_decode from 'jwt-decode';

@Component({
  components: {}
})

export default class Sidebar extends Vue {
  @Provide() routes:object=[];//路由对象

  mounted() {
    const user:any = jwt_decode(localStorage.tsToken);//获取用户信息
    const { key } = user;//获取当前角色信息
    // console.log(key)
    const routes = JSON.parse(localStorage.routes);//赋值对象路由

    for (const item in routes) {
      //判断是否存在二级
      if(routes[item].children){
        let itemchildren = routes[item].children;
        //遍历子菜单
        for (const keys in itemchildren) {
          let obj = itemchildren[keys].meta;
          //判断对象有无roles键值
          if(obj.hasOwnProperty("roles")){
            //通过当前用户的角色在数组中寻找是否有这个角色。如果没有，进行删除
             if(!obj.roles.includes(key)){
               //如此此对象子菜单只有一项的情况下，删除父级 否则删除子菜单中当前循环的对象
               if(routes[item].children.length == 1){
                 routes.splice(item,1);
               }
               else{
                 routes[item].children.splice(keys,1);
               }
             }
          }
        }
      }
      else{
        let obj = routes[item].meta;
        //hasOwnProperty判断对象中是否含有 roles 键
        if(obj.hasOwnProperty("roles")){
          routes.splice(item,1);
        }
      }
    }
    this.routes = routes;//赋值修改后对象路由进行熏染
  }
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  border-right: 1px solid #e6e6e6;
  background: #fff;
  .el-menu-slide {
    border-right: none;
    i {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
