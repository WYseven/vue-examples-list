<template>
  <section class="main">
      <input class="toggle-all" type="checkbox" v-model="isCheckedAll" />
      <ul class="todo-list">
          <!--completed editing-->
          <li 
            v-for="(item,index) in list" 
            :key="item.id"
            :class="{completed:item.checked,editing:editTodoItem === item}"
        >
              <div class="view">
                  <input class="toggle" type="checkbox" v-model="item.checked" />
                  <label @dblclick="editTodo(item,index)">{{item.title}}</label>
                  <button @click="removeTodo(index)" class="destroy"></button>
              </div>
              <input ref="editInput" class="edit" v-model="item.title"  v-focus='editTodoItem === item'
                @blur="editDone(item)"
                @keydown.13="editDone(item)"
                @keydown.esc="editCancel(item)"
               />
          </li>
      </ul>
  </section>
</template>
<script>
export default {
  props: {
    list: {
        type: Array
    }
  },
  data () {
      return {
          editTodoItem: '', // 保存要编辑的一项
          beforeEditTitle: ''
      }
  },
  // 自定义指令，目的是要获取input的光标
  directives : {
    focus : {
        inserted(el) { // 插入的那一刻执行的函数
            //console.log(el)
        },
        update (el, binding) {  // 当更新时候，判断表达式是否为true，如果为true，则自动获取焦点
            if(binding.value){
                el.focus()
            }
        }
    }
  },
  computed : {
      isCheckedAll : {
        get () {
            return !this.list.find(item => !item.checked)
        },
        set (newVal) {
            this.list.forEach(item => item.checked = newVal)
        }
      }
  },    
  methods: {
    removeTodo (index) {
        this.$emit('remove-todo', index)
    },
    // 编辑
    editTodo (item,index) {
        this.editTodoItem = item;
        // 当渲染完成后通过ref获取元素，自动获取焦点，这是一种方法，其二是可以使用自定义指令的方式,参考directives
        /*this.$nextTick(() => {
            this.$refs.editInput[index].focus()
        })*/
        this.beforeEditTitle = item.title;
    },
    // 编辑完成
    editDone (item) {
        if(item.title.trim() === ''){
            // 删除指定下标的元素
            this.removeTodo(this.list.findIndex(option => option === item))
        }
        this.editTodoItem = ''
    },
    // 取消编辑
    editCancel (item) {
        item.title = this.beforeEditTitle;

        this.beforeEditTitle = ''
        this.editTodoItem = ''
    }
  }
}
</script>
