<template>
  <section>
    <div class="tab">
      <div class="tab-header">
        <div class="tab-item" 
          :class='{"tab-active": index === i}' 
          :key="i" v-for="item,i in data"
          @click="tabClickHandle(i)"
        >{{item.title}}</div>
      </div>
      <div class="tab-content">
        <div :style="{display:i === index ? 'block' : ''}" :key="i" v-for="item,i in data">
          <p :key="j" v-for="option,j in item.list">{{option.subTitle}}</p>
        </div>
      </div>
    </div>
    <h3 class="title">自动切换</h3>
    <div class="tab tab-position">
      <div class="tab-header">
        <div class="tab-item" 
          :class='{"tab-active": indexTwo === i}' 
          :key="item.title" v-for="(item,i) in data"
        >{{item.title}}</div>
      </div>
      
      <div class="tab-content">
        <div :style="{display:i === indexTwo ? 'block' : ''}" :key="item.title" v-for="(item,i) in data">
          <p :key="j" v-for="(option,j) in item.list">{{option.subTitle}}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

let tabData = [
  {
    title: '标签一',
    list: [
      {
        subTitle: '标签一'
      },
      {
        subTitle: '标签一'
      },
      {
        subTitle: '标签一'
      }
    ]
  },
  {
    title: '标签二',
    list: [
      {
        subTitle: '标签二'
      }
    ]
  },
  {
    title: '标签三',
    list: [
      {
        subTitle: '标签三'
      }
    ]
  }
]

export default {
  data () {
    return {
      data: tabData,
      index: 0,
      indexTwo: 0,
      timer: null,
      time: 1000
    }
  },
  methods: {
    tabClickHandle (index) {
      this.index = index;
    }
  },
  beforeRouteEnter (to,from,next) {
    next((vm) => {
      vm.timer = setInterval(() => {
        vm.indexTwo++;
        if(vm.indexTwo >= vm.data.length){
          vm.indexTwo = 0;
        }
      },vm.time)
    })
  },
  beforeRouteLeave (to,from,next) {
    clearInterval(this.timer)
    next();
  }
}
</script>

<style scoped>
.title {
  width: 500px;
  margin: 30px auto 30px;
}
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
  min-height: 100px;
  background: #fff;
}
.tab-content div {
  width: 100%;
  height: 100%;
  text-align: center;
  display: none;
}
.tab-content div p {
  height: 30px;
  line-height: 30px;
}
</style>

