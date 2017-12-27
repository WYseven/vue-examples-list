<template>
  <section class="todoapp">
    <todo-header @add-todo='addTodoHandle'></todo-header>  
    <todo-list 
      v-show="list.length" 
      :list="filterList"
      @remove-todo="removeTodoHandle"
    ></todo-list>  
    <todo-footer 
      :filter-indent="filterIndent" 
      :list="list" 
      v-show="list.length"
      @clear-completed-todo="clearCompletedTodoHandle"
    ></todo-footer>
  </section>
</template>
<script>
import TodoHeader from './components/todoHeader'
import TodoList from './components/todoList'
import TodoFooter from './components/todoFooter'

export default {
  data () {
    return {
      list: JSON.parse(localStorage.getItem('miaov-todos')) || [],
      filterIndent: 'all',
      filterListMethods: {
        all (list) {
          return list
        },
        active (list) {
          return list.filter(item => !item.checked)
        },
        completed (list) {
          return list.filter(item => item.checked)
        }
      }
    }
  },
  computed : {
    filterList () {
      return this.filterListMethods[this.filterIndent](this.list)
    }
  },
  watch: {
    list : {
      handler(){
        localStorage.setItem('miaov-todos',JSON.stringify(this.list))
      },
      deep: true
    },
    $route () {
      let filter = this.$route.query.filter
      this.filterIndent = this.filterListMethods[filter] ? filter : 'all'
    }
  },
  methods: {
    // 添加todo
    addTodoHandle (title) {
      this.list.push({
        title,
        id: Date.now(),
        checked: false
      })
    },
    removeTodoHandle (index) {
      if(index < 0) return;
      this.list.splice(index,1);
    },
    // 清除选中的项
    clearCompletedTodoHandle () {
      this.list = this.list.filter(item => !item.checked)
    }
  },
  created () {
    let indent = this.$route.query.filter; 
    this.filterIndent = this.filterListMethods[indent] ? indent : 'all'
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
@import url('./css/base');
@import url('./css/index');
</style>

