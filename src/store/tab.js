export default {
  state: {
    isCollapse: false, //menu 開關
    crumb: [
      {
        path: "/home",
        name: "home",
        label: "首頁",
        icon: "s-home",
        url: "home/home",
      },
    ],
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    crumbChange(state, val) {
      // console.log(val);
      if (val.path !== state.crumb[0].path) {
        state.crumb = [
          {
            path: "/home",
            name: "home",
            label: "首頁",
            icon: "s-home",
            url: "home/home",
          },
          val,
        ];
      }
      console.log(state.crumb);
    },
  },
};
