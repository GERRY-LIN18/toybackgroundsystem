<template>
  <div class="m20">
    代辦事項 ：
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput"
      >+ 新增
    </el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      inputVisible: false,
      inputValue: "",
    };
  },
  methods: {
    handleClose(tag) {
      //   this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      this.$store.commit("todoSlice", this.dynamicTags.indexOf(tag));
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        // this.dynamicTags.push(inputValue);
        this.$store.commit("todoAdd", inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
  computed: {
    ...mapState({
      dynamicTags: (state) => state.todo.todoList,
    }),
  },
};
</script>
<style>
.m20 {
  margin: 20px 0 0 20px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
