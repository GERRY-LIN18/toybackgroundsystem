<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div class="flex">
            <div class="mem">
              <img src="https://fakeimg.pl/200x200/00a" />
            </div>
            <div class="mem_info">
              <p class="name">super man</p>
              <p class="access">超級管理員</p>
            </div>
          </div>
          <div class="loginState">
            <p>上次登入時間<span class="r20"> 2000-12-12</span></p>
            <p>上次登入地點<span class="r20"> 地球</span></p>
          </div>
        </el-card>
        <el-card class="box-card2">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="名稱"> </el-table-column>
            <el-table-column prop="name" label="今日購買"> </el-table-column>
            <el-table-column prop="address" label="整月購買"> </el-table-column>
            <el-table-column prop="address" label="總購買"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="10">
          <el-col :span="8" v-for="i in 6" :key="i">
            <el-card
              :body-style="{
                display: 'flex',
                padding: 0,
                alignItems: 'center',
              }"
              class="miniCard"
            >
              <div class="iconBox">
                <i class="el-icon-edit"></i>
              </div>
              <div>
                <p>$666</p>
                <p>統計統計</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 報表 -->
        <el-card>
          <div ref="echadts1"></div>
        </el-card>
        <el-row :gutter="10">
          <el-col :span="12">AA</el-col>
          <el-col :span="12">BB</el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from "@/api";
import * as echarts from "echarts";
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      countData: [],
    };
  },
  mounted() {
    getData().then((data) => {
      console.log(data);
    });
    // const echarts1 = echarts.init(this.$refs.echadts1);
  },
};
</script>

<style scoped lang="scss">
.box-card {
  margin-bottom: 20px;
  .flex {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #909399;
  }

  .mem {
    width: 40%;
    padding: 0 10px 0 0;
    img {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: contain;
      border-radius: 50%;
    }
  }
  .mem_info {
    .name {
      font-size: 24px;
      font-weight: 600;
      padding: 0 0 10px;
    }
    .access {
      font-size: 18px;
    }
  }

  .loginState {
    font-size: 14px;
    color: #909399;

    .r20 {
      padding: 0 0 0 20px;
    }
  }
}
.flex {
  display: flex;
  align-items: center;
}
.el-card {
  margin-bottom: 20px;
  padding: 0 0;
}

.miniCard {
  .iconBox {
    width: 30%;
    aspect-ratio: 1 /1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #909399;
    color: #fff;
  }
}
</style>
