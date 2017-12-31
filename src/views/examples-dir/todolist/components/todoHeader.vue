<template>
  <header class="header" >
      <h1>todos</h1>
      <input @keydown.13="addTodo" class="new-todo" placeholder="请输入内容" v-model="todo" />
  </header>
</template>
<script>
export default {
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo () {
      this.$emit('add-todo',this.todo)
      this.todo = ''
    }
  }
}
</script>

