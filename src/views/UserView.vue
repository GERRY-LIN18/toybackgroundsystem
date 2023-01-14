<template>
  <div class="message">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="form.name" placeholder="請輸入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年齡：" prop="age">
          <el-input v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性別：" prop="sex">
          <el-select v-model="form.sex" placeholder="性別：">
            <el-option label="女" value="W"></el-option>
            <el-option label="男" value="F"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="生日：" prop="date">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="地址：" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = handleClose()">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
    <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true"
      >新增</el-button
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "UserView",
  components: {},
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        age: "",
        sex: "",
        address: "",
        date: "",
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        age: [
          { required: true, message: "年龄不能为空" },
          { type: "number", message: "年龄必须为数字值" },
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],

        sex: [
          {
            required: true,
            message: "請選擇性別",
            trigger: "change",
          },
        ],

        address: [{ required: true, message: "請填寫地址", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClose() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message({
            type: "success",
            message: "新增成功!",
          });
          this.dialogVisible = false;
          this.$refs.form.resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
