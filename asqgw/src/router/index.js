import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import page01 from '@/components/page01'
import page02 from '@/components/page02'
import page03 from '@/components/page03'
import page04 from '@/components/page04'
import page05 from '@/components/page05'
import page01A from '@/components/page01/page01-A'
import page01B from '@/components/page01/page01-b'
import page01C from '@/components/page01/page01-C'
import page01Detail from '@/components/page01/page01Detail/page01Detail'
import page02A from '@/components/page02/page02-A'
import page02Detail from '@/components/page02/page02Detail/page02Detail'
import page03A from '@/components/page03/page03-A'
import page03Detail from '@/components/page03/page03Detail/page03Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/page01',
      name: 'page01',
      component: page01,
      children: [
        {
          path: 'page01-a',
          name: 'page01A',
          component: page01A
        },
        {
          path: 'page01-b',
          name: 'page01B',
          component: page01B
        },
        {
          path: 'page01-c',
          name: 'page01C',
          component: page01C
        },
        {
          path: 'page01Detail/:id',
          name: 'page01Detail',
          component: page01Detail
        }
      ]
    },
    {
      path: '/page02',
      name: 'page02',
      component: page02,
      children: [
        {
          path: 'page02-a',
          name: 'page02A',
          component: page02A
        },
        {
          path: 'page02Detail/:id',
          name: 'page02Detail',
          component: page02Detail
        }
      ]
    },
    {
      path: '/page03',
      name: 'page03',
      component: page03,
      children: [
        {
          path: 'page03-a',
          name: 'page03A',
          component: page03A
        },
        {
          path: 'page03Detail/:id',
          name: 'page03Detail',
          component: page03Detail
        }
      ]
    },
    {
      path: '/page04',
      name: 'page04',
      component: page04
    },
    {
      path: '/page05',
      name: 'page05',
      component: page05
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

