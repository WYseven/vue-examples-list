// 设置基础示例的路由配置
export const examplesList = [
  // 选项卡的路由配置
  {
    path: 'tab',
    name: 'tab',
    title: '选项卡',
    component: () => import('examples-dir/tab/tab')
  },
  // 商品列表的路由配置
  {
    path: 'qq-friends',
    name: 'qq-friends',
    title: '好友列表',
    component: () => import('examples-dir/qq-friends/qqFriends')
  },
  // 穿梭框
  {
    path: 'transfer',
    name: 'transfer',
    title: '穿梭框',
    component: () => import('examples-dir/transfer/transfer')
  },
  // 购物车路由配置
  {
    path: 'shop-car',
    name: 'shop-car',
    title: '购物车',
    component: () => import('examples-dir/shop-car/shopCar')
  },
  // todolist的路由配置
  {
    path: 'todolist',
    name: 'todolist',
    title: 'todolist',
    component: () => import('examples-dir/todolist/todos')
  }
]



// 设置第三方API使用的项目示例
export const thirdPartyList = [
  {
    path: 'cn-node',
    name: 'cn-node',
    title: 'cnNode接口使用项目',
    component: () => import('third/cnnode/index')
  }
]