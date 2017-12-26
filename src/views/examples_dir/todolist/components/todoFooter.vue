<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{unCheckedLen}}</strong>
      <span>条未选中</span>
    </span>
    <ul class="filters">
      <router-link tag="li" v-for="to in link" :key="to.query.filter" :to='to' >
        <a :class="{selected: to.query.filter === filterIndent}">{{to.query.filter}}</a>
      </router-link>
    </ul>
    <button v-show="checkedItem.length" @click="clearCompletedTodo" class="clear-completed">
      Clear completed
    </button>
  </footer>
</template>
<script>
export default {
  props: {
    list: Array,
    filterIndent: String
  },
  data () {
    return {
      link: [
        {
          path : '',
          query: {
            filter: 'all'
          }
        },
        {
          path : '',
          query: {
            filter: 'active'
          }
        },
        {
          path : '',
          query: {
            filter: 'completed'
          }
        }
      ]
    }
  },
  computed: {
    // 选中的项
    checkedItem () {
      return this.list.filter(item => item.checked)
    },
    // 未选中的个数
    unCheckedLen () {
      return this.list.length - this.checkedItem.length
    }
  },
  methods: {
    clearCompletedTodo () {
      this.$emit('clear-completed-todo')
    }
  }
}
</script>

