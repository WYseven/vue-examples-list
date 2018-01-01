<template>
  <div class="cnnode">
    <Menu mode="horizontal" theme="light" :active-name="avtive">
      <MenuItem :key="item.title" v-for="(item,index) in titles" :name="index">
          <router-link class="menu-a" :to="{path:'',query:{'tab':item.name}}">{{item.title}}</router-link>
      </MenuItem>
    </Menu>
    <div class="content">
      <Row>
        <Col class="demo-spin-col" span="24">
            <Spin fix>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </Col>
      </Row>
      <Row class="custom" type="flex">
          <Col span="3" class="one-col">
            <a href="">
              <img src="https://avatars3.githubusercontent.com/u/3118295?v=4&s=120" alt="">
            </a>
            <span>100/100000</span> 
            <span class="flag flag-share">置顶</span>
          </Col>
          <Col span="12" offset="1">
            <a href="" class="title">测试请发到客户端测试专区，违规影响用户的，直接封号</a>
          </Col>
          <Col span="3" offset="3">
            <a href="">
              <img src="https://avatars3.githubusercontent.com/u/20333833?v=4&s=120" alt="">
            </a>
            <span>12小时前</span>
          </Col>
      </Row>
      <Row class="page">
        <Page :total="1000" show-elevator></Page>
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
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
}
a {
  font-size: 16px;
  color: #000;
}
.ivu-menu-item-selected a {
  color: #2d8cf0;
}
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
.custom {
  padding: 10px 0;
}
.one-col span,.one-col a{
  display: inline-block;
}
.content img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.content span, .content a{
  vertical-align: middle;
  line-height: 2.5em;
}
.flag {
  display: block;
  height: 30px;
  border-radius: 2px;
  padding: 2px 4px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}
.flag-top {
  background: #80bd01;
}
.flag-share {
  background: #e5e5e5;
}
.page {
  border-top: 1px solid #ccc;
  padding: 10px 10px;
}
</style>


