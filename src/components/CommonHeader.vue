<template>
  <div class="bg_black">
    <el-row>
      <el-col :span="22"
        ><el-button
          type="primary"
          icon="el-icon-arrow-right"
          size="small"
          @click="handleMenu"
        ></el-button
      ></el-col>
      <el-col :span="2" class="right">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img src="https://fakeimg.pl/50x50/00c" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>個人資料</el-dropdown-item>
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.bg_black {
  background-color: black;
  color: #fff;
  height: 100%;
}
.el-row {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}
.el-dropdown-link {
  text-align: end;
}
img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.right {
  display: flex;
  justify-content: flex-end;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
  computed: {},
};
</script>
