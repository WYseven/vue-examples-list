<template>
  <div>
    <slider-menu
      :menu-list="menuList"
      @on-change="changeMenu"
      :open-names="openNamesArr"
    ></slider-menu>
  </div>
</template>
<script>
import SliderMenu from '@/views/components/slider-menu/sliderMenu'
import {appRouter } from "@/router/router"


export default {
  data () {
    return {
      menuList: appRouter,
      openNamesArr : ['examples']
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
    SliderMenu
  }
}
</script>

