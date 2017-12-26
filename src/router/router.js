
import Main from '@/views/main'
import CarList from '@/views/examples_dir/examples-car-list/carList'

import {examplesList} from './examplesList'

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
    children: [
      {
        path: '',
        //name: 'base-examples',
        component: CarList
      },
      ...examplesList
    ]
  }
]

export const routers = [
  loginRoute,
  ...appRouter
]

