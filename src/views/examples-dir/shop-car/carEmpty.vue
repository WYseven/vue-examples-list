<template>
  <div class="cart-empty" id="J_cartEmpty">
      <h2>您的购物车还是空的！</h2>
      <a href="javascript:;" class="btn btn-primary btn-shoping J_goShoping">马上去购物</a>
  </div>
</template>
<style scoped>
.cart-empty {
    height: 273px;
    margin: 65px 0 130px;
    color: #b0b0b0;
    overflow: hidden;
    text-align: center;
}
.cart-empty h2 {
    margin: 70px 0 15px;
    font-size: 36px;
}
.cart-empty .btn {
    width: 170px;
    height: 48px;
    line-height: 48px;
}

.btn {
    display: inline-block;
    width: 158px;
    height: 38px;
    padding: 0;
    margin: 0;
    border: 1px solid #b0b0b0;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    color: #b0b0b0;
    cursor: pointer;
    -webkit-transition: all .4s;
    transition: all .4s;
}
.btn-primary {
    background: #ff6700;
    border-color: #ff6700;
    color: #fff;
}
</style>
