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
    <div class="main-header-con" :style="{paddingLeft: '240px'}">
      <div class="main-header">
        <div class="header-avator-con">
          <div class="user-dropdown-menu-con">
              <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                  <Dropdown transfer trigger="click">
                      <a href="javascript:void(0)">
                          <span class="main-user-name">{{ username }}</span>
                          <Icon type="arrow-down-b"></Icon>
                      </a>
                      <DropdownMenu slot="list">
                          <DropdownItem name="ownSpace">项目地址</DropdownItem>
                          <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                  <Avatar src="http://img.microbu.com/2012/0220/66068514297553_200x200crop.jpg" style="background: #619fe7;margin-left: 10px;"></Avatar>
              </Row>
          </div>
        </div>
      </div>
    </div>
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
import Cookies from 'js-cookie';
export default {
  data () {
    return {
      menuList: appRouter,
      username: '',
      openNamesArr : []  // 默认打开的
    }
  },
  created () {
    this.openNamesArr.push(this.$route.matched[0].name); // 设置默认打开的下拉框

    // 拿到用户名
    this.username = Cookies.get('user')
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