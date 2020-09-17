import Vue from 'vue';
import VueRouter from 'vue-router';
import jwt_decode from 'jwt-decode';
const Login = () => import('@/views/Login/Login.vue');//登录页
const Password = () => import('@/views/Login/Password.vue');//找回密码
const Layout = () => import('@/views/Layout/index.vue');//主页
const Home = () => import('@/views/Home.vue') //首页
const TableData = () => import('@/views/DataManage/TableData.vue')
const ChartsData = () => import('@/views/DataManage/ChartsData.vue')
const FormData = () => import('@/views/DataManage/FormData.vue')
const AccountData = () => import('@/views/UserManage/AccountData.vue')
const UserInfo = () => import('@/views/UserManage/UserInfo.vue')
const R404 = () => import('@/views/404.vue')


Vue.use(VueRouter)

/**
* hidden: true                   如果hidden为true则在左侧菜单栏展示，否则不显示
* name:'router-name'             路由名称，必须填写
* meta : {
    title: 'title'               对应路由在左侧菜单栏的标题名称
    icon: 'icon-class'           对应路由在左侧菜单栏的图标样式，样式使用fontawesome图标库
  }
**/


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    hidden: true,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: '首页', icon: 'fa fa-home' },
        component: Home
      }
    ]
  },
  {
    path: '/dataManage',
    name: 'dataManage',
    hidden: true,
    meta: { title: '数据管理', icon: 'fa fa-database' },
    component: Layout,
    redirect: '/tableData',
    children: [
      {
        path: '/tableData',
        name: 'tableData',
        meta: { title: '表格管理', icon: 'fa fa-table' },
        component: TableData
      },
      {
        path: '/chartsData',
        name: 'chartsData',
        meta: { title: '图表管理', icon: 'fa fa-bar-chart' },
        component: ChartsData
      },
      {
        path: '/formData',
        name: 'formData',
        meta: {
          title: '表单管理',
          icon: 'fa fa-file-text-o',
          roles: ['admin', 'editor']
        },
        component: FormData
      }
    ]
  },
  {
    path: '/userManage',
    name: 'userManage',
    component: Layout,
    hidden: true,
    redirect: '/accountData',
    children: [
      {
        path: '/accountData',
        name: 'accountData',
        meta: { title: '账户管理', icon: 'fa fa-user-plus', roles: ['admin'] },
        component: AccountData
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/userInfo',
    hidden: false,
    children: [
      {
        path: '/userInfo',
        name: 'userInfo',
        meta: { title: '个人中心' },
        component: UserInfo
      }
    ]
  },
  {
    path: '*',//表示输出其它不存在路由时自动跳转到404页面
    redirect: '/404',
    meta: {}
  },
  {
    path: '/404',
    name: '404',
    hidden: false,
    meta: { title: '404' },
    component: R404
  },
  {
    path: '/Login',
    name: 'Login',
    hidden: false,
    meta: { title: '系统登录' },
    component: Login
  },
  {
    path: '/Password',
    name: 'Password',
    hidden: false,
    meta: { title: '找回密码' },
    component: Password
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


 /*在路由跳转之前执行*/
router.beforeEach((to: any, from: any, next: any) => {
  localStorage.setItem('routes',JSON.stringify(routes));//存储所有路由信息
 
  const isLogin = localStorage.tsToken ? true : false;
  if (to.path == '/login' || to.path == '/password') {
    next();
  } else {
    if (isLogin) {
      const decoded: any = jwt_decode(localStorage.tsToken);
      const { key } = decoded;
      // 权限判断
      if (hasPermission(key, to)) {
        next();
      } else {
        next('/404'); // 没有权限进入
      }
    } else {
      next('/login');
    }
  }
});

/**
 * 判断是否有权限
 * @param roles 当前角色
 * @param route 当前路由对象
 * */
function hasPermission(roles: string, route: any) {
  //当前路由 跟当前路由权限都分配的情况下
  if (route.meta && route.meta.roles) {
    // 如果meta.roles是否包含角色的key值,如果包含那么就是有权限,否则无权限
    return route.meta.roles.some((role: string) => role.indexOf(roles) >= 0);//some:一真即真 
  } else {
    // 默认不设置有权限
    return true;
  }
}

export default router;
