<template>
  <div style="height: 100%">
    <el-menu
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="aside"
    >
      <p class="yc">{{ !isCollapse ? "yc的玩具後台管理" : "後台" }}</p>

      <el-menu-item
        v-for="item in noChildren"
        :key="item.name"
        :index="item.name"
        @click="go(item)"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        v-for="item in hasChildren"
        :key="item.label"
        :index="item.label"
      >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group
          v-for="subItem in item.children"
          :key="subItem.name"
        >
          <el-menu-item @click="go(subItem)" :index="subItem.name">
            {{ subItem.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="scss">
.aside:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.aside {
  height: 100%;
  border: 0;
}

.yc {
  color: #fff;
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin: 20px 0;
}
</style>
<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home.vue",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "Mall.vue",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "User.vue",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "PageOne.vue",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "PageTwo.vue",
            },
          ],
        },
      ],
    };
  },
  methods: {
    go(item) {
      if (this.$route.path !== item.path) this.$router.push(item.path);
      this.$store.commit("crumbChange", item);
    },
  },
  computed: {
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>
