import Vue from 'vue'
const shopList = [
  {
    id:123,
    img_url: 'https://i1.mifile.cn/a1/T1SkV_BCd_1RXrhCrK!80x80.jpg',
    title: '小米胶囊耳机 黑色',
    price: 59,
    count: 2,
    max_count: 5
  },
  {
    id:456,
    img_url: 'https://i1.mifile.cn/a1/pms_1498624482.88089389!80x80.jpg',
    title: '米家激光投影电视 150英寸 白色',
    price: 9999,
    count: 2,
    max_count: 5
  },
  {
    id:789,
    img_url: 'https://i1.mifile.cn/a1/pms_1505208926.31382783!80x80.jpg',
    title: '米动手表青春版 卡其绿',
    price: 3999,
    count: 2,
    max_count: 5
  },
  
]

shopList.forEach(item => {
  Vue.set(item,'checked',true)
});

const shopCarModule = {
  namespaced: true,
  state: {
    shopList
  },
  getters: {
    shopListGetter(state) {
      let shopList = state.shopList
      return shopList
    },
    checkedItem (state,getters) {
      return getters.shopListGetter.filter((item) => item.checked)
    },
    checkedLen (state,getters) {
      return getters.checkedItem.length;
    },
    shopLength (state,getters) {
      return getters.shopListGetter.length;
    },
    totalPrice(state,getters) {
      return getters.checkedItem.reduce((n,item) => n + (item.price*item.count),0)
    },
    isCheckedAll (state,getters) {
      return getters.checkedLen === getters.shopListGetter.length
    }
  },
  mutations: {
    updataShopListChecked(state,paylod){
      let item = state.shopList.find(item => item.id == paylod.id)

      if(item) {
        item.checked = !item.checked;
      }
    },
    updataAllChecked (state,paylod) {
      state.shopList.forEach(item => item.checked = paylod.checked)
    },
    updataCount(state,paylod) {
      let item = state.shopList.find(item => item.id == paylod.id)

      if(item) {
        item.count += paylod.miuns ? -1 : 1;
      }
    },
    removeShoplist (state,paylod) {
      state.shopList = state.shopList.filter(item => item.id !== paylod.id)
    } 
  }
}


export default shopCarModule;