<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="aside"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <p class="yc">{{ !isCollapse ? "yc的玩具後台管理" : "後台" }}</p>
      <el-menu-item
        v-for="item in noChildren"
        :key="item.name"
        :index="item.name"
        @click="go(item.path)"
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
          width="auto"
        >
          <el-menu-item @click="go(subItem.path)" :index="subItem.name">{{
            subItem.label
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="scss">
.aside {
  height: 100vh;
  border: 0;
}

.yc {
  color: #fff;
  font-weight: 600;
  text-align: center;
  width: 100%;
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
          label: "首頁",
          icon: "s-home",
          url: "home/home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用戶管理",
          icon: "user",
          url: "userManage/userManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "page1",
              name: "page1",
              label: "頁面一",
              icon: "setting",
              url: "other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "頁面二",
              icon: "setting",
              url: "other/pageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    go(path) {
      if (this.$route.path !== path) this.$router.push(path);
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
