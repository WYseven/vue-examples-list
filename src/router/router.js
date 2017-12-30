
import Main from '@/views/main'
import CarList from '@/views/examples_dir/examples-car-list/carList'

import {examplesList,thirdPartyList} from './examplesList'

import Login from '@/views/components/login/login'

// 登录路由配置

const loginRoute = {
  path: '/login',
  name: 'login',
  component: Login
}

export const appRouter = [
  {
    path:'/user-list',
    title: '用户列表',
    name:'user-list',
    component: Main,
    childrenShow:false,  // 是否显示子级
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/users-list/userList')
      }
    ]
  },
  {
    path:'/base-examples',
    title: '基础示例',
    name:'base-examples',
    component: Main,
    redirect: {name:'examples-index'},
    childrenShow:true,  // 是否显示子级
    children: [
      {
        path: 'index',
        name: 'examples-index',
        notShow: true,  // 是否显示这一项
        component: CarList
      },
      ...examplesList
    ]
  },
  {
    path:'/live-examples',
    title: '第三方接口示例',
    name:'live-examples',
    childrenShow:true,  // 是否显示子级
    component: Main,
    children: [
      ...thirdPartyList
    ]
  }
]

export const routers = [
  loginRoute,
  ...appRouter
]

