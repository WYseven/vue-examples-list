<template>
  <div class="item-box"> 
    <div class="item-table ">
      <div class="item-row">
        <!--左侧单选框-->
        <div class="col col-check">  
          <i class="iconfont icon-checkbox icon-checkbox-selected J_itemCheckbox" >√</i> 
        </div>
        <!--商品图片展示-->
        <div class="col col-img">  
          <a href="//item.mi.com/1161800009.html" target="_blank"> 
            <img alt="" src="https://i1.mifile.cn/a1/T1SkV_BCd_1RXrhCrK!80x80.jpg" width="80" height="80"> 
          </a> 
        </div>

        <!--商品标题-->
        <div class="col col-name">  
          <div class="tags">   
          </div>  
          <h3 class="name">  
            <a href="//item.mi.com/1161800009.html" target="_blank"> 小米胶囊耳机 黑色 </a>  
          </h3>      
        </div>
        <!--商品单价-->
        <div class="col col-price"> 59元 </div>
        <!--商品数量-->
        <div class="col col-num">  
          <div class="change-goods-num clearfix J_changeGoodsNum"> 
            <a href="javascript:void(0)" class="J_minus">
              <i class="iconfont"></i>
            </a> 
            <input tyep="text"  value="5"  autocomplete="off" class="goods-num J_goodsNum" />
            <a href="javascript:void(0)" class="J_plus">
              <i class="iconfont"></i>
            </a>   
          </div>  
        </div>
        <!--小计-->
        <div class="col col-total"> 295元 <p class="pre-info">  </p> </div>
        <!--操作-->
        <div class="col col-action"> 
          <a href="javascript:void(0);" title="删除" class="del">
            <i class="iconfont"></i>
          </a> 
        </div>
      </div>
    </div>
  </div>
</template>
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
    width: 380px;
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
}
 .col-name .name a {
    color: #424242;
}
 .col-num {
    width: 150px;
    text-align: center;
    color: #424242;
}
.change-goods-num {
    width: 148px;
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
    height: 38px;
    line-height: 38px;
    padding: 0;
    border-width: 0;
    color: #424242;
    font-size: 16px;
    text-align: center;
}
 .col-total {
    width: 120px;
    padding-right: 81px;
    text-align: right;
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
 .col-check .icon-checkbox-selected {
    color: #fff;
    border-color: #ff6700;
    background-color: #ff6700;
}
 .col-check .icon-checkbox {
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border: 1px solid #e0e0e0;
    margin-left: 24px;
    background-color: #fff;
    color: #fff;
    font-size: 20px;
    text-align: center;
    vertical-align: middle;
    position: relative;
    top: -1px;
    cursor: pointer;
}
</style>
