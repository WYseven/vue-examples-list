<template>

  <div class="main">
    <div class="sidebar-menu-con">
      <div class="ivu-shrinkable-menu" style="background: rgb(73, 80, 96);">
        <logo></logo>
        <slider-menu
        :menu-list="menuList"
        @on-change="changeMenu"
        :open-names="openNamesArr"
        ></slider-menu>
      </div>
    </div>
    <!--<div class="main-header-con" :style="{paddingLeft: '240px'}">
      <div class="main-header"></div>
    </div> -->
    <div class="single-page-con" style="left:240px;">
        <div class="single-page">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
  </div>
</template>
<script>
import SliderMenu from '@/views/components/slider-menu/sliderMenu'
import Logo from '@/views/components/logo/logo'
import {appRouter } from "@/router/router"

export default {
  data () {
    return {
      menuList: appRouter,
      openNamesArr : [appRouter[0].name]
    }
  },
  methods: {
    changeMenu (name) {
      this.$router.push({
        name:name 
      })
    }
  },
  components: {
    SliderMenu,
    Logo
  }
}
</script>

<style lang="less">
    @import "./main.less";
</style>