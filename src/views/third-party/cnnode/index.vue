<template>
  <div class="cnnode">
    <Menu mode="horizontal" theme="light" :active-name="avtive">
      <MenuItem :key="item.title" v-for="(item,index) in titles" :name="index">
          <router-link class="menu-a" :to="{path:'',query:{'tab':item.name}}">{{item.title}}</router-link>
      </MenuItem>
    </Menu>
    <div class="content">
      <Row type="flex">
          <Col span="12">
            <a href="">
              <img src="https://avatars3.githubusercontent.com/u/3118295?v=4&s=120" alt="">
            </a>
            <span>100/1000</span> 
            <span>置顶</span>
            <a href="">测试请发到客户端测试专区，违规影响用户的，直接封号</a>
          </Col>
          <Col span="3" offset="8">
            <img src="https://avatars3.githubusercontent.com/u/20333833?v=4&s=120" alt="">
            <span>12小时前</span>
          </Col>
      </Row>
    </div>
  </div>
</template>
<script>
let titles = [
  {
    title: '全部',
    name: 'all'
  },
  {
    title: '精华',
    name: 'good'
  },
  {
    title: '分享',
    name: 'share'
  },
  {
    title: '问答',
    name: 'ask'
  },
  {
    title: '招聘',
    name: 'job'
  },
  {
    title: '客户端测试',
    name: 'dev'
  }
]
export default {
  data () {
    return {
      titles,
      tab:'all',
      avtive: 0
    }
  },
  created () {
    let tab = this.$route.query.tab;
    let active = this.titles.findIndex(item => item.name === tab)
    if(!tab || active === -1){
      tab = 'all'
      this.$router.push({
        query:{
          tab
        }
      })
    }
    this.tab = tab;
    this.avtive = tab === 'all' ? 0 : active;
  }
}
</script>
<style scoped>
.cnnode {
  width: 90%;
  margin: 0px auto;
  overflow: hidden;
}
.menu-a {
  width: 100%;
  display: block;
}
.content {
  background: #fff;
  margin-top: 10px;
}
.content img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.content span {
  vertical-align: middle;
}
</style>


