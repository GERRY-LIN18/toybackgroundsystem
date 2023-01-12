export default {
  state: {
    isCollapse: false, //menu 開關
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
};
