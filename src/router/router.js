
import Main from '@/views/main'

import {examplesList} from './examplesList'

export const appRouter = [
  {
    path:'/examples',
    title: '例子',
    name:'examples',
    component: Main,
    children: examplesList
  }
]

export const routers = [
  ...appRouter
]

