<template>
  <h1 class="logo">
    <a href="/">
      <img src="./imags//logo.png" class="logoBg" style="transform: scale(1);">
      <div class="logoText">
        <div class="text">
          <img src="./imags/miaov.png" style="top: 0px;">
        </div>
        <div class="text">
          <img src="./imags/miaov-cn.png" style="top: 0px;">
        </div>
        <div class="logoAll" style="opacity: 1;"></div>
        <span style="left: 270px;"></span>
      </div>
    </a>
  </h1>
</template>
<style scoped>
.logo {
  width: 249px;
  height: 131px;
  border-bottom: 1px solid #fff;
}
.logo .logoBg {
  transition: all .1s;
}
.logo .logoText {
  width: 170px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  margin-left: 10px;
}
.logo .logoText div {
  overflow: hidden;
  position: relative;
}
.logo .logoText div:nth-of-type(1) {
  height: 45px;
}
.logo .logoText div:nth-of-type(2) {
  height: 24px;
}
.logo .logoText div img {
  position: absolute;
}
.logo .logoText .logoAll {
  width: 169px;
  height: 69px;
  top: -69px;
  background: url(./imags/miaov-all.png);
}
.logo .logoText span {
  position: absolute;
  left: -100px;
  top: 42px;
  width: 100px;
  height: 5px;
  background: #e15671;
}
</style>

