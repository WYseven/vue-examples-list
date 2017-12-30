<template>
  <div class="transfer">
			<transfer-list :data='originData' title="源列表"></transfer-list>
			<div class="transfer-operation" >
				<p><input type="button" @click='targetToOrigin' value="<" :disabled="targetHasChecked"></p>
				<p><input :disabled="originHasChecked" type="button" @click='originToTarget' value=">" /></p>
			</div>
			<transfer-list :data='targetData' title="目标列表"></transfer-list>
		</div>
</template>
<script>
import transferList from './transfer-item'
let data = {
  originData: [  // 源列表
    {
      id:1000,
      title: 'js课程',
      checked: false
    },
    {
      id:1101,
      title: 'css课程',
      checked: false
    },
    {
      id:1002,
      title: 'vue课程',
      checked: false
    },
    {
      id:1103,
      title: 'react课程',
      checked: true
    },
  ],
  targetData: [
    {
      id:105660,
      title: 'Node课程',
      checked: true
    },
    {
      id:11088881,
      title: 'canvas课程',
      checked: true
    }, // 目标列表
  ]
}
export default {
  components: {
    transferList
  },
  data () {
    return {
      ...data
    }
  },
  computed: {
    targetHasChecked () {
      return !this.targetData.find(item => item.checked)
    },
    originHasChecked () {
      return !this.originData.find(item => item.checked)
    }
  },
  methods: {
    filterData(oneData,twoData){
      let targetChecked = oneData.filter(item => item.checked).map(item => ({
        ...item,
        checked:false
      }))
      twoData.push(...targetChecked)
      return oneData.filter(item => !item.checked);
    },
    targetToOrigin () {
      this.targetData = this.filterData(this.targetData,this.originData)
    },
    originToTarget () {
      this.originData = this.filterData(this.originData,this.targetData)
    }
  }
}
</script>

<style scoped>
.transfer {
  line-height: 1.5;
  position: relative;
  width: 800px;
  margin: 0px auto;
}
.transfer-operation {
    display: inline-block;
    overflow: hidden;
    margin: 0 16px;
    vertical-align: middle;
}
.transfer-operation input[type='button'] {
  width: 50px;
}
</style>

