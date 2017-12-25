export const examplesList = [
  // 选项卡的路由配置
  {
    path: 'tab',
    name: 'tab',
    title: '选项卡',
    component: () => import('@/views/examples_dir/tab/tab')
  },
  // 商品列表的路由配置
  {
    path: 'qq-friends',
    name: 'qq-friends',
    title: '好友列表',
    component: () => import('@/views/examples_dir/qq-friends/qqFriends')
  },
  // 购物车路由配置
  {
    path: 'shop-car',
    name: 'shop-car',
    title: '购物车',
    component: () => import('@/views/examples_dir/shop-car/shopCar')
  },
  // todolist的路由配置
  {
    path: 'todolist',
    name: 'todolist',
    title: 'todolist',
    component: () => import('@/views/examples_dir/todolist/todos')
  }
]