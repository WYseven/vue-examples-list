
import Main from '@/views/main'

import {examplesList} from './examplesList'

export const appRouter = [
  {
    path:'/base-examples',
    title: '基础示例',
    name:'base-examples',
    component: Main,
    children: [
      {
        path: '',
        name: '',
        component: Main
      },
      ...examplesList
    ]
  }
]

export const routers = [
  ...appRouter
]

