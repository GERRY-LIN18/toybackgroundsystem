export default {
  state: {
    todoList: ["記得要睡覺", "記得要吃飯", "記得起床"], //menu 開關
  },
  mutations: {
    todoSlice(state, val) {
      state.todoList.splice(val, 1);
    },
    todoAdd(state, val) {
      state.todoList.push(val);
    },
  },
};
