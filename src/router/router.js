
import Main from '@/views/main'

import {examplesList} from './examplesList'

export const appRouter = [
  {
    path:'/examples',
    title: '基础示例',
    name:'examples',
    component: Main,
    children: examplesList
  }
]

export const routers = [
  ...appRouter
]

