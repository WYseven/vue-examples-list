<template>
  <div class="user-list">
    <Table highlight-row  :columns="columns3" :data="data1"></Table>
  </div>
</template>
<script>
  import {getUsersAll} from '@/methodsApi'
  export default {
    data () {
        return {
            columns3: [
                {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '用户名',
                    key: 'username'
                },
                {
                  title: '注册时间',
                  key: 'update_at'
                }
            ],
            data1: [
                {
                    username: 'John Brown',
                    update_at: ''
                }
            ]
        }
    },
    methods: {
      formatDate (time) {
        let d = new Date(time)
        return d.getFullYear()+ '-' + (d.getMonth()+1) + '-' + d.getDate();
      }
    },
    created () {
      getUsersAll().then((params) => {
        if(params.data.code === 0){
          this.data1 = params.data.users.map((data) => {
            return {
              ...data,
              update_at: this.formatDate(data.update_at)
            }
          });
        }
      })
    }
  }
</script>
<style scoped>
.user-list {
  width: 1100px;
  margin: 0 auto;
}
</style>

