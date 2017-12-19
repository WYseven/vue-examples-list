export const examplesList = [
  // 选项卡的路由配置
  {
    path: 'tab',
    name: 'tab',
    title: '选项卡',
    component: () => import('@/views/examples_dir/tab/tab')
  },
  // 选项卡的路由配置
  {
    path: 'qq-list',
    name: 'qq-list',
    title: '好友列表',
    component: () => import('@/views/examples_dir/tab/tab')
  },
  // 选项卡的路由配置
  {
    path: 'shop-car',
    name: 'shop-car',
    title: '购物车',
    component: () => import('@/views/examples_dir/tab/tab')
  },
  // 选项卡的路由配置
  {
    path: 'banyungong',
    name: 'banyungong',
    title: '文字搬运工',
    component: () => import('@/views/examples_dir/banyungong/banyungong')
  }
]