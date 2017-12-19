
import Examples from '@/views/examples'

import {examplesList} from './examplesList'

export const appRouter = [
  {
    path:'/examples',
    title: '例子',
    name:'examples',
    component: Examples,
    children: examplesList
  }
]

export const routers = [
  ...appRouter
]

