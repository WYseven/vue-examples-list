<template>
  <div class="item-box"> 
    <div class="item-table ">
      <div class="item-row">
        <!--左侧单选框-->
        <div class="col col-check">  
          <i 
            class="iconfont icon-checkbox" 
            :class="{'icon-checkbox-selected': list.checked}" 
            @click="checkedHandle"
          >√</i> 
        </div>
        <!--商品图片展示-->
        <div class="col col-img">  
          <a href="//item.mi.com/1161800009.html" target="_blank"> 
            <img alt="" :src="list.img_url" width="80" height="80"> 
          </a> 
        </div>

        <!--商品标题-->
        <div class="col col-name">  
          <div class="tags">   
          </div>  
          <h3 class="name">  
            <a href="javascript:;" target="_blank"> {{list.title}} </a>  
          </h3>      
        </div>
        <!--商品单价-->
        <div class="col col-price"> {{list.price}}元 </div>
        <!--商品数量-->
        <div class="col col-num">  
          <div class="change-goods-num clearfix J_changeGoodsNum"> 
            <a href="javascript:void(0)" class="J_minus" @click="minusHandle">
              <i class="iconfont"></i>
            </a> 
            <input tyep="text"  v-model="list.count"  autocomplete="off" class="goods-num J_goodsNum" />
            <a href="javascript:void(0)" class="J_plus" @click="plusHandle">
              <i class="iconfont"></i>
            </a>   
          </div>  
        </div>
        <!--小计-->
        <div class="col col-total"> {{list.price * list.count}}元 <p class="pre-info">  </p> </div>
        <!--操作-->
        <div class="col col-action"> 
          <a href="javascript:void(0);" @click="removeHandle" title="删除" class="del">
            <i class="iconfont"></i>
          </a> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    checkedHandle () {
     this.$store.commit('car/updataShopListChecked', {id:this.list.id})
    },
    minusHandle () {

      if(this.list.count <= 1){
        this.$Modal.warning({
          title: '温馨提示',
          content: '不能少于1件'
        })
        return
      }

      this.$store.commit('car/updataCount', {id:this.list.id,miuns:true})
    },
    plusHandle () {
      if(this.list.count >= this.list.max_count){
        this.$Modal.warning({
          title: '温馨提示',
          content: '不能超过最大购买数'
        })
        return
      }
      this.$store.commit('car/updataCount', {id:this.list.id})
    },
    removeHandle () {
      this.$Modal.confirm({
        title: '温馨提示',
        content: '确定删除吗？',
        onOk : () => {
          this.$store.commit('car/removeShoplist', {id:this.list.id})
        }
      })
      
    }
  }
}
</script>

<style scoped>
 .item-box {
    padding: 15px 26px 15px 0;
    border-top: 1px solid #e0e0e0;
}
 .item-table {
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
}
 .item-table .item-row {
  display: table-row;
}
 .col-check {
    width: 110px;
}
 .item-table .col {
    display: table-cell;
    vertical-align: middle;
}
 .item-box .col-img {
    width: 80px;
    height: 80px;
    padding-right: 40px;
    overflow: hidden;
}
 .col-name {
    width: 350px;
}
 .col-name .name {
    line-height: 1;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
 .col-price {
    padding-right: 84px;
    text-align: right;
    color: #424242;
    font-size: 16px;
    width: 160px;
}
 .col-name .name a {
    color: #424242;
}
 .col-num {
    text-align: center;
    color: #424242;
}
.change-goods-num {
    height: 38px;
    border: 1px solid #e0e0e0;
    text-align: center;
    background-color: #fff;
    position: relative;
    zoom: 1;
}
.change-goods-num a {
    float: left;
    width: 30px;
    height: 38px;
    line-height: 38px;
    color: #757575;
    font-size: 20px;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.change-goods-num input {
    float: left;
    width: 72px;
    height: 35px;
    line-height: 38px;
    padding: 0;
    border-width: 0;
    color: #424242;
    font-size: 16px;
    text-align: center;
}
 .col-total {
    width: 180px;
    padding-right: 55px;
    text-align: right;
    color: #ff6700;
    font-size: 16px;
    font-weight: bold;
}
 .col-action {
    width: 80px;
    text-align: center;
}
 .item-box .col-action .del {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 12px;
    color: #757575;
    font-size: 16px;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.change-goods-num a:hover {
    background-color: #e0e0e0;
}
.cart-goods-list .item-box .col-action .del:hover {
    color: #fff;
    background-color: #e53935;
}
</style>
