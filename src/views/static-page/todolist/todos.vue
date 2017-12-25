<template>
  <section class="todoapp">
    <todo-header></todo-header>  
    <todo-list></todo-list>  
    <todo-footer></todo-footer>  
    
  </section>
</template>
<script>
import TodoHeader from './components/todoHeader'
import TodoList from './components/todoList'
import TodoFooter from './components/todoFooter'
export default {
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

