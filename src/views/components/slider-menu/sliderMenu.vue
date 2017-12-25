<template>
  <Menu 
    theme='dark' 
    :active-name="$route.name"  
    @on-select="changeMenu"
    :open-names="openNames"
  >

    <template v-for="item in menuList" v-if="item.name">
      <MenuItem 
        name="1" 
        v-if="item.children.length < 1" 
        :name="item.children[0].name" 
        :key="item.name"
      >
          <Icon type="ios-paper"></Icon>
          {{item.title}}
      </MenuItem>
      <Submenu 
        name="1" 
        v-if="item.children.length >= 1" 
        :name="item.name"
      >
          <template slot="title">
              <Icon type="ios-paper"></Icon>
              <span class="layout-text">{{ item.title }}</span>
          </template>
          <MenuItem 
            :name="child.name"
            v-for="child in item.children"
            v-if="child.name"
            :key="child.name+'1'"
          >
            <Icon :type="child.icon" :key="child.name+'2'"></Icon>
            <span class="layout-text" :key="child.name+'3'">{{ child.title }}</span>
          </MenuItem>
          
      </Submenu>
    </template>
    </Menu>
</template>
<script>
export default {
  props: {
    menuList: {
      type:Array,
      required: true
    },
    openNames : Array
  },
  methods: {
    changeMenu (active) {
      this.$emit('on-change',active)
    }
  }
}
</script>

