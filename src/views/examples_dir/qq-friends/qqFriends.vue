<template>
  <div class="wrap">
    <div class="list">
			<h2>只能打开一个菜单</h2>
      <div class="item" v-for="(item,i) in data" :key="item.title">
				<h2 @click="openMenuOne(i)" :class="{active: indexOne === i}"><span></span>{{item.title}}</h2>
				<ul :class="{show: indexOne === i}">
					<li v-for="option in item.list" :key="option.subTitle">{{option.subTitle}}</li>
				</ul>
			</div>
    </div>
		<div class="list list-two">
			<h2>可以打开多个菜单</h2>
      <div class="item" v-for="(item,i) in data" :key="item.title">
				<h2 @click="openMenuTwo(i)" :class="{active: item.checked}"><span></span>{{item.title}}</h2>
				<ul :class="{show: item.checked}">
					<li v-for="option in item.list" :key="option.subTitle">{{option.subTitle}}</li>
				</ul>
			</div>
    </div>
  </div>
</template>

<script>
let qqData = [
  {
    title: '我的好友',
    list: [
      {
        subTitle: '张国荣'
      },
      {
        subTitle: '周杰伦'
      },
      {
        subTitle: '王杰'
      }
    ]
  },
  {
    title: '我的同事',
    list: [
      {
        subTitle: '莫莫'
			},
			{
        subTitle: '多多'
			},
			{
        subTitle: 'leo'
      }
    ]
  }
]
export default {
  data () {
		return {
			data: qqData,
			indexOne: 0
		}
	},
	methods: {
		openMenuOne (index) {
			this.indexOne = this.indexOne === index ? '' : index;
		},
		openMenuTwo (index) {
			this.$set(this.data[index],'checked',!this.data[index].checked)
		}
	}
}
</script>
<style scoped>

.wrap {
	width: 584px;
	/*background: url(./imgs/bg1.png) no-repeat center center;*/
	margin: 0 auto;
	position: relative;
}

.list {
	width: 280px;
	position: absolute;
	left: 0px;
	top: 64px;
}
.list-two {
	left: 346px;
}
.list h2 {
	height: 48px;
	font: 14px/48px arial;
	color: #fff;
	background: rgba(0,0,0,.8);
	box-sizing: border-box;
	padding-left: 10px;
	margin-top: 10px;
}
.list h2:nth-of-type(1){
	margin: 0;
}
.list h2.active {
	background: rgba(221,84,111,.8)
}
.list span {
	width: 0;
	height: 0;
	display: inline-block;
	border: 6px dashed rgba(0,0,0,0);
	border-left: 6px solid rgba(255,255,255,1);
	margin-right: 10px;
	position: relative;
	top: 1px;
}
.list .active span {
	width: 0;
	height: 0;
	display: inline-block;
	border: 6px dashed rgba(0,0,0,0);
	border-top: 6px solid rgba(255,255,255,1);
	position: relative;
	top: 4px;
}
.list ul {
	background: #000000;
	color: #fff;
	display: none;
}
.list ul.show {
	display: block;
}
.list li {
	height: 40px;
	font: 14px/40px "微软雅黑";
	box-sizing: border-box;
	padding-left: 34px;
}
.list li.active {
	background: rgba(255,255,255,.4);
}

.list li:hover {
	background: rgba(255,255,255,.4);
}

.list li.selected {
	background: rgba(221,84,111,.6);
}
</style>


