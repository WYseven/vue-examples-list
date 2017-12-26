<template>
  <div class="tab">
    <div class="tab-header">
      <div class="tab-item tab-active">标签一</div>
      <div class="tab-item">标签二</div>
      <div class="tab-item">标签三</div>
    </div>
    <div class="tab-content">
      <div style="display:block;">标签一</div>
      <div>标签二</div>
      <div>标签三</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.tab {
  width: 500px;
  background: #fff;
  margin: 0px auto;
  background: rgb(227, 232, 238);
  padding: 16px;
}
.tab-header{
  overflow: hidden;
}
.tab-item {
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #ccc;
  border: 1px solid #dddee1;
  background: #f8f8f9;
  text-align: center;
  margin-right: 5px;
  border-radius: 2px;
  float: left;
}
.tab-active {
  border-color: transparent;
  height: 32px;
  padding-bottom: 5px;
  background: #fff;
  transform: translateZ(0);
  color: #e6451e;
}
.tab-content {
  height: 100px;
  line-height: 100px;
  background: #fff;
}
.tab-content div {
  width: 100%;
  height: 100%;
  text-align: center;
  display: none;
}
</style>

