<template>
  <div class="shop-cart">
    <shop-empty v-show="!shopList.length"></shop-empty>
    <div class="cart-goods-list" v-show="shopList.length">
      <!--购物车表头-->
      <div class="list-head clearfix">
          <div class="col col-check">
            <i class="iconfont icon-checkbox" 
                :class="{'icon-checkbox-selected': isSelectAll}"
                @click="checkAllHandle"
            >√</i>全选</div>
          <div class="col col-img">&nbsp;</div>
          <div class="col col-name">商品名称</div>
          <div class="col col-price">单价</div>
          <div class="col col-num">数量</div>
          <div class="col col-total">小计</div>
          <div class="col col-action">操作</div>
      </div>
      <!--购物车展示商品信息-->
      <div class="list-body" >
        <shop-item-box :key="item.id" v-for="item in shopList" :list="item"></shop-item-box>
      </div>
    </div>
    <!--计算价钱的信息-->
    <shop-info  v-show="shopList.length"></shop-info>
  </div>
</template>
<script>
import ShopItemBox from './shopItemBox'
import ShopInfo from './shopInfo'
import ShopEmpty from './carEmpty'
export default {
  components: {
    ShopItemBox,
    ShopInfo,
    ShopEmpty
  },
  computed: {
    shopList () {
        return this.$store.getters['car/shopListGetter']
    },
    isSelectAll () {
        return this.$store.getters['car/isCheckedAll']
    }
  },
  methods: {
      checkAllHandle () {
        this.$store.commit('car/updataAllChecked', {checked:!this.isSelectAll})
      }
  }
}
</script>
<style>
@import url('./css/font');
</style>

<style scoped>
.shop-cart {
  width: 99%;
  margin: 0px auto;
}
.cart-goods-list {
  background-color: #fff;
}
.list-head {
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;
  overflow: hidden;
}
.list-body {
  overflow: hidden;
}
.list-head .col {
  float: left;
}
.cart-goods-list .col-check {
  width: 110px;
}
.cart-goods-list .list-head .col-img {
  width: 120px;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .list-head .col-name {
  width: 380px;
}
.cart-goods-list .col-price {
  padding-right: 84px;
  text-align: right;
  color: #424242;
}
.cart-goods-list .col-num {
  width: 190px;
  text-align: center;
  color: #424242;
}
.cart-goods-list .col-total {
  width: 150px;
  padding-right: 81px;
  text-align: right;
}
.cart-goods-list .col-action {
  width: 80px;
  text-align: center;
}

</style>

